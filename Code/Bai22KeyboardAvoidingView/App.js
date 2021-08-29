import React, { Component } from 'react';
import { KeyboardAvoidingView, TextInput, StyleSheet } from 'react-native';
class App extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior={'position'} keyboardVerticalOffset={100}>
            <TextInput placeholder="Username" style={styles.textInput} />
            <TextInput placeholder="PassWord" style={styles.textInput1} />
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 10,
    marginTop:400
  },
  textInput1: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 10,
  }
});
export default App;