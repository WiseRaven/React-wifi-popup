import React, { Component } from 'react';
import './App.css';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { translate } from 'react-i18next';

import reducers from './reducers';

import Logo from './components/Logo';
import MainContentContainer from './containers/MainContent';


const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : compose
));

const _form = document.body.querySelector('#doPostAuth');
const phoneNumberElement = document.body.querySelector('#phone2call');
const AppOptions = {
    hostname: _form.querySelector('[name=hostname]').value,
    checkPoint: '/checkAuth.php',
    checkPoint: 'http://www.mocky.io/v2/5c50253c330000ae23c586fd', // fail
    // checkPoint: 'http://www.mocky.io/v2/5c50257c330000ae23c586ff', // success
    loginPoint: '/auth.php',
    loginPoint: 'http://www.mocky.io/v2/5c50253c330000ae23c586fd', // fail
    // loginPoint: 'http://www.mocky.io/v2/5c50257c330000ae23c586ff', // success
    formSelector: '#doPostAuth',
    mac: _form.querySelector('[name=username]').value,
    object: _form.querySelector('[name=object]').value,
    subobject: _form.querySelector('[name=subobject]').value,
    dst: _form.querySelector('[name=dst]').value,
    phone: phoneNumberElement ? phoneNumberElement.textContent : '+7 (926) 123-45-67'
}


class App extends Component {
  render() {
    return (
      <div className="App">
          <Logo />
          <Provider store={store}>
                <MainContentContainer {...this.props} AppOptions={AppOptions} />
          </Provider>
      </div>
    );
  }
}

export default translate('common')(App);
