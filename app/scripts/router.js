import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory} from 'react-router';
import ClockHome from './home';



const router = (

    <Router history={hashHistory}>
    <Route path = "/" component = {ClockHome}/>
    <Route path= "/home" component={ClockHome}/>
    </Router>
)

export default router;
