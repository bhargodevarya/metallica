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
        this.handleEdit=this.handleEdit.bind(this)
        this.handleDelete=this.handleDelete.bind(this)
        this.handleTradeFieldUpdate=this.handleTradeFieldUpdate.bind(this)
    }

    
    handleDelete(event) {
        event.preventDefault()
        console.log("handle delete")
        this.props.actions.deleteTradeAction(this.props.trade.id)
        this.props.actions.setTradeDetailToDefault()
    }

    handleEdit() {
        console.log("handle edit")
        console.log(this.props.trade)
        //this.setState({isDisabled:false})
        this.props.actions.selectTradeAction(this.props.trade, false)        
    }

    handleTradeFieldUpdate() {
        console.log('handling field update')
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
        if(this.props.trade.id) {
            label = "TRADE ID: ".concat(this.props.trade.id)
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
        console.log("the selected trade is >>>////",this.props.trade.isDisabled,this.props.trade)
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
                        isDisabled={this.props.trade.isDisabled} 
                        selectedTrade={this.props.trade}
                        refData={this.props.refData}/>
                    </CardText>
            </Card>
            </div>
        )

    }
}

function mapStateToProps(state, ownProps) {
    console.log("#######",state.RefDataReducer)
    return {
        trade: state.TradeSelectionReducer,
        refData: state.RefDataReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TradesAction, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(TradeDetailView)