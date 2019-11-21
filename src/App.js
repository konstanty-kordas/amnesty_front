import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Stats from './stats/stats';
import CheckForm from './forms/check_form';
import Dashboard from './dashboard/dashboard';
import './App.css';

const App = () => {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Dashboard} />
        <Route path="/stats" exact component={Stats} />
        <Route path="/forms" exact component={CheckForm} />
    </BrowserRouter>
    );
}

export default App;