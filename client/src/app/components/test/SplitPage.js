import React from 'react';
import ReactDom from 'react-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import TradesTable from '../table/TradesTable'
import getTradesData from '../../api/MockTradeApi'
import * as TradesAction from '../../actions/TradesAction'
import SearchBar from '../search/SearchBar'
import TradesDetailTable from '../table/TradesDetailTable'
import TradeDetailView from './TradeDetailView'

class SplitPage extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.state={
            isDisabled:true
        }
        this.setEditableTrade=this.setEditableTrade.bind(this)
    }

    setEditableTrade(trade, isDisabled) {
        console.log("this func has been passed from the HomePage")
        console.log("will set the editable screen values", trade)
        this.props.actions.selectTradeAction(trade, isDisabled)
    }

    render() {
        console.log("The value of props is", this.props)
        //console.log("the func passed is", this.props.setEditableTrade)
        return(
            <MuiThemeProvider>
                <div>
                    <AppBar style={{backgroundColor: 'White'}} 
                    iconElementLeft={<TradesTable trades={this.props.trade} 
                    hasData={this.props.hasData}
                    setEditableTrade={this.setEditableTrade}
                    />} 
                    iconElementRight={<TradeDetailView/>}
                    iconStyleLeft={{width: '770px'}}
                    iconStyleRight={{width: '480px',visibility:'false'}}/>
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