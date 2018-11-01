import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  (<BrowserRouter>
    <Switch>
      <Route path='/' exact component={App}/>
      <Redirect to='/' />
    </Switch>
  </BrowserRouter>),
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register({
  onUpdate() { console.log('service worker update!!!') },
  onSuccess() { console.log('service worker register success!!!') }
});
