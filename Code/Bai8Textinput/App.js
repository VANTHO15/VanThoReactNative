import React, { Component } from 'react';
import{
  Text,
  View,
  StyleSheet,
  TextInput
} from "react-native"
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      ten:"",
      tuoi:"",
      hienthi:"không có gì"
    }
  }
  
  TextTenChange  = (event) => {  
    this.setState({
      ten:event
    });
  }
  TextTuoiChange  = (event) => {  
    this.setState({
      tuoi:event
    });
  }
  getData  = () =>
  {
    this.setState({
      hienthi:this.state.ten + " "+ this.state.tuoi
    });
  }
  
  render() {
    return (
      <View style={css.container}>
        <TextInput onChangeText={(event)=>this.TextTenChange(event)} 
                    placeholderTextColor={"red"}
                   placeholder={"Nhập vào họ tên"} ></TextInput>
        <TextInput onChangeText={(event)=>this.TextTuoiChange(event)}
                     placeholderTextColor={"red"}
                   placeholder={"Nhập Tuổi của bạn"} ></TextInput>
        <Text style={css.text} >{this.state.hienthi}</Text>
        <View style={css.giua}>
           <Text onPress={()=>this.getData()} style={css.button}>Đồng ý</Text>
        </View>
      </View>
    );
  }
}
var css=StyleSheet.create({
  container:{
    flex:1
  },
  button:{
    padding:16,
    backgroundColor:"aqua",
    borderRadius:10
  },
  giua:{
    flexDirection:'row',
    justifyContent:'center'
  },
  text:{
    textAlign:"center",
    fontSize:25,
    color:"blue",
    marginBottom:50
  }
})

export default App;