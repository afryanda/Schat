import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-ionicons'
import { useNavigation } from '@react-navigation/native';
import {userLogin} from '../data'
import Badge from './Badge';

const Foto = require('../../assets/jessica.png')

const Header = () => {
    const {nama,status,groups,friends,posts} = userLogin
    const navigation = useNavigation();

    const goToProfile = () => {
        navigation.navigate('Profile')
    }
    return (
        <View style={styles.wrap}>
            <TouchableOpacity style={styles.container} onPress={goToProfile}>
                <Image source={Foto} style={styles.foto}/>
                <View style={styles.id}>
                    <Text style={styles.nama}>{nama}</Text>
                    <Text style={styles.status}>{status}</Text>
                    <Badge/>
                </View>
            </TouchableOpacity>
            <Icon name="search" color='white' size={40} style={{alignSelf: 'center' }}/>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    wrap: {
        margin: 24,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    foto: {
        width: 75,
        height: 75,
        borderRadius: 37.5,
        borderWidth: 1,
        borderColor: 'white',
        marginRight: 15
    },
    id: {
        justifyContent: 'space-between',
    },
    nama: {
        fontSize: 22,
        color: 'white'
    },
    status: {
        fontSize: 14,
        color: 'white'
    },
    
})
