/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
*/

import React from 'react';  
import ReactDOM from 'react-dom';  
import App from './App';  
import { Provider } from 'react-redux';  
import { createStore, applyMiddleware } from 'redux';  
import thunk from "redux-thunk";  
import * as serviceWorker from './serviceWorker';  
import reducer  from './reducers/articleReducer';

  
const store = createStore(reducer, applyMiddleware(thunk));  
  
ReactDOM.render(  
    <Provider store={store}>  
        <App />  
    </Provider>, document.getElementById('root'));  
  
serviceWorker.unregister(); 