
import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
class App extends Component {
  click  = (item) => 
  {
    alert(item.key);
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Thọ '},
            {key: 'Thanh '},
            {key: 'Tài'},
            {key: 'Bình'},
            {key: 'Đức'},
            {key: 'Dũng '},
            {key: 'Huỳnh'},
          ]}
          renderItem={({item}) => <Text onPress={()=>this.click(item)} style={styles.item}> {item.key}</Text>}
        />
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default App;