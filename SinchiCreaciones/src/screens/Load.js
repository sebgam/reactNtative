import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
} from 'react-native';

import  MainService from '../services/mainService';

export default class Load extends Component{
    state ={
        loaded : false
    }
    constructor(){
        super();
        MainService.load(v => this.setState({loaded:true}));
    }
    render(){
        return(
            <Image style={styles.container} source={require('../../public/images/bicycle_1.jpg')}>
                <View >
                   <Text style={styles.title}>INSTANT</Text>
                   <Text style={styles.slogan}>Make same day delivery accessible to all</Text>

                    <Image source={require('../../public/images/loader128.gif')}  style={{width: 100, height: 100,resizeMode:'cover' }}/>

                    {this.state.loaded ?  this.props.navigation.navigate('screen_Home')  : <Text style={styles.text2}>loading...</Text>}
                </View>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
    },
    title:{
        fontSize:30,
        letterSpacing:50,
        color:'#fff',
        textAlign:'center',
    },
    slogan:{
        color:'#fff',
        textAlign:'center',

    },
    text2:{
        textAlign:'center',
        color:'#fff'
    }

});
