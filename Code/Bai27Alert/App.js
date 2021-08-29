import { View, StyleSheet, Button, Alert } from "react-native";
import React, { Component } from 'react';
class App extends Component {
 showAlert = () =>
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {text: "Đồng Ý",onPress: () => Alert.alert("Cancel Pressed"),style: "cancel"},
      {text: "Hủy",onPress: () => Alert.alert("Cancel Pressed"),style: "cancel"},
    ]
  );
  render() {
    return (
      <View style={styles.container}>
        <Button title="Show alert" onPress={()=>this.showAlert()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default App;