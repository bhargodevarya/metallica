import React from 'react'
import LoginPageTag from './components/login/LoginPage'
import AppRoutes from './routes/Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import ConfigureStore from '../app/store/AppStore'
import {loadTrades, selectTradeAction} from '../app/actions/TradesAction'
import {loadSearchCriteria} from '../app/actions/SearchAction'
import AppState from '../app/startup/StartupState'

const store = ConfigureStore();
//store.dispatch(loadTrades())
store.dispatch(loadSearchCriteria(AppState.searchCriteria))
//store.dispatch(selectTradeAction({}))
export const App = () => {
    return (<Provider store={store} >
        <div>
            <Router>
            <AppRoutes />
            </Router>
        </div></Provider>
    );
}

module.exports = App