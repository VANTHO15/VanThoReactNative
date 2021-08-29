import React, { Component } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet
} from "react-native"
class App extends Component {
  bamvao  = () => {alert("Bấm Vào")}
  Thara  = () => {alert("Thả Ra")}
  
  render() {
    return (
      <View style={css.container}>
          <Pressable onPressIn={()=>this.bamvao()}>
            <Text style={css.text}>Falling</Text>
          </Pressable>
          <Pressable style={css.cach} onPressOut={()=>this.Thara()}>
            <Text style={css.text}>Rising</Text>
          </Pressable>
      </View>
    );
  }
}
var css= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  text:{
    backgroundColor:"aqua",
    borderRadius:15,
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:25,
    paddingRight:25,
    color:"#e17055",
    fontWeight:'bold',
    fontSize:17
  },
  cach:{
    marginTop:20
  }
})
export default App;