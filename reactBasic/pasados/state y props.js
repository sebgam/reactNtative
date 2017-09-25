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

//Components
import ComponenteTexto from './view/componenteTexto'


export class Loading extends Component{
  render(){
    return(
        <Text>Loading.....</Text>
      )
  }
}

export class ChildComponent extends Component{
  render() {
if(!this.props.result){// si resultes verdadero
 var res =  <Loading />
}else{
  var res = this.props.result.map((item,i)=>{ //almacena el arrai en la variable res
    return (
        <Text kei={i}>{item.title}</Text>
      )
  })
}
    return (
      <View>
        {res}
        <View style={this.props.status ? styles.on : styles.off}></View> 
      </View>
    );
  }
}


export default class reactBasic extends Component {
  constructor(){
    super()

    this.state = {

      status:false,
      data:null

      }// inicializa estate en false
  }

  componentIdMount(){
    fetch('http://facebook.github.io/react-native/movies.json')
    .then((response)=> response.json())
    .then((responseJson)=> {
      this.setState({
        data: responseJson.movies
      })
    })
  }

  clicked(){
    this.setState({
      status: !this.state.status//modifica el state cada que se hace click
    })  
  }

  render() {
    return (
      <View style={styles.container}>
      <ChildComponent status={this.state.status} result={this.state.data} />
       <Button
          onPress={this.clicked.bind(this)} 
          title = 'Click here'
          color = 'red'
       /> 
      
        <ComponenteTexto/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  on:{
    width:100,
    height: 100,
    backgroundColor:'yellow',
    marginBottom:15,
    marginTop: 15,
  },
  off:{
    width:100,
    height: 100,
    backgroundColor:'red',
    marginBottom:15,
    marginTop: 15,
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
