import React, { Component } from 'react';
import {
    View,
    Text,
} from "react-native"
class App extends Component {
    constructor(props) {
        super(props);
    }
    
    GoToHome  = () =>
     {
         console.log("GoToHome");
         this.props.navigation.navigate('Home', { name: 'Thọ' })
     }
    
    render() {
        return (
            <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
                <Text onPress={()=>this.GoToHome()} style={{width:100, height:70, fontSize:17}} >GoToHome</Text>
            </View>
        );
    }
}

export default App;