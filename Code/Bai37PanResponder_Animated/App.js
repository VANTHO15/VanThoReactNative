import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  PanResponder,
  Animated
} from "react-native"
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      pan:new Animated.ValueXY()
    }
  }
  UNSAFE_componentWillMount () {
    _panResponder = PanResponder.create({
      onStartShouldSetPanResponder:(event,gestureState)=>true,  // đăng kí hàm bấm vào
      onMoveShouldSetPanResponder:(event,gestureState)=>true,  // đăng kí hàm di chuyển, luôn có 2 hàm trên
      onPanResponderRelease:(event,gestureState)=>{              // thả ra
         this.state.pan.flattenOffset();                       // lấy value cộng dồn với ofset
      },
      onPanResponderGrant:(event,gestureState)=>{              // Nhấn vào
         this.state.pan.setOffset({x:this.state.pan.x._value, y:this.state.pan.y._value});
      },
      onPanResponderMove:(event,gestureState)=>{              // thực thi hàm di chuyển
        this.state.pan.setValue({x:gestureState.dx, y:gestureState.dy})
      }
    })
  }
  render() {
    let {pan} = this.state;
    let [translateX, translateY] = [pan.x, pan.y];
    let myTransform = {transform:[{translateX},{translateY}]}
    return (
      <View style={css.container}>
          <Animated.View
            style={[css.tron,myTransform]} 
            {..._panResponder.panHandlers}
          >
          </Animated.View>
      </View>
    );
  }
}
var css= StyleSheet.create({
  container:{
    flex:1
  },
  tron:{
    width:80,
    height:80,
    borderRadius:40,
    backgroundColor:"green"
  }
})
export default App;