import React, { Component } from 'react';
import css from "./css"
import{
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight
} from "react-native"
class App extends Component {
    Nut1  = () => {alert("Nút 1");}
    Nut2  = () => {alert("Nút 2");}
    
    render() {
        return (
            <View style={css.container}>
                <TouchableOpacity 
                        onPress={()=>this.Nut1()}
                        style={css.nut}>
                        <Text style={css.text}> Opacity </Text>
                </TouchableOpacity>

                <TouchableHighlight 
                        onPress={()=>this.Nut2()}
                        underlayColor={"red"}
                        style={css.nut}>
                        <Text style={css.text}> HighLight </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default App;