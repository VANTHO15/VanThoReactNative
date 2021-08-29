import React, { Component } from 'react';
import CheckBox from 'react-native-check-box'
import {
  View,
  Text
} from "react-native"
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      isCheck:false
    }
  }
  Click  = () => 
  {
    this.setState({isCheck:! this.state.isCheck});
  }
  
  render() {
    return (
      <View style={{flex:1, justifyContent:"center", marginLeft:150}}>
            <CheckBox
              onClick={()=>this.Click()}
              isChecked={this.state.isCheck}
              rightText={"Chọn"}
              rightTextStyle={{color:"#ffa502", fontSize:17}}
              checkedCheckBoxColor={"#fd79a8"}
              uncheckedCheckBoxColor={"green"}
              // checkedImage={<Image source={require('../../page/my/img/ic_check_box.png')} style={this.props.theme.styles.tabBarSelectedIcon}/>}
              // unCheckedImage={<Image source={require('../../page/my/img/ic_check_box_outline_blank.png')} style={this.props.theme.styles.tabBarSelectedIcon}/>}
            ></CheckBox>
      </View>
    );
  }
}

export default App;