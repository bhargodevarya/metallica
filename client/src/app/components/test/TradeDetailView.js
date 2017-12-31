import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import {Card, CardActions, 
    CardHeader, CardMedia, 
    CardTitle, CardText} from 'material-ui/Card';

import TradesDetailTable from '../table/TradesDetailTable'
import * as TradesAction from '../../actions/TradesAction'

//TODO handle delete and edit
class TradeDetailView extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.state={
            updatedTrade:{}
        }
        this.handleEdit=this.handleEdit.bind(this)
        this.handleDelete=this.handleDelete.bind(this)
        this.handleTradeFieldUpdate=this.handleTradeFieldUpdate.bind(this)
        this.handleUpsert=this.handleUpsert.bind(this)
    }

    
    handleDelete(event) {
        event.preventDefault()
        console.log("handle delete")
        this.props.actions.deleteTradeAction(this.props.selectedTrade.id)
        this.props.actions.setTradeDetailToDefault()
    }

    handleEdit() {
        console.log("handle edit")
        console.log(this.props.trade)
        //this.setState({isDisabled:false})
        this.props.actions.selectTradeAction(this.props.trade, false)        
    }

    handleTradeFieldUpdate(obj) {
        console.log('handling field update', obj)
        this.state.updatedTrade = Object.assign({}, this.state.updatedTrade, obj)
        console.log("updatedTrade is ", this.state.updatedTrade)
    }

    handleUpsert(newTrade) {
        let tradeId = {}
        if(newTrade) {
            tradeId["TradeId"]=""
        } else {
            tradeId["TradeId"]=this.props.selectedTrade.id
        }
        let myNewTrade=Object.assign({}, this.state.updatedTrade,{"newTrade":newTrade}, tradeId)
        console.log("handleUpsert", myNewTrade)
        this.props.actions.fireUpsertTrade(myNewTrade)
    }

    DetailViewIcons(trade) {        
        return(
            <div>
                <IconButton onClick={this.handleDelete}><DeleteIcon/></IconButton>
                <IconButton onClick={this.handleEdit}><EditIcon/></IconButton>
            </div>
        );
    };
    
    TradeLabel(label) { return <div>{label}</div>}
    
    DetailView() {
        let label;
        if(this.props.selectedTrade.id) {
            label = "TRADE ID: ".concat(this.props.selectedTrade.id)
        } else {
            label = "TRADE ID: "
        }
        return (
        <div>
            <AppBar style={{width: '450px', backgroundColor:'White'}} 
            iconElementLeft={this.TradeLabel(label)} 
            iconElementRight={this.DetailViewIcons(this.props.trade)}></AppBar>
        </div>
        );
    };

    render() {
        console.log("the selected trade is >>>////",this.props.selectedTrade)
        //console.log("TradeDetailView refData is ", this.props)
        if(Object.keys(this.props.refData).length > 0) {
            console.log("TradeDetailView refData is ", this.props.refData)
        } else {
            console.log("TradeDetailView refData is not present")
        }
        return(
            <div>
            <Card>
                <CardHeader style={{backgroundColor:'White', height:'180px'}} 
                title={this.DetailView()}/>
                    <CardText>
                        <TradesDetailTable
                        handleTradeFieldUpdate={this.handleTradeFieldUpdate} 
                        isDisabled={this.props.selectedTrade.isDisabled} 
                        selectedTrade={this.props.selectedTrade}
                        refData={this.props.refData}
                        tradeModificationFunc={this.handleUpsert}/>
                    </CardText>
            </Card>
            </div>
        )

    }
}

function mapStateToProps(state, ownProps) {
    console.log("#######",state)
    return {
        selectedTrade: state.TradeSelectionReducer,
        refData: state.RefDataReducer,
        tradeRed: state.TradesReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TradesAction, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(TradeDetailView)