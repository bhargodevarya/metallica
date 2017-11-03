import getTradesData from '../api/MockTradeApi'
import Actions from './Actions'

export function loadTradesSuccess(trades) {
    //console.log('dispatching', trades, Actions.FETCH_TRADES)
    return {
        type:Actions.LOAD_TRADES,
        trades: trades
    }
}

function searchTradesSuccess(trades) {
    //cosole.log('dispatching action', Actions.FETCH_TRADES)
    return {
        id:Actions.FETCH_TRADES,
        trades:trades
    }
}

export function loadTrades() {
    //console.log('called loadTrades')
    return function(dispatch) {
        return dispatch(loadTradesSuccess(getTradesData()));
    }
}

//TODO make an API call with the search criteria
export function searchTrades(searchCriteria) {
    console.log('received the search criteria as ', searchCriteria)
    return function(dispatch) {
        return dispatch(searchTradesSuccess({}));
    }
}
//module.exports = loadTrades