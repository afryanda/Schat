import React from 'react'
import { StyleSheet, TouchableOpacity, Dimensions, View, Text, TextInput } from 'react-native'
import Icon from 'react-native-ionicons'

const width = Dimensions.get('window').width

const InputOverlay = (props) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.icon}>
                    <Icon name='happy' color='gray' size={30}/>
                </TouchableOpacity>
                <TextInput style={styles.text} placeholder='Type your message'/>
            </View>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.icon}>
                    <Icon name='attach' color='gray' size={30}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                    <Icon name='mic' color='gray' size={30}/>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default InputOverlay

const styles = StyleSheet.create({
    container: {
        width: width - 20,
        borderRadius: 30,
        height: 60,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 18,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 17,
        justifyContent: 'space-between'
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 17,
    },
    text: {
        fontSize: 18
    }
})
