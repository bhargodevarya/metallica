import Actions from '../actions/Actions'
import React from 'react'

function TradesReducer(state=[],action) {
    console.log('reducer received the action of type ', action.type)
    switch (action.type) {
        case 'FETCH_TRADES':
            return action.trades;
        default:
            return state;
    }
}

module.exports = TradesReducer