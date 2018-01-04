import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton'
import Input from 'material-ui/svg-icons/action/input'

const LogoutIcon = (props) => {
    return (
        <div>
            <MuiThemeProvider>
                <IconButton onClick={props.logout}>
                    <Input/>
                </IconButton>
            </MuiThemeProvider>
        </div>
    );
}

module.exports = LogoutIcon