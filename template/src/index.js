import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reducers from './store/index'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

import './index.css'
import App from './App'
import Demo from './components/Demo'
import * as serviceWorker from './serviceWorker'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f // 浏览器redux开发者工具支持
))

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={App}/>
        <Route path='/demo' exact component={Demo}/>
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
