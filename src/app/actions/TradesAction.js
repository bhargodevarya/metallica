import getTradesData from '../api/MockTradeApi'
import Actions from './Actions'

export function loadTradesSuccess(trades) {
    console.log('dispatching', trades, Actions.FETCH_TRADES)
    return {
        type:'FETCH_TRADES',
        trades: trades
    }
}

export function loadTrades() {
    console.log('called loadTrades')
    return function(dispatch) {
        return dispatch(loadTradesSuccess(getTradesData()));
    }
}

//module.exports = loadTrades