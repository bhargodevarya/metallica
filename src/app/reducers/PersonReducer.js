import React from 'react';

function PersonReducer(state=[], action) {
    console.log(action.type)
    switch (action.type) {
        case 'FETCH_PERSONS':
            return action.persons;    
        default:
            return state;
    }
}

module.exports = PersonReducer