import Action from './Actions';

function searchCriteriaSuccess(searchCriteria) {
    //console.log('creating action', searchCriteria)
    return {
        type:Action.SET_SEARCH_CRITERIA,
        searchCriteria:searchCriteria        
    }
}

export function createSearchCriteria(searchCriteria) {
    return function(dispatch) {
        return dispatch(searchCriteriaSuccess(searchCriteria))
    }
}