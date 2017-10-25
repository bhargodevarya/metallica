import { createStore, applyMiddleware } from 'redux';
import RootRed from '../reducers/index'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'

const ConfigureStore = (initialState) => {
    return createStore(RootRed, initialState, 
        applyMiddleware(thunk, reduxImmutableStateInvariant()));
}

module.exports = ConfigureStore;