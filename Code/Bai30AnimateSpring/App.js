import React, { Component } from 'react';
import {
  Animated,
  Image,
  TouchableOpacity,
  View,
  Text
} from "react-native"
class App extends Component {
  constructor(props) {
    super(props);
    animValue= new Animated.Value(0.9);
  }
  click  = () =>
   {
     Animated.spring(
       animValue,
       {
         toValue:0.3,
         speed:1,
         bounciness:50,
         useNativeDriver:false
       }
     ).start();
   }
  
  render() {
    return (
      <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
          <Animated.Image style={{width:280, height:419,flex:5,  transform:[{scale:animValue}]}} source={{uri:"https://i.imgur.com/8LCxvmf.jpg"}}></Animated.Image>
          <TouchableOpacity style={{justifyContent:"center",alignItems:"center", margin: 20,flex:1}}>
            <Text style={{padding:15, backgroundColor:"aqua", borderRadius:10}} onPress={()=>this.click()}>Bấm Vào</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

export default App;