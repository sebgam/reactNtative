import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

export default class User extends Component{
	constructor(props) {
    super(props);
    this.state = { text: '' };
	}
	
	render(){
		return(
			<View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
				<View style={styles.form}>
					<TextInput
						style={styles.input1}
						onChangeText={(text) => this.setState({text})}
						value={this.state.text}
						placeholder = 'nombre'
					/>
				</View>
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  input1:{
		width: 200,
		height:30,
		marginTop:15,
		padding: 15,
		

	}
});
