import React from 'react';
import axios from 'axios';

import {loadRefDataSuccess} from '../actions/RefDataAction'
import {loadSearchCriteria} from '../actions/SearchAction'

const AppState = {
    searchCriteria: {
        from:'',
        to:'',
        Commodity:["AL","ZN","CU","AU","AG"],
        Countertparty:["Lorem","Ipsum","Dolor","Amet"],
        Location:['NY',"LN","SG","DN"]
    },
    data:[]
}


function initializeAppState(store) {
    store.dispatch(loadSearchCriteria(AppState.searchCriteria))
    axios.get('http://localhost:3000/refdata').
    then(res => {console.log("got refData",res.data);
    store.dispatch(loadRefDataSuccess(res.data))})
};

export default AppState;

module.exports = {
    initializeAppState, AppState
}