import React, { Component } from 'react';
import CheckBox from 'react-native-check-box'
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    ImageBackground,
    Dimensions,
    TextInput,
    Image,
    TouchableOpacity,
    TouchableHighlight
} from "react-native"
class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
          isCheck:false,
          showEye:false
        }
      }
      CheckBox  = () => 
      {
        this.setState({isCheck:! this.state.isCheck});
      }
      changeEye  = () => 
      {
           this.setState({showEye:!this.state.showEye});
      }
      
      isShowEye  = () =>
       {
            if(!this.state.showEye)
            return (<Image style={{width:30, height:30}} source={require("../images/visibility.png")}></Image>);
            else return (<Image style={{width:30, height:30}} source={require("../images/eye.png")}></Image>);
       }
      showPass  = () => 
      {
        if(!this.state.showEye)
        return (<TextInput style={css.input} placeholder="Nhập PassWord" secureTextEntry={true}/>);
        else return (<TextInput style={css.input} placeholder="Nhập PassWord" secureTextEntry={false}/>);
      }
      
    render() {
        return (
            <ScrollView 
            style={{flex:1, backgroundColor:'#ffffff'}}
            showsVerticalScrollIndicator={false}>
                {/* Top View */}
                <ImageBackground 
                    style={{height:Dimensions.get('window').height/3.5, backgroundColor:'#e056fd'}}>
                    <View style={{flex:1, marginTop:25,alignItems:'center'}}>
                        <Image style={{width:100, height:100}} source={require('../images/logo.jpg')}></Image>
                    </View>
                </ImageBackground>
                {/* bottom View  */}
                <View style={css.bot}>
                    <View style={{padding:40}}>
                        <Text  style={{color:'#4632A1', fontSize:34, marginBottom:10}}>Welcome</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text> Don't have an account ?</Text>
                            <Text style={{color:"red", fontSize:17, fontStyle:'italic', marginLeft:50}}>Register now</Text>
                        </View>
                        <Text>
                            
                           
                        </Text>
                        {/* form input  */}
                        <View style={{marginTop:10}}>
                            <TextInput style={[css.input,{marginBottom:15}]} placeholder="Nhập UserName"/>
                            <View style={{position:'relative'}}>
                                 {this.showPass()}
                                 <TouchableOpacity onPress={()=>this.changeEye()} style={{position:'absolute', right:15, top:10}}>
                                  {this.isShowEye()}
                                 </TouchableOpacity>
                                
                            </View>
                           
                        </View>
                        {/* Lưu tài khoan */}
                        <CheckBox 
                            onClick={()=>this.CheckBox()}
                            isChecked={this.state.isCheck}
                            rightText={"Save account"}
                            rightTextStyle={{color:"#4632A1", fontSize:14}}
                            checkedCheckBoxColor={"#fd79a8"}
                            uncheckedCheckBoxColor={"#4632A1"}
                            style={{marginTop:10}}
                        ></CheckBox>
                         {/* NÚt bâm  */}
                         <TouchableOpacity style={{alignItems:'center', flex:1, marginTop:10}}>
                             <Text style={css.login}>Login</Text>
                         </TouchableOpacity>
                         <View style={{alignItems:'center', flex:1, marginTop:5}}>
                             <Text >Or Login with</Text>
                         </View>
                         <View style={{flexDirection:'row', flex:1, justifyContent:'center', marginTop:25}}>
                            <Image style={{width:40, height:40}} source={require("../images/google.png")}></Image>
                            <Image style={{width:40, height:40, marginLeft:40,marginRight:40}} source={require("../images/instagram.png")}></Image>
                            <Image style={{width:40, height:40}} source={require("../images/twitter.png")}></Image>
                         </View>
                        
                    </View>
                </View>
            </ScrollView>
        );
    }
}
var css= StyleSheet.create({
    chu:{
        color:"white",
        fontSize:40,
        fontStyle:'italic',
        fontWeight:'bold',
    },
    bot:{
        flex:1.5,
        backgroundColor:'white',
        bottom:40,
        borderTopEndRadius:40,
        borderTopStartRadius:40,
    },
    input:{
        borderColor:"#4632A1",
         borderWidth:2, 
         borderRadius:30,
         paddingLeft:20,
         fontSize:15,
         color:"orange",
    },
    login:{
        fontSize:25,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:40,
        paddingRight:40,
        backgroundColor:'#4632A1',
        color:'white',
        justifyContent:'center',
        borderRadius:30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})
export default Login;