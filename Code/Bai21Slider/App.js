import React, { Component } from 'react';
import Slider from "react-native-sliders";
import {StyleSheet, View, Text } from "react-native";
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      giatri:0
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Slider
          value={this.state.value}
          onValueChange={(value) => this.setState({ giatri:value })}
          minimumValue={0}
          maximumValue={100}
          step={1}
          thumbTintColor={"#e84118"}
          minimumTrackTintColor={"#44bd32"}
        />
        <Text>
          Value: {this.state.giatri}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center"
  }
});
export default App;