import getTradesData from '../api/MockTradeApi'
import Actions from './Actions'
import { makeDateString } from '../util/Util'

export function loadTradesSuccess(trades) {
    //console.log('dispatching', trades, Actions.FETCH_TRADES)
    return {
        type : Actions.LOAD_TRADES,
        trades : trades
    }
}

function searchTradesSuccess(trades) {
    console.log('dispatching action', Actions.FETCH_TRADES)
    return {
        type : Actions.FETCH_TRADES,
        trades : trades
    }
}

function editTrade(trade) {
    return {
        type : Actions.EDIT_TRADE,
        trade : trade
    }
}

function deleteTrade(trade) {
    return {
        type : Actions.DELETE_TRADE,
        trade : trade
    }
}

function selectedTrade(trade) {
    return {
        type : Actions.SELECT_TRADE,
        selectedTrade : trade
    }
}

export function loadTrades() {
    //console.log('called loadTrades')
    return function(dispatch) {
        return dispatch(loadTradesSuccess(getTradesData().data));
    }
}

//TODO make an API call with the search criteria
export function searchTrades(searchCriteria) {
    console.log('received the search criteria as ', searchCriteria)
    let trades = getTradesData();
    //TODO create a function that filters trades based on the searchCriteria
    filterTrades(trades, searchCriteria)
    return function(dispatch) {
        return dispatch(searchTradesSuccess({}));
    }
}

export function editTradeAction(trade) {
    return function(dispatch) {
        return dispatch(editTrade(trade))
    }
}

export function deleteTradeAction(trade) {
    return function(dispatch) {
        return dispatch(deleteTrade(trade))
    }
}

export function selectTradeAction(trade) {
    return function(dispatch) {
        return dispatch(selectedTrade(trade))
    }
}


function filterTrades(trades, criteria) {
    // console.log(trades)
    // console.log(criteria)
    // console.log(criteria.from.getDate(),
    // criteria.from.getMonth(),
    // criteria.from.getFullYear())
    console.log(criteria.from.toDateString())
    console.log(Object.keys(trades[0][0]),trades[0][0])
    let critDateAsString = JSON.stringify(criteria.from)
    let tradeDateAsStr = JSON.stringify(trades[0][0])
    console.log(critDateAsString, typeof critDateAsString, tradeDateAsStr, typeof tradeDateAsStr)
    //console.log(">>>>>>>>>>>>>>>>>>>>>",makeDateString(criteria.from, tradeDateAsStr))
}
//module.exports = loadTrades