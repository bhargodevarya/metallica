import { combineReducers } from 'redux'
import TradesReducer from './TradesReducer';
import SearchCritReducer from './SearchCritReducer'
import {LoadSearchCritReducer} from './LoadSearchCritReducer'
import TradeSelectionReducer from './TradeSelectionReducer'

const RootReducers = combineReducers({TradesReducer,SearchCritReducer,
    LoadSearchCritReducer,TradeSelectionReducer})

export default RootReducers