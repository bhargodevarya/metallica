import React from 'react'

import Actions from '../actions/Actions'

function TradeSelectionReducer(state=createDefaultTrade(true), action) {
    console.log("TradeSelectionReducer", action)
    switch (action.type) {
        case Actions.SELECT_TRADE:
            if(action.isDisabled) {
                console.log("TradeSelectionReducer row has been selected", action.isDisabled,Object.assign({},action.selectedTrade,action.isDisabled))
                return Object.assign({},createDefaultTrade(action.isDisabled), action.selectedTrade);    
            } else  {
                console.log("TradeSelectionReducer edit has been clicked ",
                Object.assign({},state,{"isDisabled":false}))
                return Object.assign({},state,{"isDisabled":false});
            }
        default:
            return state;
    }
}

const createDefaultTrade = (isDisabled) => {
    let emptyTrade = {"id":'',
	"TradeDate":'',
	"Commodity":'',
	"Side":'',
	"Qty":'',
	"Price":'',
	"CounterParty":'',
    "Location":'',
    "isDisabled":isDisabled
    }
    return emptyTrade;
}

module.exports = TradeSelectionReducer