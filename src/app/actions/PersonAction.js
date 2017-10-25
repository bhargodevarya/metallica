import personApi from '../api/MockPersonApi';

function loadPersonSuccess(persons) {
    console.log(persons)
    return {
        type:'FETCH_PERSONS',
        persons:persons
    }
}

export function fetchPersons() {
    return function(dispatch) {
        return dispatch(loadPersonSuccess(personApi.getPersons()))
    }
}

