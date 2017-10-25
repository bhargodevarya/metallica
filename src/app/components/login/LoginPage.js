import React from 'react';
import ReactDom from 'react-dom';
import muiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton'
import AppBar from 'material-ui/AppBar'

const Login = (props) => {
    return (
        <MuiThemeProvider>
            <div>
                <AppBar title="login"/>
                <TextField id="username" hintText={props.username}/><br />
                <TextField id="password" hintText={props.password}/><br/>
                <FlatButton label="submit" primary={true}/>
            </div>
        </MuiThemeProvider>
    )
}

module.exports = Login