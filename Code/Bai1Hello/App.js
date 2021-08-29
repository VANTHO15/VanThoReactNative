import React, { Component } from 'react';
import {
   Text,
    View 
} from 'react-native';
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      ten:"Nguyễn Văn Thọ"
    }
  }
  
  render() {
    return (
      <View  style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text style={{color: "#d07d1b"}}>{this.state.ten} {console.log("nguyễn Văn Thọ")}</Text>
      </View>
    );
  }
}

export default App;
