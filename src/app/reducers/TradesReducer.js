import Actions from '../actions/Actions'
import React from 'react'

function TradesReducer(state=[],action) {
    console.log('reducer received the action of type ', action.type)
    switch (action.type) {
        case Actions.LOAD_TRADES:
            return action.trades;
        case Actions.FETCH_TRADES:
            console.log('reducer for action ', Actions.FETCH_TRADES)
            return state;
        default:console.log('default from tradesReducer')
            return state;
    }
}

module.exports = TradesReducer