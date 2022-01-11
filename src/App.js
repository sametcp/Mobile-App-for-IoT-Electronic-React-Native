import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import axios from 'axios';
import Login from "./components/login"
import Dashboard from "./components/dashboard.js"

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function App() {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
      width:'100%',
      height:'100%'
  },
  container2: {
    backgroundColor: "red",
    width:'100%',
    height:'100%'
  }
})

export default App