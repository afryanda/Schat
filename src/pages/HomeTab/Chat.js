import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import {MiniStatus,ChatModule,ButtonOverlay} from '../../components/'
import {friends} from '../../data'

const Chat = () => {
    return (
        <View style={styles.container}>
            <MiniStatus/>
            <ScrollView style={styles.list}>
                <ChatModule name='Afrianda' status='unread'/>
                {friends.map((friend,index) =>(
                    <ChatModule name={friend} key={index} status='read'/>
                ))}
            </ScrollView>
            <ButtonOverlay name='chat'/>
        </View>
    )
}

export default Chat

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    list: {
        paddingVertical: 12,
    }
})
