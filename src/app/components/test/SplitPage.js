import React from 'react';
import ReactDom from 'react-dom'

import {Table, TableBody, TableRow, 
    TableHeader, TableHeaderColumn, 
    TableRowColumn} from 'material-ui/Table'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import ActionHome from 'material-ui/svg-icons/action/home';
import {Card, CardActions, 
    CardHeader, CardMedia, 
    CardTitle, CardText} from 'material-ui/Card';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Avatar from 'material-ui/Avatar'
import TextField from 'material-ui/TextField'

import TradesTable from '../table/TradesTable'
import getTradesData from '../../api/MockTradeApi'


class SplitPage extends React.Component {

    constructor(props=getTradesData()) {
        super(props)
    }

    DetailViewIcons() {
        return(
            <div>
                <Avatar>D</Avatar><Avatar>E</Avatar>
            </div>
        );
    };
    
    TradeLabel(label) {
        return (
        <div>
            {label}
        </div>
        );
    };
    
    DetailView2() {
        return (
        <div>
            {this.TradeLabel("Trade ID: XXXXXX")}
            {this.DetailViewIcons()}
        </div>
        );
    };
    
    TradeDetails(){
        return (
            <div>
                <Table>
                    <TableBody displayRowCheckbox={false}>
                        <TableRow>
                            <TableRowColumn>{this.TradeLabel("Trade Date")}</TableRowColumn>
                            <TableRowColumn><TextField disabled={true}/></TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>{this.TradeLabel("Commodity")}</TableRowColumn>
                            <TableRowColumn><TextField disabled={true}/></TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>{this.TradeLabel("Side")}</TableRowColumn>
                            <TableRowColumn><TextField disabled={true}/></TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>{this.TradeLabel("Counter Party")}</TableRowColumn>
                            <TableRowColumn><TextField disabled={true}/></TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>{this.TradeLabel("Location")}</TableRowColumn>
                            <TableRowColumn><TextField disabled={true}/></TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>{this.TradeLabel("Price")}</TableRowColumn>
                            <TableRowColumn><TextField disabled={true}/></TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>{this.TradeLabel("Quantity")}</TableRowColumn>
                            <TableRowColumn><TextField disabled={true}/></TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        );
    };
    
    DetailCardView(){
        return(
            <Card>
                <CardHeader style={{backgroundColor:'White', height:'180px'}} title={this.DetailView2()}/>
                    <CardText>
                        {this.TradeDetails()}
                    </CardText>
            </Card>
        )
    }

    render() {
        const tradesData = getTradesData()
        let detailCard = this.DetailCardView();
        return(
            <MuiThemeProvider>
                <div>
                    <AppBar style={{backgroundColor: 'White'}} 
                    iconElementLeft={<TradesTable trades={tradesData}/>} 
                    iconElementRight={detailCard}
                    iconStyleLeft={{width: '700px'}}
                    iconStyleRight={{width: '550px',visibility:'false'}}/>
                </div>
            </MuiThemeProvider>
        )
    }
}

function mapStateToProps(state, ownProps) {
    //console.log("#######",state)
    return {
        trade: state.TradesReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TradesAction, dispatch)
    };
}

export default SplitPage