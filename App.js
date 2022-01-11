import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Image, Button, TouchableHighlight, TextInput } from 'react-native';
import { useState } from 'react';
import HomeScreen from './app/screens/home';

export default function App() {
  const date =()=>{
    var tempDate = new Date(); 
    var realD = tempDate.getDate()+ '/' + (tempDate.getMonth() +1) + '/' + tempDate.getFullYear();
    return realD
  }
  
  const [text, setText] = useState('none');
  function changevalue(){
    console.log(text)
    alert(text)
    setText(val=>{
      return val + 'yes'
    });
  }
    return ( 
    <SafeAreaView style = { styles.container } >
      <ImageBackground style={styles.imgBg} source={require('./app/assets/wood.jpeg')}>
       <View style={styles.logo}>
        <Text style={styles.h1}>To Do App</Text>
        <Text>{date()}</Text>
       </View>
    <View style={[styles.dummy]}>
          <View style={styles.newdiv}>
            <Text style={{fontSize: 20}}>Add New Task</Text>
            <TextInput
            style={styles.input}
            placeholder='Write your task here.....'/>
            <View style={{height: 10}}/>
            <TouchableHighlight>
           <Button 
            title='Submit Task'
            />
         </TouchableHighlight>
         <View style={{height: 10}}/>
          </View>  
    </View>

       <View style={styles.footer}>
         <TouchableHighlight style={styles.touch}>
           <Button 
           onPress={changevalue}
            title='Add Task'
            />
         </TouchableHighlight>
       
       </View>
      </ImageBackground>
      <StatusBar style = "auto" />
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  input:{
    padding: 15,
    fontSize: 13,
    borderColor: 'grey',
    borderBottomWidth: 2
  },
  dummy:{
   flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  newdiv:{
    width: '70%',
    height:'auto',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 30
  },
  h1:{
    fontSize: 20,
    color: 'white'
  },
  logo:{
    width: '100%',
    height: 50,
    backgroundColor: '#918378',
   alignItems:'center'
  },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingTop: 20
    },
    imgBg:{
      flex:1,
      width: '100%'
    },
    footer:{
      flex: 1,
      position: "relative"
    },
    btn:{
      position: 'absolute',
      bottom: 0,
    },
    touch:{
      position: 'absolute',
      bottom: 10,
      width: '30%',
      alignSelf: 'center'
    }
});