import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-ionicons'

const contoh = require('../../assets/jessica.png')

const ChatModule = props => {
    const {name,status} = props
    const icon = status == 'video'
            ? 'videocam'
            : 'call'
    return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row', alignItems:'center'}}>
                    <Image source={contoh} style={styles.img}/>
                    <Text style={styles.nama}>{name}</Text>
                </View>
                <TouchableOpacity style={styles.lingkaran}>
                    <Icon name={icon} color='#71B280' size={25}/>
                </TouchableOpacity>
            </View>
    )
}

export default ChatModule

const styles = StyleSheet.create({
    container: {
        width: 374,
        height: 75,
        borderRadius: 19,
        marginVertical: 12,
        alignSelf: 'center',
        flexDirection: 'row',
        paddingHorizontal: 22,
        alignItems: 'center',
        borderBottomWidth: 0.3,
        borderRightWidth: 0.2,
        justifyContent: 'space-between'
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 22
    },
    nama: {
        fontSize: 20
    },
    lingkaran: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderStyle: 'dotted',
        borderWidth: 2,
        borderColor: '#71B280',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
