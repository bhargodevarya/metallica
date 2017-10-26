import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'

import ConfigureStore from '../app/store/AppStore'
import {loadTrades} from '../app/actions/TradesAction'

import App from './App'
import LoginPageTag from './components/login/LoginPage'
import AppRoutes from './routes/Routes'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDom.render(<App/>, document.getElementById('app'));