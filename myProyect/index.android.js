/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';


//components

import Login from './src/components/loginView';
import Dashboard from './src/components/dashboardView';



export default class myProyect extends Component {
  render() {
    return (

       <Login />
        
    );
  }
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('myProyect', () => myProyect);
