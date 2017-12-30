import getTradesData from '../api/MockTradeApi'
import Actions from './Actions'
import { makeDateString } from '../util/Util'
import axios from 'axios'

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

function defaultTradeDetail() {
    return {
        type : Actions.DEFAULT_EDIT_TRADE
    }
}

function deleteTrade(tradeId) {
    return {
        type : Actions.DELETE_TRADE,
        tradeId : tradeId
    }
}

function selectedTrade(trade, isDisabled) {
    return {
        type : Actions.SELECT_TRADE,
        selectedTrade : trade,
        isDisabled : isDisabled
    }
}

function updateSelectedTradeField(obj) {
    return {
        type: Actions.UPDATE_SELECTED_FIELD,
        updates: obj
    }
}

function searchTrade(criteria) {
    return {
        type: Actions.SEARCH_TRADE,
        criteria: criteria
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
    //filterTrades(trades, searchCriteria)
    axios.post('http://localhost:4000/trade/search',searchCriteria).then(res => {
        console.log(res.data)
    }).catch(err => console.log(err))
    return function(dispatch) {
        return dispatch(searchTrade(searchCriteria));
    }
}

export function editTradeAction(trade) {
    return function(dispatch) {
        return dispatch(editTrade(trade))
    }
}

export function deleteTradeAction(tradeId) {
    console.log('received request to delete trade', tradeId)
    axios.delete(`http://localhost:4000/trade/deleteTrade/${tradeId}`).then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err)
    })
    return function(dispatch) {
        return dispatch(deleteTrade(tradeId))
    }
}

export function selectTradeAction(trade, isDisabled) {
    return function(dispatch) {
        return dispatch(selectedTrade(trade, isDisabled))
    }
}

export function setTradeDetailToDefault() {
    return function(dispatch) {
        return dispatch(defaultTradeDetail())
    }
}

export function updateSelectedFieldValue(obj) {
    return function(dispatch) {
        return dispatch(updateSelectedTradeField(obj))
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