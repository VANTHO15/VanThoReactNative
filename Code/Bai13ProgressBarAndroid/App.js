import React, { Component } from 'react';
import * as Progress from 'react-native-progress';
import {
  View
} from "react-native"
class App extends Component {
  render() {
    return (
      <View style={{flex:1, justifyContent:"center",alignItems:'center'}}>
           <Progress.Bar progress={0.5} width={300} />
      </View>
    );
  }
}

export default App;