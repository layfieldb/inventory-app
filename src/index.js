import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { browserHistory, Route, Router } from 'react-router'
import reducer from './reducers'
import App from './components/App'
import Home from './components/Home'
import ProductFormContainer from './containers/ProductFormContainer'

const persistedState = JSON.parse(localStorage.getItem('products')) || []

const store = createStore(
	reducer,
  persistedState
)

store.subscribe(() => {
  localStorage.setItem('products', JSON.stringify(store.getState()));
});

const routes = <Route component={App}>
	<Route path="/" component={Home} />
	<Route path="/product(/:productId)" component={ProductFormContainer} />
</Route>

ReactDOM.render(
  <Provider store={store}>
 	  <Router history={browserHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('root')
)
