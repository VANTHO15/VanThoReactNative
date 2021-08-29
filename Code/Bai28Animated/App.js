import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated
} from "react-native"
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      dichuyen: new Animated.Value(0)
    }
  }
  click  = () => 
  {
    Animated.timing(
      this.state.dichuyen,
      {
        toValue:200,
        duration:1000,
        useNativeDriver: false
      }
    ).start();
  }
  render() {
    return (
      <View style={css.container}>
        <Text style={css.btn} onPress={()=>this.click()}>Van Tho</Text>
        <Animated.View  style={{marginLeft:this.state.dichuyen}}>
        <Text style={css.btnDiChuyen} >Bị di chuyển</Text>
        </Animated.View>
      </View>
    );
  }
}
var css= StyleSheet.create({
  btn:{
    padding:15,
    borderRadius:10,
    backgroundColor:"aqua",
    color:"green",
    fontSize:15,
    marginBottom:30
  },
  btnDiChuyen:{
    padding:15,
    borderRadius:10,
    backgroundColor:"green",
    color:"white",
    fontSize:15,
  },
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})
export default App;