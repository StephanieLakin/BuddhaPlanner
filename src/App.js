import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import DashBoard from './components/dashboard/Dashboard'
import ProjectDetails  from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'


class App extends Component {
  render() {
    return (<BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={DashBoard} />
          <Route path='/project/:id' component={ProjectDetails} />
         <Route path='/signin' component={SignIn} />
        </Switch>
      </div>
    </BrowserRouter>)
  }
}

export default App;
