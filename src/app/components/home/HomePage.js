import React from 'react';
import ReactDom from 'react-dom';
import muiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'

import UserIcon from '../Icons/Icons'
import UserTabs from '../usertabs/UserTabs'
import SplitPage from '../test/SplitPage'

const MyTabs = () => {
    let tabLabels = ['TRADES','TRANSFERS','TRANSPORTS']
    return (
    <UserTabs tabs={tabLabels} content={<SplitPage/>}/>
    );
}

const Home = (props) => {
    return (
        <MuiThemeProvider>
            <div>
                <AppBar style={{backgroundColor: 'White'}} iconElementLeft={<MyTabs/>}
                iconElementRight={<UserIcon initials="U"/>}/>
            </div>            
        </MuiThemeProvider>
    )
}

module.exports = Home