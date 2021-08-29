import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native"
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      name:"Tho",
      i:0,
    }
  }
  getName  = () => 
  {
    this.setState({i:this.state.i+1});
    if(this.state.i === 4) this.setState({i:0});

    myRequest= new Request('https://reactnative.dev/movies.json');
    fetch(myRequest)
    .then((respone)=>respone.json())
    .then((responeJson)=>{
      return responeJson.movies;
    })
    .then((mangMovie)=>{
        this.setState({
          name:mangMovie[this.state.i].title
        })
    }).done();  
  }
  render() {
    return (
      <View style={css.container}> 
            <Text style={css.ten}>{this.state.name}</Text>
            <TouchableOpacity style={css.btn} onPress={()=>this.getName()}>
              <Text style={css.text}>Get Name movie</Text>
            </TouchableOpacity>
      </View>
    );
  }
}
var css= StyleSheet.create({
  container:
  {
    flex:1,
    justifyContent:'center',
    alignItems:"center"
  },
  ten:{
    fontSize:25,
    color:"red",
    fontWeight:"bold"
  },
  btn:{
    marginTop:10
  },
  text:{
    backgroundColor:"green",
    borderRadius:15,
    padding:15,
    color:"white"
  }
})
export default App;