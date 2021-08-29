import React, { Component } from 'react';
import css from "./css"
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native"
class App extends Component {
    NutBam  = () => {alert("Gái xinh không ?");}
    render() {
        return (
            <View style={css.container}>
                <Image
                style={css.image}
                    source={require("../Src/Images/4.jpg")}
                />
                <TouchableOpacity onPress={()=>this.NutBam()} style={css.nutbam}>
                    <Text  style={css.text}>Nút Bấm 1</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default App;