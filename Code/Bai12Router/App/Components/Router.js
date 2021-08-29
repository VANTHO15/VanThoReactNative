import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from "./App"
import Home from "./Home"
const Stack = createNativeStackNavigator();

class Router extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="App">
                    <Stack.Screen name="App" component={App} options={{ title: 'Welcome App' }}/>
                    <Stack.Screen name="Home" component={Home} options={{ title: 'Welcome Home' }}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default Router;