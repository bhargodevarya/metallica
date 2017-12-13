import React from 'react';
import Actions from '../actions/Actions'

export function LoadSearchCritReducer(initialState=[], action) {
    console.log('loadSearchCriteriaReducer, received action ',action.type)
    switch (action.type) {
        case Actions.LOAD_SEARCH_CRITERIA:console.log('matched',action.searchCriteria)
            return action.searchCriteria;
        default:
            return initialState;
    }
}