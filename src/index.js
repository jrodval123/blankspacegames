import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AOS from 'aos';
AOS.init();
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
