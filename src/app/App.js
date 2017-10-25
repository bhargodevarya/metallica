import React from 'react'
import LoginPageTag from './components/login/LoginPage'
import AppRoutes from './routes/Routes'
import { BrowserRouter as Router } from 'react-router-dom'

export const App = () => {
    return (
        <div>
            <Router>
            {/*<Header />
            <LoginPageTag username="username" password="password"/>*/}
            <AppRoutes />
            </Router>
        </div>
    );
}

module.exports = App