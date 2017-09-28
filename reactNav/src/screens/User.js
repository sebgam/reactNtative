import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';

export default class User extends Component{
	constructor() {
    super();
    this.state = { 
		nombre: '' ,
		apellido: '' ,
		edad: '' ,
	};
	}
	
	render(){
		return(
			<View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
				<View style={styles.form}>
					<Image source={require('../../public/images/user.png')}  style={styles.imageUser} />
					<TextInput
						style={styles.input1}
						onChangeText={(nombre) => this.setState({nombre})}
						value={this.state.nombre}
						placeholder = 'Nombre'
					/>
					<TextInput
						style={styles.input1}
						onChangeText={(apellido) => this.setState({apellido})}
						value={this.state.apellido}
						placeholder = 'Apellido'
					/>
					<TextInput
						style={styles.input1}
						onChangeText={(edad) => this.setState({edad})}
						value={this.state.edad}
						placeholder = 'Edad'
					/>
					<TouchableOpacity 
						onPress={this.enviar.bind(this)}
						style={styles.enviar}
					>
						<Text style={{ color:'#fff', textAlign:'center'}}>Enviar</Text>
					</TouchableOpacity>
				</View>
			</View>	
			)
	}

	enviar(){
		Alert.alert(
			'Hola',
			'Enviaste el formulario',
			[
			  {text: 'continuar', onPress: () => console.log('Ask me later pressed')},
			  {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
			  
			]
			
		)
	}
}

const styles = StyleSheet.create({
	form:{
		alignItems:'center',
	},
  input1:{
		width: 300,
		height:50,
		marginTop:15,
		padding: 15,
		color: 'black',
	},
	enviar:{
		backgroundColor:"#007ACC",
		padding: 15,
		width:300,
		marginTop:15,
		borderRadius:10,
	},
    imageUser:{
  		width:100,
  		height:100,
		marginBottom:15,
	}
});
