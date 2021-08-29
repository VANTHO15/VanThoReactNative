import React, { Component } from 'react';
import{
  View,
  Switch,
  StyleSheet
} from "react-native"
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      value:false
    }
  }
  
  render() {
    return (
      <View style={css.container}>
          <Switch 
            value={this.state.value}
            onValueChange={()=>this.setState({value:!this.state.value})}
          />
      </View>
    );
  }
}
var css= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})
export default App;