import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar'

const UserIcon = (props) => {
    return (
        <div>
            <MuiThemeProvider>
                <Avatar>{props.initials}</Avatar>
            </MuiThemeProvider>
        </div>
    );
}

module.exports = UserIcon