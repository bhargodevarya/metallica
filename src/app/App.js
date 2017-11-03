import React from 'react'
import LoginPageTag from './components/login/LoginPage'
import AppRoutes from './routes/Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import ConfigureStore from '../app/store/AppStore'
import {loadTrades} from '../app/actions/TradesAction'
import {createSearchCriteria} from '../app/actions/SearchAction'
import AppState from '../app/startup/StartupState'

const store = ConfigureStore();
const menuItems = ["AL","ZN"]
//store.dispatch(loadTrades())
store.dispatch(createSearchCriteria(AppState.searchCriteria))
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