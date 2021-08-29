import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native"
class App extends Component {
  constructor(props) {
    super(props);
    myText=null;
    myStyle={
      style:{
        color:'yellow'
      }
    }
  }
  thayDoi  = () => 
  {
      myText.setNativeProps(myStyle);
  }
  render() {
    return (
      <View style={css.container}>
         <Text 
              ref={(text)=>myText=text}
              style={css.text}>Nguyễn Văn Thọ</Text>
         <TouchableOpacity onPress={()=>this.thayDoi()}>
           <Text style={css.btn}>Thay đổi CSS</Text>
         </TouchableOpacity>
      </View>
    );
  }
}
var css= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  btn:{
    padding:15,
    backgroundColor:"aqua",
    borderRadius:10,
    color:"orange",
    fontSize:20,
    fontWeight:'bold'
  },
  text:{
    fontSize:30,
    fontWeight:'bold',
    fontStyle:'italic',
    color:"green",
    marginBottom:50
  }
})
export default App;