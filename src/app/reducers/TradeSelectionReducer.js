import React from 'react'

import Actions from '../actions/Actions'

function TradeSelectionReducer(state={}, action) {
    switch (action.type) {
        case Actions.SELECT_TRADE:
            console.log("returning selected trade from reducer", Object.assign({},action.selectedTrade))
            return Object.assign({},action.selectedTrade);    
        default:
            return state;
    }
}

module.exports = TradeSelectionReducer