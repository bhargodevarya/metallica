import React from 'react';
import ReactDom from 'react-dom';
import muiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';

import Logout from '../Icons/Icons'
import UserTabs from '../usertabs/UserTabs'
import SplitPage from '../test/SplitPage'
import SearchBar from '../search/SearchBar'
import FlatButton from 'material-ui/FlatButton/FlatButton';
import {googleProvider, firebaseAuth} from '../login/Login'
import Scroller from '../scroller/Scroller'

/**
 * MAKE THIS THE ONLY COMPONENT THAT GETS DATA FROM THE STORE
 * PASS IT TO THE CHILD COMPONENTS AS PROPS
 * TODO
 * convert this stateless component into a statefull component
 * Home is the parent component of 2 major components
 * 1. SearchBar
 * 2. SplitPage
 * 
 * The state of the SplitPage needs to change on the click of search button of the SearchBar.
 * There are 2 scenarios:
 * 1. 1st page load
 * 2. page load with a search criteria
 * 
 * 1. There would be no data in the splitPage as there is no search criteria.
 * Therefore on initial load of the screen, no data is displayed
 * 
 * 2. There are further 2 scenarios:-
 * 2.1 no data matches the search criteria 
 * 2.2 data matches the search criteria
 * 
 * 2.1 if no data is found, no re-render should happen
 * 2.2 if data is found, re-render the page
 * 
 * Therefore, you need a state variable, hasData, in this component which decides whether data needs to be displayed or not.
 * 
 * hasData will be false for the initial page load.
 * The click of the search button should do the following:-
 * >collect search criteria
 * >make a request to get the data
 * >if matching data found set the hasData variable accordingly
 * 
 * Therefore, I need to pass a func to the searchBar component that can set the hasData variable.
 */

 class Home extends React.Component {

    constructor(props) {
        super(props)
        this.handleLogOut=this.handleLogOut.bind(this)
    }

    setEditableTrade(trade) {
        console.log("this func has been passed from the HomePage")
        console.log("will set the editable screen values", trade)
    }

    MyTabs(props) {
        let tabLabels = ['TRADES','TRANSFERS','TRANSPORTS']
        return (
        <UserTabs tabs={tabLabels} 
        content={<SplitPage hasData={false}/>} 
        search={<SearchBar/>}/>
        );
    }

    handleLogOut() {
        console.log("logout")
        firebaseAuth().signOut().then(user => {
            console.log("in the logout callback")
            this.props.history.push("/")
        })
        console.log("after the logout, cb no finished")
    }

    render() {
        //this.setState({loggedin:true})
        return (
            <MuiThemeProvider>
                <div>
                    <Scroller/>
                    <AppBar style={{backgroundColor: 'White'}} iconElementLeft={this.MyTabs()}
                    iconElementRight={<Logout logout={this.handleLogOut}/>}/>
                </div>            
            </MuiThemeProvider>
        )
    }
 }
module.exports = Home