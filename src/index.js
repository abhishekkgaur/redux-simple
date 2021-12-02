import { createStore } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import App from './App'
import reactDom from 'react-dom'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

reactDom.render(
  <Provider store={ store }>
    <App />
  </Provider>, document.getElementById('root'));