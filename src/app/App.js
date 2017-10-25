import React from 'react'
import AppRoutes from './routes/Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import {Provider} from 'react-redux';

import ConfigureStore from '../app/store/AppStore';
import {fetchPersons} from '../app/actions/PersonAction'

const store = ConfigureStore();
store.dispatch(fetchPersons());
export const App = () => {
    return (<Provider store={store}>
        <div>
            <Router>
            <AppRoutes />
            </Router>
        </div></Provider>
    );
}

module.exports = App