/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import StackApp from './src/routes/StackApp'
import Gradient from 'react-native-linear-gradient'
import Splash from './src/pages/Splash';

const App = () => {
  const [splash, setSplash] = useState(true);

  setInterval(()=>{
    setSplash(false)
  }, 3000);

  return (
    <NavigationContainer>
      <StatusBar barStyle="default" translucent backgroundColor='transparent'/>
      <Gradient colors={['#71B280','#134E5E']} start={{x:0,y:0}} end={{x:1,y:1}} style={styles.container}>
        {
          splash ? (<Splash/>) : (<StackApp/>)
        } 
      </Gradient>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
});

export default App;
