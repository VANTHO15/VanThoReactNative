import React, { Component } from 'react';
import { Animated, View } from "react-native";
class App extends Component {
  constructor(props) {
    super(props);
    animValueXY = new Animated.ValueXY();
    this.state={
      changeXY: animValueXY
    }
  }
  Click  = () => 
  { 
    Animated.timing(
      this.state.changeXY,
      {
        toValue:{
          x:150,
          y:200
        },
        duration:2000,
        useNativeDriver:false
      }).start();
  }
  
  render() {
    return (
      <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
        <Animated.Text style={this.state.changeXY.getLayout()} onPress={()=>this.Click()}>văn Thọ</Animated.Text>
      </View>
    );
  }
}

export default App;