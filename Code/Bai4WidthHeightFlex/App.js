import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from "react-native"
class App extends Component {
  render() {
    return (
      <View style={css.ViewTong}>
        <View style={css.maudo} />
        <View style={css.mauxanh} />
      </View>
    );
  }
}
var css = StyleSheet.create({
  mauxanh:{
   flex:3,
    backgroundColor:"blue"
  },
  maudo:{
    flex:1,
    backgroundColor:"red"
  },
  ViewTong:{
    flex:1
  }
  // mauxanh:{
  //   width:50,
  //   height:50,
  //   backgroundColor:"blue"
  // },
  // maudo:{
  //   width:100,
  //   height:100,
  //   backgroundColor:"red"
  // }
 
})

export default App;