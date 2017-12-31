import Actions from '../actions/Actions'
import React from 'react'

function TradesReducer(state=[],action) {
    console.log('TradesReducer received the action of type ', action.type)
    switch (action.type) {
        case Actions.LOAD_TRADES:
            return action.trades;
        case Actions.FETCH_TRADES:
            console.log('reducer for action ', Actions.FETCH_TRADES)
            return state;
        case Actions.DELETE_TRADE:
            console.log("reducer for action ", Actions.DELETE_TRADE)
            console.log("will delete the trade ", action.tradeId)
            return state.filter((trade) => trade.TradeId != action.tradeId);    
        case Actions.EDIT_TRADE:
            console.log("will edit the trade", action.trade)
            return state; 
        case Actions.SEARCH_TRADE:
            console.log("will make a call to get trades", action.criteria)
            return state;
        case Actions.UPSERT_TRADE:
            console.log("will update/insert trade", action.trade)
            return state;         
        default://console.log('default from tradesReducer')
            return state;
    }
}

module.exports = TradesReducer