
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ComponenteTexto extends Component{
  render(){
    return(
      <View>
        <Text style={styles.texto}>
          hola soy un componente externo
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