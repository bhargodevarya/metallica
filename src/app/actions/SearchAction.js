import Action from './Actions';

function loadSearchCriteriaSuccess(searchCriteria) {
    console.log('creating action', Action.LOAD_SEARCH_CRITERIA)
    return {
        type:Action.LOAD_SEARCH_CRITERIA,
        searchCriteria:searchCriteria        
    }
}

function setActiveSearchCriteriaSuccess(activeSearchCriteria) {
    return {
        type:Action.SET_ACTIVE_SEARCH_CRITERIA,
        activeSearchCriteria:activeSearchCriteria
    }
}

export function createActiveSearchCriteria(activeSearchCriteria) {
    return function(dispatch) {
        return dispatch(setActiveSearchCriteriaSuccess(activeSearchCriteria));
    }
}

export function loadSearchCriteria(searchCriteria) {
    console.log("received criteria ", searchCriteria)
    return function(dispatch) {
        return dispatch(loadSearchCriteriaSuccess(searchCriteria))
    }
}