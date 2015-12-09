import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import { createHistory } from 'history';
import Routes from './routes';

var history = createHistory();

ReactDOM.render(<Router history={history}>{Routes}</Router>, document.getElementById('root'));