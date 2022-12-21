import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDeyDFLAl3o98caJwEHTJ0XvimL_Sp9oNA',
  authDomain: 'bootcamp-part-3.firebaseapp.com',
  databaseURL: 'https://bootcamp-part-3.firebaseio.com',
  projectId: 'bootcamp-part-3',
  storageBucket: 'bootcamp-ce748.appspot.com',
  messagingSenderId: '461037721691',
};

firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
