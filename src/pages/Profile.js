import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import Icon from 'react-native-ionicons'
import Badge from '../components/Badge'
import Identity from '../components/Identity'
import { userLogin } from '../data'

const width = Dimensions.get('window').width
const foto = require('../../assets/jessica.png')
const { nama, status, groups, friends, posts, loginHistory } = userLogin

const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.identity}>
                    <Image source={foto} style={styles.img}/>
                    <Text style={[styles.nama,styles.txt]}>{nama}</Text>
                    <Text style={styles.txt}>Last login {loginHistory}</Text>
                    <Badge/>
                </View>
                <Identity/>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    img: {
        height: 180,
        width: 180,
        borderRadius: 90,
        borderWidth: 6,
        borderColor: 'white',
        alignSelf: 'center',
    },
    nama: {
        fontSize: 35,
        marginTop: 13,
    },
    txt: {
        color: 'white',
        marginBottom: 10,
        alignSelf: 'center'
    },
    card: {
        backgroundColor: '#B7C9C4',
        borderTopStartRadius: 70,
        borderTopEndRadius: 70,
        width,
        paddingBottom: 90
    },
    identity: {
        marginTop: -90
    }
})
