import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView, Button } from 'react-native'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-paper';
import AssetExample from './components/AssetExample';

class Inputs extends Component {
   state = {
      firstName: '',
      lastName: ''
   }
   handleFirstName = (text) => {
      this.setState({ firstName: text })
   }
   handleLastName = (text) => {
      this.setState({ lastName: text })
   }
   login = (first, last) => {
      alert('First Name: ' + first + ' Last Name: ' + last)
   }
   render() {
      return (
        
         <KeyboardAvoidingView behavior="padding" style={styles.form}>
         <Card>
           <AssetExample/>
         </Card>  
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "First Name"
               placeholderTextColor = "#bfbdb9"
               autoCapitalize = "none"
               onChangeText = {this.handleFirstName}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Last Name"
               placeholderTextColor = "#bfbdb9"
               autoCapitalize = "none"
               onChangeText = {this.handleLastName}/>
            <Text style={styles.paragraph}>Full Name : {this.state.firstName} {this.state.lastName}</Text>
    
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.firstName, this.state.lastName)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
             
            </KeyboardAvoidingView>
      )
   }
}

export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 60
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#ff9f05',
      borderWidth: 1,
      textAlign: 'center'
   },
   submitButton: {
      backgroundColor: '#ff9f05',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white',
      textAlign: 'center'
   },
   paragraph: {
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold', 
  },
  form: {
    flex: 1,
    justifyContent: 'space-between',
  },
})