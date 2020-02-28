import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import  rootReducer  from './reducers/index';
import { BrowserRouter as Router } from 'react-router-dom'


const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
    <Provider store={ store }>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
  );

serviceWorker.unregister();