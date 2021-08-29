import React, { Component } from 'react';
import firebaseConnect from './firebaseConnect'
import { getDatabase, ref, set , push, onValue, remove} from "firebase/database";
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
  Them  =  () =>
   {
    // const db = getDatabase();
    // set(ref(db, 'MyDB/' + "ID2"), {
    //   Ten: "Nguyễn Văn B",
    //   Tuoi: 99,
    // })
    // .then(() => {
    //   alert("Thêm thành công");
    // })
    // .catch((error) => {
    //   alert("Thêm thất bại");
    // });
    const db = getDatabase();
    push(ref(db, 'MyDB/'), {
      Ten: "Nguyễn Văn C",
      Tuoi: 99,
    })
    .then(() => {
      alert("Thêm thành công");
    })
    .catch((error) => {
      alert("Thêm thất bại");
    });
   }
   Xem  =  () =>
   {
    const db = getDatabase();
    const starCountRef = ref(db, 'MyDB/');
    onValue(starCountRef, (snapshot) => {
      var arrayData=[];
      snapshot.forEach(element=>{
        const key = element.key;
        const Ten = element.val().Ten;
        const Tuoi = element.val().Tuoi;
        arrayData.push({
          key:key,
          Ten:Ten,
          Tuoi:Tuoi
      })
      })
      console.log(arrayData);
    });
   }
   Xoa  =  () =>
   {
    const db = getDatabase();
    remove(ref(db, 'MyDB/'+ "ID2"))
    .then(() => {
      alert("Xoa thành công");
    })
    .catch((error) => {
      alert("Xoa thất bại");
    });
   }
  
  render() {
    return (
      <View style={css.container}>
          <Text style={css.chu}>Firebase Database</Text>
          <View style={{flexDirection:"row"}}>
            <TouchableOpacity onPress={()=>this.Them()}>
              <Text style={css.btn}>Thêm</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.Xem()}>
              <Text style={css.btn1}>Xem</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.Xoa()}>
              <Text style={css.btn2}>Xoa</Text>
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
    marginBottom:200
  }
})
export default App;