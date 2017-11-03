import Actions from '../actions/Actions'
import React from 'react'

function SearchCritReducer(initialState=[], action) {
    console.log('received action ', action.type, action.searchCriteria)
    switch (action.type) {
        case Actions.SET_SEARCH_CRITERIA:
            return action.searchCriteria;
        default:console.log('default from SearchCritReducer')
            return initialState;
    }
}

module.exports = SearchCritReducer