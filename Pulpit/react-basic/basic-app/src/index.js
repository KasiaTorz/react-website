import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Grants from '/Grants';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App grants={grants} />, document.getElementById('root'));
registerServiceWorker();
