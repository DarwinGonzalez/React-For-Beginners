import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Router from './components/Router';
import './css/style.css';  //Import CSS

render(<Router />, document.querySelector('#main'));
