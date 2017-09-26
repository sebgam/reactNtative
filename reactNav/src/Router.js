import React from 'react';
import {StackNavigator, TabNavigator } from 'react-navigation';

import Home from './screens/Home';
import User from './screens/User';
import Detail from './screens/Detail';
import Menu from './screens/Menu';

export const HomeStack = StackNavigator({
    ManHinh_Home:{
        screen: Home,
        navigationOptions:{
            title: 'Development G',
          }
    },
    ManHinh_Detail:{
        screen: Detail,
        navigationOptions:{
            title: 'Details',
          }
    },
})

export const UserStack = StackNavigator({
    ManHinh_User:{
        screen: User,
        navigationOptions:{
            title: 'Navigation users'
        }
    }
})

export const Tabbar = TabNavigator({
    Home:{
        screen: HomeStack,
        navigationOptions:{
            tabBarLabel:'HOME'
        }
    },
    User:{
        screen: UserStack,
        navigationOptions:{
            tabBarLabel: 'USER'
        }
    }
},{
    tabBarPosition:'bottom',
    tabBarOptions:{
        style:{ backgroundColor:'#e74c3c' },
        inactiveTintColor:'#fff',
        activeTintColor:'#fff',
        swipeEnabled: true
    }
})