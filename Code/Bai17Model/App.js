import React, { Component } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      open:false
    }
  }
  NutBam  = () => {this.setState({open:!this.state.open});}
  render() {
    return (
        <View style={css.container}>
            <Modal animationType="slide" transparent={true} visible={this.state.open}>
                <View style={css.model}>
                  <View style={css.modelView}>
                    <Text style={css.text}>Đóng model chứ nhờ !</Text>
                    <TouchableOpacity style={css.giua} onPress={()=>this.NutBam()}>
                        <Text style={css.btn1}> Close</Text>
                    </TouchableOpacity>
                  </View>
                </View>
            </Modal>
            <TouchableOpacity onPress={()=>this.NutBam()}>
                <Text style={css.btn}> Show Model</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const css = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  btn:{
    padding:15,
    backgroundColor:"aqua",
    borderRadius:20
  },
  giua:{
    alignItems:"center",
    justifyContent:"center",
    marginTop:40
  },
  btn1:{
    padding:10,
    backgroundColor:"#81ecec",
    borderRadius:10,
    color:"#e17055"
  },
  model:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  modelView:{
    backgroundColor:"#fd79a8",
    padding:40,
    borderRadius:30,
  },
  text:{
    color:"white",
    fontSize:19,
    fontWeight:"bold"
  }

});

export default App;