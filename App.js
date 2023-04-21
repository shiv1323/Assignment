import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stacknavigation from './Navigation/Stacknavigation';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  return (
    <>
    <StatusBar style='default' backgroundColor='white'/>
    <NavigationContainer>
      <Stacknavigation/>
    </NavigationContainer>
    </> 
    
  );
}
