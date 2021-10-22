import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import './src/i18n';

import Home from './src/components/home/home';
import Inner from './src/components/inner/inner';

const App = () => {

  const Stack = createStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Inner' component={Inner} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )

}

export default App;