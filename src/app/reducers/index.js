import { combineReducers } from 'redux'
import TradesReducer from './TradesReducer';
import SearchCritReducer from './SearchCritReducer'

const RootReducers = combineReducers({TradesReducer,SearchCritReducer})

export default RootReducers