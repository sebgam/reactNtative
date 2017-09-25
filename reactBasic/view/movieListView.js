import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class MovieListView extends Component{
  render(){
    return(
      <View>
        <Text style={styles.texto}>
          hola soy un MOVIE lIST VIEW
        </Text>
      </View>

      )
  }
}

const styles = StyleSheet.create({
  texto:{
    color:'red',
  }
})