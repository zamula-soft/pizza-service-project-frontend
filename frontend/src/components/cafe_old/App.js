import React, { Component } from 'react';
import { Breadcrumb, Container, Button, ButtonGroup, Table } from 'reactstrap';
import './App.css';
import MyAppBar from './components/Appbar';
import IconBreadcrumbs from './components/Breadcrumbs';
import Cafe from './components/cafe/Cafe';

import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CafeList from './components/cafe/CafeList';
import CafeEdit from "./components/cafe/CafeEdit";
import CafeAdd from './components/cafe/CafeAdd';



class App extends Component {
  render() {
    return (

        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/cafe' exact={true} component={CafeList}/>
            <Route path='/cafe/add' component={CafeAdd}/>
            <Route path='/cafe/:id' component={CafeEdit}/>
          </Switch>
        </Router>
    )
  }
}

export default App;
