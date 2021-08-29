import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from "react-native"

class App extends Component {
  render() {
    return (
      <View style={css.container} >
        <View style={css.row}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
      </View>
    );
  }
}
var css= StyleSheet.create({
  containar:{
      flex:1
  },
  row:{
      flex:1,
      flexDirection:"row",
      justifyContent:'center'
  }

})

export default App;