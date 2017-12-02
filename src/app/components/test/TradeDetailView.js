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
    }

    
    handleDelete(event) {
        event.preventDefault()
        console.log("handle delete")
    }

    handleEdit() {
        console.log("handle edit")
        console.log(this.props)
        this.setState({isDisabled:false})        
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
            iconElementRight={this.DetailViewIcons()}></AppBar>
        </div>
        );
    };

    render() {
        console.log("the selected trade is >>>////",this.props.trade)
        return(
            <Card>
                <CardHeader style={{backgroundColor:'White', height:'180px'}} 
                title={this.DetailView()}/>
                    <CardText>
                        <TradesDetailTable isDisabled={false} selectedTrade={this.props.trade}/>
                    </CardText>
            </Card>
        )

    }
}

function mapStateToProps(state, ownProps) {
    console.log("#######",state.TradeSelectionReducer)
    return {
        trade: state.TradeSelectionReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TradesAction, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(TradeDetailView)