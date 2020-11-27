import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../pages/Splash'
import HomeTab from './HomeTab'
import Chatting from '../pages/Chatting'
import Profile from '../pages/Profile'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='HomeTab' screenOptions={{
      cardStyle: {backgroundColor: 'transparent'}
    }}>
      <Stack.Screen name="Home" component={HomeTab} options={{
        headerShown: false
      }}/>
      <Stack.Screen name="Splash" component={Splash} options={{
        headerShown: false
      }}/>
      <Stack.Screen name="Chatting" component={Chatting} />
      <Stack.Screen name="Profile" component={Profile} options={{
        headerShown: false
      }}/>
    </Stack.Navigator>
  );
}

export default MyStack