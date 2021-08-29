import React, { Component } from 'react';
import{
  View,
  Text,
  StyleSheet,
  DrawerLayoutAndroid,
  ImageBackground,
  TouchableOpacity
} from "react-native"
class App extends Component {
  RenderNavigate  = () => 
  {
    return (
      <View style={css.container}>
          <View style={css.chia3}>
              <ImageBackground style={css.img} 
              resizeMode={'stretch'} source={require("./images/backgroundmeterial.jpg")} >
                  <Text style={css.text}>Nguyễn Văn Thọ</Text>
              </ImageBackground>
          </View>
          <View style={css.chia7}>
            <View style={css.giua}>
                <TouchableOpacity onPress={()=>this.close()}>
                  <Text style={css.btn1}>Close</Text>
                </TouchableOpacity>
              </View>
          </View>
      </View>
    );
  }
  open  = () => {this.drawer.openDrawer()}
  close = () => {this.drawer.closeDrawer()}
  render() {
    return (
      <View style={css.container}>
          <DrawerLayoutAndroid  style={css.giua}
          ref={drawer=>this.drawer= drawer}
          renderNavigationView={()=>this.RenderNavigate()}
          drawerWidth={300}
          drawerBackgroundColor={"white"}>
            <View style={css.giua}>
              <TouchableOpacity onPress={()=>this.open()}>
                <Text style={css.btn}>Open</Text>
              </TouchableOpacity>
            </View>
          </DrawerLayoutAndroid>
      </View>
    );
  }
}
const css = StyleSheet.create({
  container: {
    flex: 1,
  },
  chia3:{
    flex:3,
   
  },
  chia7:{
    flex:7,
    backgroundColor:"#26de81"
  },
  img:{
    flex:1,
    width:400,
    position:'relative'
  },
  text:{
    position:"absolute",
    bottom:10,
    left:10,
    fontSize:20,
    fontWeight:"bold",
    color:"white"
  },
  giua:{
    flex:1,
    justifyContent:"center",
    alignItems:'center'
  },
  btn:{
    padding:20,
    backgroundColor:"aqua",
    borderRadius:10,
  },
  btn1:{
    padding:20,
    backgroundColor:"#fc5c65",
    borderRadius:10,
  }
});
export default App;