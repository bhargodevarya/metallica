import { createStore, applyMiddleware } from 'redux'
import RootReducers from '../reducers/index';
import thunk from 'redux-thunk'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

const ConfigureStore = (initialState) => {
    return createStore(RootReducers, initialState,
        applyMiddleware(thunk, reduxImmutableStateInvariant()));
}

module.exports = ConfigureStore