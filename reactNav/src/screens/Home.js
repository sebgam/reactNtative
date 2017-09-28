import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	Image,
} from 'react-native';

export default class Home extends Component{
/*	static navigationOptions = {
		title: 'Desarrollo G',
	  };*/
	render(){
		return(
			<View style={{ flex:1,backgroundColor:'#fff', justifyContent: 'center', alignItems: 'center',}}>
				<Image source={require('../../public/images/home.png')}  style={styles.imageUser} />

				<TouchableOpacity style={{backgroundColor:'#2ecc71'}}
					onPress={()=>{ this.props.navigation.navigate('ManHinh_Detail', {textMessage:'Hello developers'}) }}
				>
					<Image source={require('../../public/images/button.jpg')}  style={styles.imagebotton} />
				</TouchableOpacity>
			</View>
			);
	}
}

const styles = StyleSheet.create({

    imageUser:{
        width:350,
        height:200,
        bottom:100,
    },
	title:{
    	fontSize:20,
		bottom:50,
	},
	imageButton:{
    	width:200,
		height:50,
	}
});



