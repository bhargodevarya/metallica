import React from 'react';
import ReactDom from 'react-dom';
import muiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'

const Home = (props) => {
    return (
        <MuiThemeProvider>
            <div>This is the landing screen
            </div>            
        </MuiThemeProvider>
    )
}

module.exports = Home