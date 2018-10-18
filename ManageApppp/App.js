import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { StyleSheet, Text, View } from 'react-native';
import reducers from './src/reducers/index.js';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm.js';
import Router from './src/Router';

export default class App extends React.Component {

  // componetWillMounth() {
  //   firebase.initializeApp({
  //     apiKey: "AIzaSyCSaegj-Z0rYkz-VbaiJnRpuh7b-dkAy4Y",
  //     authDomain: "managerapp-4e7a7.firebaseapp.com",
  //     databaseURL: "https://managerapp-4e7a7.firebaseio.com",
  //     projectId: "managerapp-4e7a7",
  //     storageBucket: "managerapp-4e7a7.appspot.com",
  //     messagingSenderId: "483542698120"
  //   })
      
  //  }
  render() {
    const store=createStore(reducers,{}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store} style={styles.container}>
        <Router/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1abc9c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
