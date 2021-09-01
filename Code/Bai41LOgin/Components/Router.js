import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Login from './Login';
const Stack = createNativeStackNavigator();
class login extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={Login} options={{ title: 'Login' ,headerShown: false}}/>
                    <Stack.Screen name="Home" component={Home} options={{ title: 'Home' ,headerShown: true}}/>
                </Stack.Navigator>
            </NavigationContainer>
    );
    }
}

export default login;