import React, { Component } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import firebaseConnect from './firebaseConnect'
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
      user:"",
      pass:""
    }
  }
  getUer  = (data) => 
  { 
    this.setState({
      user:data
    })
  }
  getPass  = (data) => 
  {
    this.setState({
      pass:data
    })
  }
  DangKy  =  () =>
   {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.state.user, this.state.pass)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Đăng Ký Thành Công ");
      })
      .catch((error) => {
        alert("Đăng Ký Thất Bại");
      });
   }
   DangNhap  =  () =>
   {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.state.user, this.state.pass)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Đăng Nhập Thành Công ");
      })
      .catch((error) => {
        alert("Đăng Nhập Thất Bại");
      });
   }
   DangXuat  =  () =>
   {
    const auth = getAuth();
    signOut(auth).then(() => {
      alert("Đăng Xuất Thành Công ");
    }).catch((error) => {
      alert("Đăng Xuất Thất Bại");
    });
   }
  
  render() {
    return (
      <View style={css.container}>
          <Text style={css.chu}>Firebase Auth</Text>
          <View style={css.input}>
            <TextInput onChangeText={(event)=>this.getUer(event)} underlineColorAndroid={'transparent'} placeholder={"Nhập User "} style={css.textinput}/>
            <TextInput onChangeText={(event)=>this.getPass(event)} underlineColorAndroid={'transparent'}  placeholder={"Nhập Pass "}  style={css.textinput}/>
          </View>
          <View style={{flexDirection:"row"}}>
            <TouchableOpacity onPress={()=>this.DangKy()}>
              <Text style={css.btn}>Đăng Ký</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.DangNhap()}>
              <Text style={css.btn1}>Đăng Nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.DangXuat()}>
              <Text style={css.btn2}>Đăng Xuất</Text>
            </TouchableOpacity>
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
    fontSize:18,
    fontWeight:"bold",
    marginRight:20
  },
  btn1:{
    padding:15,
    backgroundColor:"#e74c3c",
    borderRadius:10,
    color:"white",
    fontSize:15,
    fontWeight:"bold",
    marginRight:20
  },
  btn2:{
    padding:15,
    backgroundColor:"orange",
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