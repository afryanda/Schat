import React from 'react'
import { StyleSheet, Image, View, ScrollView } from 'react-native'
import Dash from 'react-native-dash'

const contoh = require('../../assets/jessica.png')

const MiniStatus = () => {
    return (
        <ScrollView horizontal contentContainerStyle={styles.container} showsHorizontalScrollIndicator={false}>
            <Foto/>
            <Foto/>
            <Foto/>
            <Foto/>
            <Foto/>
            <Foto/>
        </ScrollView>
    )
}

const Foto = props =>{
    return (
        <View style={styles.dot}>
            <Image source={contoh} style={styles.foto}/>
        </View>
    )
}

export default MiniStatus

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        backgroundColor: 'white',
        alignItems: 'center',
        minHeight: 110
    },
    foto: {
        height: 70,
        width: 70,
    },
    dot: {
        height: 70,
        width: 70,
        borderRadius: 35,
        borderWidth:4,
        borderRadius:35,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 16,
        marginBottom: 10,
        borderColor: 'green',
        borderStyle: 'dotted'
    }
})
