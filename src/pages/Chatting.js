import React from 'react'
import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-ionicons'
import { InputOverlay} from '../components'
import { message } from '../data'

const maxWidth = Dimensions.get('window').width*0.5

const Chatting = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='white' barStyle='dark-content'/>
            <ScrollView contentContainerStyle={styles.listMessage}>
                {
                    message.map((msg,index)=>(
                        <Message key={index} msg={msg.desc} status={msg.status}/>
                    ))
                }
            </ScrollView>
            <InputOverlay/>
        </View>
    )
}

const Message = props => {
    const align = props.status == 'read'
            ? 'flex-end'
            : 'flex-start'

    const color = props.status == 'read'
            ? '#BEDBBB'
            : 'white'
    return (
        <View style={[styles.message,{alignSelf:align,backgroundColor:color}]}>
            <Text>{props.msg}</Text>
        </View>
    )
}

export default Chatting

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    message: {
        backgroundColor: 'white',
        width: maxWidth,
        minHeight: 35,
        minWidth: 40,
        borderRadius: 10,
        padding: 10,
        marginBottom: 17,
    },
    listMessage: {
        paddingVertical: 20,
        paddingHorizontal: 20
    }
})
