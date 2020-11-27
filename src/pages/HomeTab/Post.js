import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import Dash from 'react-native-dash'
import {PostModule} from '../../components'

const Post = () => {
    return (
        <View style={styles.container}>
            <Dash style={{height:1}} dashGap={9} dashLength={9} dashColor='gray'/>
            <ScrollView style={styles.list}>
                <PostModule name='Jessica'/>
                <PostModule name='Ferdi'/>
                <PostModule name='Andeca'/>
            </ScrollView>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    list: {
        // backgroundColor: 'grey',
    }
})
