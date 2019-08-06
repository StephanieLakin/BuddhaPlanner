import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import DashBoard from './components/dashboard/Dashboard'
import projectDetails  from './components/projects/ProjectDetails'


class App extends Component {
  render() {
    return (<BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' component={DashBoard}/>
          <route path='/project/:id' component={projectDetails}/>
        </Switch>
      </div>
    </BrowserRouter>)
  }
}

export default App;
