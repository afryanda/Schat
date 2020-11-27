import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import {MiniStatus,CallModule,ButtonOverlay} from '../../components/'
import {friends} from '../../data'

const Call = () => {
    return (
        <View style={styles.container}>
            <MiniStatus/>
            <ScrollView style={styles.list}>
                {friends.map((friend,index) =>(
                    <CallModule name={friend} key={index}/>
                ))}
                <CallModule name='Afryanda' status='video'/>
            </ScrollView>
            <ButtonOverlay name='call'/>
        </View>
    )
}

export default Call

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    list: {
        // paddingVertical: 12,
    }
})
