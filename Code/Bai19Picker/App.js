import React, { Component } from 'react';
import {Picker} from '@react-native-picker/picker';
import{
  View,
  StyleSheet
} from "react-native"
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      value:"java"
    }
  }
  
  render() {
    return (
      <View style={css.container}>
        <View style={css.giua}>
          <Picker 
              selectedValue={this.state.value}
              onValueChange={(itemValue, itemIndex) => this.setState({value:itemValue})}>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="Python" value="python" />
            </Picker>
        </View>
      </View>
     
    );
  }
}
var css= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:"center"
  },
  giua:{
    backgroundColor:"#9c88ff",
    width:200,
    borderRadius:20,
  }
})
export default App;