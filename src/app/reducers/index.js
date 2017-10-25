import { combineReducers } from 'redux';
import PersonReducer from './PersonReducer';

/**
 * combineReducers take an object as an argument.
 * This object all the reducers that are present in the app.
 * {PersonReducer:PersonReducer}, new syntax is used below.
 */
const RootReducer = combineReducers({PersonReducer});

/**
 * default export means that only this gets imported by default.
 * import <alias> from '<path to this file>'
 * use alias directly, no need to for alias.RootReducer
 */
export default RootReducer
