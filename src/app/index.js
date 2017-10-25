import React from 'react'
import ReactDom from 'react-dom'
import Provider from 'react-redux'

import App from './App'
import AppRoutes from './routes/Routes'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDom.render(<App/>, document.getElementById('app'));