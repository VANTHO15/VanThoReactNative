import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from "react-native"
class App extends Component {
  render() {
    return (
      <View>
        <Text style={{backgroundColor:"#2e818a",color:"#e67e22"}}>Nguyễn Văn Thọ</Text>
        <Text style={css.mauText}>18CDT1</Text>
      </View>
    );
  }
}
const css = StyleSheet.create({
  mauText:{
    backgroundColor:"#d07d1b",
    fontSize:30,
    color:"#2ecc71"
  },
  mauMoi:{
    fontSize:40
  }
});

export default App;