import React, { Component } from 'react';
import NetInfo from "@react-native-community/netinfo";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native"
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      ketnoi:"Chưa kết nối",
      mang:""
    }
  }
  subscribe = NetInfo.addEventListener(data => {
    if(data.isConnected === true) var x= "Đã kết nối";
    else x= "Chưa kết nối";
    this.setState({
      ketnoi: x,
      mang: data.type
    });
  });
  
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <View style={{marginTop:50, width:200}}>
            <Text style={css.text}>Mang: {this.state.mang}  </Text>
            <Text style={css.text}>Trạng thái : {this.state.ketnoi}</Text>
          </View>
      </View>
    );
  }
}
var css= StyleSheet.create({
  text:{
    color:"red",
    fontWeight:"bold",
    fontSize:20,
  }
})
export default App;
