'use strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  Alert,
  Image,
  View
} from 'react-native';


export default class Login extends Component {
  render() {
    return (
      <Image style={styles.container} source={{uri: 'https://i.pinimg.com/736x/db/c6/37/dbc637f3b660ab6bf935600a8358a720--marvel-wallpaper-iphone--wallpaper.jpg'}}>
        <View >
          <Image source={require('../../public/images/title.png')} style={styles.imagenTitle}/>
          <TouchableHighlight onPress={(this.onLogin.bind(this))} style={styles.boton}>
            <Text style={styles.textoLog}>
                Login
            </Text>
        </TouchableHighlight>
      </View>
    </Image>
    );
  }


onLogin(){
  Alert.alert(
      'Acceso',
      'Te logeaste en el sistema',
      [{
        text: 'Aceptar', onPress: (this.aceptar.bind(this))
      },
      {
        text: 'Cancelar', onPress: (this.cancelar.bind(this))
      }
      ]
    )
}

aceptar(){
 
}

cancelar(){
  console.log('cancelar')
}





}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  boton: {
    width: 300,
    height: 30,
    backgroundColor: '#e74c3c',
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center', 
    marginTop:60,
    marginBottom: 15,
  },
  textoLog: {
    color:'white',
  },
  title:{
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color:'black',
    marginTop:100,
  },
  imagenTitle:{
    left:50,
  }
 
});

