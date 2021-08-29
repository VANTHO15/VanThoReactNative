import React, { Component } from 'react';
import{
  Text,
  View,
  StyleSheet
} from "react-native"
class App extends Component {
  render() {
    return (
      <View style={css.bo}>
          <View style={css.con}></View>
      </View>
    );
  }
}
var css = StyleSheet.create({
  bo:{
    flex:1,
    backgroundColor:"red",
    position:'relative'
  },
  con:{
    width:50,
    height:50,
    backgroundColor:"yellow",
    position:'absolute',
    top:50,
    left:100
  }
})

export default App;