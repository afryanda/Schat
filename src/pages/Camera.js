import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-ionicons'

const Camera = () => {
    return (
        <View style={styles.container}>
            <Icon name="camera" size={100} color='gray'/>
        </View>
    )
}

export default Camera

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})
