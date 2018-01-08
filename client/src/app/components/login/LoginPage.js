import React from 'react';
import ReactDom from 'react-dom';
import muiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton'
import AppBar from 'material-ui/AppBar'
import {Redirect} from 'react-router-dom'

import {googleProvider, firebaseAuth} from './Login'

class LoginPage extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            redirect:false
        }
        this.handleLogin=this.handleLogin.bind(this)        
    }

    componentWillMount() {
        this.authListener=firebaseAuth().onAuthStateChanged(user => {
            if(user){
                console.log("user is", user)
                this.setState({redirect:true})
            } else {
                this.setState({
                    loggedin:false
                })
            }
        })
    }

    componentWillUnmount() {
        this.authListener()
    }
    
    handleLogin() {
        firebaseAuth().signInWithPopup(googleProvider).then((result, err) => {
            if(err) {} else {
                this.setState({redirect:true})
            }
        })
    }

    render() {
        if(this.state.redirect === true) {
            return <Redirect to="/home"/>
        }
        return (
            <MuiThemeProvider>
                <div>
                    {"Hello"}
                    <FlatButton id="login" label="login with google" primary={true} onClick={this.handleLogin}/>
                </div>
            </MuiThemeProvider>
        );
    }
}

module.exports = LoginPage