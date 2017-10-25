import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from '../components/home/HomePage';
import DummyHomePage from '../components/dummy/DummyHomePage'

const AppRoutes = () => {
    return(
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/dummyHome" component={DummyHomePage}/>
        </Switch>
    )
}

export default AppRoutes;