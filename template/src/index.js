import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import './index.css'
import Index from './modules/main/index.jsx'
import Demo from './modules/demo/index'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Index}/>
        <Route path='/demo' component={Demo}/>
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register({
  onUpdate() { console.log('service worker update!!!') },
  onSuccess() { console.log('service worker register success!!!') }
});
