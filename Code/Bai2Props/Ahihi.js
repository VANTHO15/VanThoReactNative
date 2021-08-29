import React, { Component } from 'react';
import {
    Text,
    View
  } from "react-native"
class Ahihi extends Component {
    render() {
        return (
        <View>
          <Text> Tên là  {this.props.ten}</Text>
        </View>
        );
    }
}
export default Ahihi;
