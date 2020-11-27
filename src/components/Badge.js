import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {userLogin} from '../data'

const { nama, status, groups, friends, posts, loginHistory } = userLogin

const Badges = () => {
    return (
        <View style={styles.badges}>
            <Badge teks={`${groups} Groups`} warna='#02D3E0'/>
            <Badge teks={`${friends} Friends`} warna='#F4178F'/>
            <Badge teks={`${posts} Posts`} warna='#02E068'/>
        </View>
    )
}

const Badge = (props) => {
    const {teks, warna} = props
    return (
        <View style={styles.badge}>
            <View style={[styles.dot,{backgroundColor: warna}]}/>
            <Text style={styles.badgeText}>{teks}</Text>
        </View>
    )
}

export default Badges

const styles = StyleSheet.create({
    badges: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    badge: {
        flexDirection: 'row',
        height: 15,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7.5,
        marginRight: 5,
        padding: 5,
    },
    dot: {
        height: 7,
        width: 7,
        borderRadius: 3.5,
        backgroundColor: '#02D3E0',
        marginRight: 2
    },
    badgeText: {
        fontSize: 10
    }
})
