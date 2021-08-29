import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';
class App extends Component {
  render() {
    return (
      <PagerView style={css.pagerView} initialPage={0}>
      <View key="0">
        <Text>Trang 1</Text>
      </View>
      <View key="1">
        <Text>Trang 2</Text>
      </View>
      <View key="2">
        <Text>Trang 3</Text>
      </View>
    </PagerView>
    );
  }
}
const css = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});
export default App;