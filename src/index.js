import "babel-polyfill";
import './stylesheets/main.scss';
import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader'
import * as serviceWorker from './serviceWorker';
import App from './App';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app'),
  )
}

render(App)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
  	const NextApp = require('./App').default;
    render(NextApp)
  })
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
