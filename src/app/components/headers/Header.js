import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton'
import muiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar'
import Drawer from 'material-ui/Drawer'
import {Tabs, Tab} from 'material-ui/Tabs'

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

const Header = (props) => {
    return (
        <div>
            <MuiThemeProvider>
                <Tabs>
                    <Tab label="TRADES">
                        <Table>
                            <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>Trade date</TableHeaderColumn>
                                <TableHeaderColumn>Commodity</TableHeaderColumn>
                                <TableHeaderColumn>Side</TableHeaderColumn>
                                <TableHeaderColumn>Qty</TableHeaderColumn>
                                <TableHeaderColumn>Price</TableHeaderColumn>
                                <TableHeaderColumn>CounterParty</TableHeaderColumn>
                                <TableHeaderColumn>Location</TableHeaderColumn>
                            </TableRow>
                            </TableHeader>
                        </Table>
                    </Tab>
                    <Tab label="TRANSFERS"></Tab>
                    <Tab label="TRANSPORTS"></Tab>
                </Tabs>
            {/*<Toolbar style={{backgroundColor:'white'}}>
                <ToolbarGroup firstChild={true}>
                    <FlatButton label='Home' />
                    <FlatButton label='Courses' />
                    <FlatButton label='About' />
                    <FlatButton label='Contact' />
                </ToolbarGroup>
                <ToolbarGroup>
                    <Drawer docked={false} width={400} open={false}></Drawer>
                </ToolbarGroup>
    </Toolbar>*/}
            </MuiThemeProvider>
        </div>
    );
}

module.exports = Header;