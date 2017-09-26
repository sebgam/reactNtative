import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,  
} from 'react-native';

export default class Home extends Component{
/*	static navigationOptions = {
		title: 'Desarrollo G',
	  };*/
	render(){
		return(
			<View style={{ flex:1,backgroundColor:'#fff', justifyContent: 'center', alignItems: 'center',}}>
				<Text>Home</Text>
				<TouchableOpacity style={{backgroundColor:'#2ecc71'}}
					onPress={()=>{ this.props.navigation.navigate('ManHinh_Detail', {textMessage:'Hello developers'}) }}
				>
					<Text style={{color:'#fff', fontSize:20, padding:10}}>Go to Detail</Text>
				</TouchableOpacity>
			</View>	
			);
	}
}



