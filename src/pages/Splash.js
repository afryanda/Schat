import React from 'react'
import { StyleSheet, Image, View } from 'react-native'

const Logo = require('../../assets/logo.png')

const Splash = () => {
    return (
        <View style={styles.container}>
            <Image source={Logo}/>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
