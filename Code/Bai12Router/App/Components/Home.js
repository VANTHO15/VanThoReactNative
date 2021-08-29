import React, { Component } from 'react';
import {
    View,
    Text,
} from "react-native"
class Home extends Component {
    GoToApp  = () =>
     {
         console.log("GoToApp");
         this.props.navigation.navigate('App')
     }
    
    render() {
        return (
            <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
                <Text onPress={()=>this.GoToApp() } style={{width:100, height:70, fontSize:17}}>GoToApp</Text>
                <Text style={{width:100, height:70, fontSize:17}}>Nhận đc là : {this.props.route.params.name}</Text>
            </View>
        );
    }
}

export default Home;