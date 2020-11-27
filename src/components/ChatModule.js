import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-ionicons'

const contoh = require('../../assets/jessica.png')

const ChatModule = (props) => {
    const navigation = useNavigation();
    const {status,name} = props
    const icon = status == 'read'
            ? 'checkmark-circle'
            : 'checkmark-circle-outline'
    const color = status == 'read'
            ? '#23C0E2'
            : 'gray'

    const goToChatting = () => {
        navigation.navigate('Chatting')
    }

    return (
        <TouchableOpacity onPress={goToChatting}>
            <View style={styles.container}>
                <Image source={contoh} style={styles.img}/>
                <View style={{justifyContent: 'space-between'}}>
                    <Text style={styles.nama}>{name}</Text>
                    <View style={styles.status}>
                        <Icon name={icon} color={color} size={15} style={{marginRight: 5}}/>
                        <Text>Hey whats'up</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
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
        borderRightWidth: 0.2
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
    status: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})
