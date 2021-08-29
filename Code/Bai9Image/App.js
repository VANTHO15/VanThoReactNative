import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native"
class App extends Component {
  render() {
    return (
      <View style={css.container}>
          <Image   // ảnh nhỏ hơn thì dùng cover hoặc stretch, ảnh to hơn thì dùng contain
            // source={require('./Image/7.jpg')} 
            source={{uri:"https://scontent.fdad3-3.fna.fbcdn.net/v/t1.6435-9/p320x320/227942906_361775088662818_192349006548352947_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=825194&_nc_ohc=aJ2DtpGt3N0AX_f3osb&_nc_ht=scontent.fdad3-3.fna&oh=ac15059adb4ba85103cacf25fc822dec&oe=6144A190"}} 
            resizeMode='cover'
            style={{flex:1,height:null,width:null}} // width và heoght = null mới đc
          />
      </View>
    );
  }
}
var css= StyleSheet.create({
  container:{
    flex:1
  }
})

export default App;