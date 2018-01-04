import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar'
import FlatButton from 'material-ui/FlatButton'

const UserIcon = (props) => {
    return (
        <div>
            <MuiThemeProvider>
                {/* <Avatar>{props.initials}</Avatar> */}
                <FlatButton label="logout"/>
            </MuiThemeProvider>
        </div>
    );
}

module.exports = UserIcon