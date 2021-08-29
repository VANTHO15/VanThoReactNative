import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from "react-native"
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      ten:"",
      tuoi:"",
      layten:"",
      laytuoi:""
    }
  }
  
  getTen  = (data) => 
  {
    this.setState({
      ten:data
    })
    console.log(data);
    
  }
  getTuoi  = (data) => 
  {
    this.setState({
      tuoi:data
    })
    console.log(data);
  }
  saveData  = async  () =>
   {
    try {
      await AsyncStorage.setItem('ten', this.state.ten);
      await AsyncStorage.setItem('tuoi', this.state.tuoi);
      alert("Write Data Success");
    } catch (e) {
      // saving error
    }
   }
   ReadData  = async  () =>
   {
    try {
      const value1 = await AsyncStorage.getItem('ten')
      const value2 = await AsyncStorage.getItem('tuoi')
      if((value1 !== null)  && (value2 !== null)) {
        this.setState({
          layten:value1,
          laytuoi:value2
        });
      }
    } catch(e) {
      // error reading value
    }
   }
  
  render() {
    return (
      <View style={css.container}>
          <Text style={css.chu}>Async Storage</Text>
          <View style={css.input}>
            <TextInput onChangeText={(event)=>this.getTen(event)} underlineColorAndroid={'transparent'} placeholder={"Nhập tên "} style={css.textinput}/>
            <TextInput onChangeText={(event)=>this.getTuoi(event)} underlineColorAndroid={'transparent'}  placeholder={"Nhập tuổi "}  keyboardType="numeric" style={css.textinput}/>
          </View>
          <View style={{flexDirection:"row"}}>
            <TouchableOpacity onPress={()=>this.saveData()}>
              <Text style={css.btn}>Save Data</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.ReadData()}>
              <Text style={css.btn1}>Read Data</Text>
            </TouchableOpacity>
          </View>
          <View style={css.hien}>
            <Text style={css.text}>Tên: {this.state.layten} </Text>
            <Text style={css.text}>Tuổi: {this.state.laytuoi} </Text>
          </View>
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
    color:"#ef5777",
    fontSize:15,
    fontWeight:"bold",
    marginRight:20
  },
  btn1:{
    padding:15,
    backgroundColor:"#e74c3c",
    borderRadius:10,
    color:"white",
    fontSize:15,
    fontWeight:"bold"
  },
  input:{
    marginBottom:50
  },
  hien:{
    marginTop:50,
    width:250,
  },
  text:{
    fontWeight:'bold',
    fontSize:20,
    color:"orange",
    margin:5
  },
  textinput:{
    height:50,
    width:300,
    borderWidth:1,
    margin:10,
    borderRadius:10,
    borderColor:"orange",
    color:"orange",
    fontSize:15,
    fontStyle:"italic",
    paddingLeft:20
  },
  chu:{
    color:"orange",
    fontSize:40,
    fontWeight: 'bold',
    fontStyle:'italic',
    marginBottom:40
  }
})
export default App;