import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Header from './Header.js';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/Weather' component={Weather} /> 
          <Route path='/Trails' component={Trails} /> 
          <Route path='/Events' component={Events} /> 
          <Route path='/Yelp' component={Yelp} /> 
          <Route path='/' component={Home} /> 
        </Switch>
        
      </div>
    )
  }
}

