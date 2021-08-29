import React, { Component } from 'react';
import{
  Text,
  View
} from "react-native"
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      ten:"Nguyễn Văn Thọ",
      tuoi:22,
      count:0
    }
  }
  ThayDoi = () =>
   {
     this.state.count = !this.state.count;
     console.log(this.state.count);
     if(this.state.count)
     {
      this.setState({
        ten:"Nguyễn văn A"}
      );
     }
     else{
      this.setState({
        ten:"Nguyễn văn B"}
      );
     }
     
   }
  render() {
    return (
      <View>
          <Text onPress={()=>this.ThayDoi()}>{this.state.ten}</Text>
          <Text> tuổi là {this.state.tuoi}</Text>
      </View>
    );
  }
}

export default App;