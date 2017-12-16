import { combineReducers } from 'redux'
import TradesReducer from './TradesReducer';
import SearchCritReducer from './SearchCritReducer'
import {LoadSearchCritReducer} from './LoadSearchCritReducer'
import TradeSelectionReducer from './TradeSelectionReducer'
import {RefDataReducer} from './RefDataReducer'

const RootReducers = combineReducers({TradesReducer, SearchCritReducer,
    LoadSearchCritReducer, TradeSelectionReducer, RefDataReducer})

export default RootReducers