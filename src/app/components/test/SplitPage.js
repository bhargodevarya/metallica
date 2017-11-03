import React from 'react';
import ReactDom from 'react-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {Table, TableBody, TableRow, 
    TableHeader, TableHeaderColumn, 
    TableRowColumn} from 'material-ui/Table'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import {Card, CardActions, 
    CardHeader, CardMedia, 
    CardTitle, CardText} from 'material-ui/Card';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Avatar from 'material-ui/Avatar'
import TextField from 'material-ui/TextField'
import EditIcon from 'material-ui/svg-icons/editor/mode-edit'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import TradesTable from '../table/TradesTable'
import getTradesData from '../../api/MockTradeApi'
import * as TradesAction from '../../actions/TradesAction'
import SearchBar from '../search/SearchBar'
import TradesDetailTable from '../table/TradesDetailTable'


class SplitPage extends React.Component {

    constructor(props, context) {
        super(props, context)
    }

    handleDelete(event) {
        event.preventDefault()
        console.log("handle delete")
    }

    handleEdit() {
        console.log("handle edit")
        console.log(this.props)
    }

    DetailViewIcons() {        
        return(
            <div>
                <IconButton onClick={this.handleDelete.bind(this)}><DeleteIcon/></IconButton>
                <IconButton onClick={this.handleEdit.bind(this)}><EditIcon/></IconButton>
            </div>
        );
    };
    
    TradeLabel(label) { return <div>{label}</div>}
    
    DetailView2() {
        return (
        <div>
            <AppBar style={{width: '520px', backgroundColor:'White'}} iconElementLeft={this.TradeLabel("Trade ID: XXXXXX")} 
            iconElementRight={this.DetailViewIcons()}></AppBar>
        </div>
        );
    };
    
    DetailCardView(){
        return(
            <Card>
                <CardHeader style={{backgroundColor:'White', height:'180px'}} title={this.DetailView2()}/>
                    <CardText>
                        <TradesDetailTable/>
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
                    iconElementLeft={<TradesTable trades={this.props.trade}/>} 
                    iconElementRight={detailCard}
                    iconStyleLeft={{width: '700px'}}
                    iconStyleRight={{width: '550px',visibility:'false'}}/>
                </div>
            </MuiThemeProvider>
        )
    }
}

function mapStateToProps(state, ownProps) {
    console.log("#######",state)
    return {
        trade: state.TradesReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TradesAction, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(SplitPage)