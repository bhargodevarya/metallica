import React from 'react'
import LoginPageTag from './components/login/LoginPage'
import AppRoutes from './routes/Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import ConfigureStore from '../app/store/AppStore'
import {loadTrades} from '../app/actions/TradesAction'

const store = ConfigureStore();
store.dispatch(loadTrades())
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