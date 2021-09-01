import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

import {Cloudinary} from "@cloudinary/base";
import {fill} from "@cloudinary/base/actions/resize";
const cld = new Cloudinary({
  cloud: {
      cloudName: 'vantho15'
  },
  url: {
      secure: true // force https, set to false to force http
  }
});
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      resourcePath: {},
      link:null
    };
   
  }

  selectFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        { 
          name: 'customOptionKey', 
          title: 'Choose file from Custom Option' 
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, res => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res.assets[0].uri;
        this.setState({
          link: source,
        });
        const myImage = cld.image('myfolder/9');
        console.log(myImage.toURL());
        
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Image
            source={{ uri: this.state.link }}
            style={{ width: 200, height: 300, marginBottom:40 }}
          />
          <TouchableOpacity onPress={this.selectFile} style={styles.button}  >
              <Text style={styles.buttonText}>Select Image</Text>
          </TouchableOpacity>       
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom:12    ,

  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff'
  }
});

export default App;