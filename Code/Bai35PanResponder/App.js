import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  PanResponder
} from "react-native"
class App extends Component {
  constructor(props) {
    super(props);
    myView = null;
    _preLeft=10;  // khởi tạo giá trị ban đầu
    _preTop=10;
    _HinhTronStyle={
       style:{
         left:_preLeft,
         top:_preTop
       }
    }
  }
  UNSAFE_componentWillMount () {
    _panResponder = PanResponder.create({
      onStartShouldSetPanResponder:(event,gestureState)=>true,  // đăng kí hàm bấm vào
      onMoveShouldSetPanResponder:(event,gestureState)=>true,  // đăng kí hàm di chuyển, luôn có 2 hàm trên
      onPanResponderMove:(event,gestureState)=>{              // thực thi hàm di chuyển
        _HinhTronStyle.style.left = _preLeft + gestureState.dx; // cập nhật giá trị hiện tại đang di chuyển
        _HinhTronStyle.style.top = _preTop + gestureState.dy;   // vì cập nhật state nên cập nhật đến 
        this._upDateStyle();                                    // đâu thì hình di chuyển đến đó
      },
      onPanResponderRelease:(event,gestureState)=>{         // thực thi hàm nâng tay lên
        _preLeft += gestureState.dx;                       // cập nhật lại giá trị tọa độ ban đầu
        _preTop += gestureState.dy;
      }
    })
  }
  componentDidMount() {
    this._upDateStyle();
  }
  
  _upDateStyle(){  // cập nhật lại state
    myView && myView.setNativeProps(_HinhTronStyle)   // kiểm tra myview có null hay không
  }
  render() {
    return (
      <View style={css.container}>
          <View
            ref={(view)=>myView=view}
            style={css.tron} 
            {..._panResponder.panHandlers}
          >
          </View>
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