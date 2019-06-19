import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import DashBoard from './components/dashboard/Dashboard'


class App extends Component {
  render() {
  return (<BrowserRouter>
    
        <BrowserRouter/>
        <div>
        <Navbar>
          <Switch>
              <Route path="/" component={DashBoard}></Route>
          </Switch>
        </Navbar>
        </div>
    
    </BrowserRouter>)
  }
}


export default App;
