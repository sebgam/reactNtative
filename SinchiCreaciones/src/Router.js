import React from 'react';
import {StackNavigator } from 'react-navigation';

import Load from './screens/Load';
import Home from './screens/Home';


export const HomeStack = StackNavigator({
    screen_Load: {
        screen: Load,
        navigationOptions: {
            header: null,
        }
    },
    screen_Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        }
    }
})


