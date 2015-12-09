import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import Routes from './routes';

var history = createBrowserHistory();

ReactDOM.render(<Router history={history}>{Routes}</Router>, document.getElementById('root'));

import './static/semantic-ui/semantic';