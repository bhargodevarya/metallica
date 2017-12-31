import React from 'react'
import LoginPageTag from './components/login/LoginPage'
import AppRoutes from './routes/Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import ConfigureStore from '../app/store/AppStore'
import {AppState, initializeAppState} from '../app/startup/StartupState'
import {startSocket} from './socket/util.js'

const store = ConfigureStore();
initializeAppState(store)
//startSocket()
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