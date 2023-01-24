import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { createStore, combineReducers } from 'redux';
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
} from 'react-redux-firebase';
import { composeWithDevTools } from 'redux-devtools-extension';

const firebaseConfig = {
  apiKey: "AIzaSyAnYFKlqfirFYGO64PmLK75j1m9nzk0PEg",
  authDomain: "bootcamp-part-4.firebaseapp.com",
  databaseURL: "https://bootcamp-part-4-default-rtdb.firebaseio.com",
  projectId: "bootcamp-part-4",
  storageBucket: "bootcamp-part-4.appspot.com",
  messagingSenderId: "736376308299",
  appId: "1:736376308299:web:a7ea11076c20d7e270c3ce",
  measurementId: "G-CC69SY0T3N"
};

firebase.initializeApp(firebaseConfig);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
});
// Create store with reducers and initial state
const store = createStore(rootReducer, composeWithDevTools());
// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
};
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
};
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'),
);

// const firebaseConfig = {
//   apiKey: 'AIzaSyDeyDFLAl3o98caJwEHTJ0XvimL_Sp9oNA',
//   authDomain: 'bootcamp-part-3.firebaseapp.com',
//   databaseURL: 'https://bootcamp-part-3.firebaseio.com',
//   projectId: 'bootcamp-part-3',
//   storageBucket: 'bootcamp-ce748.appspot.com',
//   messagingSenderId: '461037721691',
// };