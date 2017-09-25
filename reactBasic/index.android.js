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
  ListView,
  TouchableHighlight,
  Alert,
  
} from 'react-native';


import MovieListView from './view/movieListView'
import NewView from './view/newMovie'

export default class reactBasic extends Component {
  render() {
    return (
      <View style={styles.container}>
         <Text>hola</Text>
      </View>
    )
  }

  
}

const styles = StyleSheet.create({
  boton1:{
    width: 200,
    height: 30,
    backgroundColor:'#2ecc71',
    color:'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('reactBasic', () => reactBasic);
