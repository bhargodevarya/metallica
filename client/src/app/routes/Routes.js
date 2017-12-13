import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from '../components/home/HomePage';
import LoginPage from '../components/login/LoginPage';
import SplitPage from '../components/test/SplitPage'
import DummyHomePage from '../components/dummy/DummyHomePage'

const AppRoutes = () => {
    return(
        <Switch>
            <Route exact path="/" component={LoginPage}/>
            <Route path="/home" component={HomePage}/>
            <Route path="/split" component={SplitPage}/>
            <Route path="/dummyHome" component={DummyHomePage}/>
        </Switch>
    )
}

export default AppRoutes;