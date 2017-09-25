import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class NewView extends Component{
  render(){
    return(
      <View>
        <Text style={styles.texto}>
          hola soy un NEW VIEW
        </Text>
      </View>

      )
  }
}

const styles = StyleSheet.create({
  texto:{
    color:'blue',
  }
})