import React, { Component } from 'react';
import{
  Text,
  View,
  StyleSheet
} from "react-native"
class App extends Component {
  _click  = () => 
  {
    console.log("Click");
  }
  _LauLau  = () => 
  {
    console.log("Lâu lâu");
  }
  
  render() {
    return (
      <View style={css.container}>
          <Text ellipsizeMode={"tail"} numberOfLines={1} style={css.text}> Go ahead and play around with the Button component using the example below. You can select which platform your app is previewed in by clicking on the toggle in the bottom right, then click on "Tap to Play" to preview the app.</Text>
          <Text onPress={()=>this._click()} style={css.text1}>Click Here !</Text>
          <Text onLongPress={()=>this._LauLau()} style={css.text1}>Click Lâu</Text>
          <Text selectable={true} style={css.text1}>Go ahead and play around with the Button</Text>
      </View>
    );
  }
}

var css= StyleSheet.create({
  container:{
    flex:1
  },
  text:{
    color:"#e67e22",
    fontSize:30,
    textAlign:'center',
    marginTop:100,
    marginLeft:10,
    width:150,
    height:150
  },
  text1:{
    color:"#2ecc71",
    fontSize:30,
    textAlign:'center',
  }
})

export default App;