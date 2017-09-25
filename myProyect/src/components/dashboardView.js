'use strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  Alert,
  View
} from 'react-native';


export default class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.title}>buenos dias Putos</Text>
    </View>
    );
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title:{
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color:'black',
    marginTop:30,
  },
  
 
});

