import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Chat, Call, Post } from '../pages/HomeTab'
import { Header, TabBar } from '../components'
import Camera from '../pages/Camera'

const Tab = createMaterialTopTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />} initialRouteName='Chat'>
      <Tab.Screen
        name="Camera"
        component={Camera}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
      />
      <Tab.Screen
        name="Call"
        component={Call}
      />
      <Tab.Screen
        name="Post"
        component={Post}
      />
    </Tab.Navigator>
  );
}

const Home = () =>{
  return(
    <>
      <Header/>
      <HomeTab/>
    </>
  )
}

export default Home
