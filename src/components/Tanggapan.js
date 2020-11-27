import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-ionicons'

const Tanggapan = props => {
    const {name,count} = props
    const icon = name == 'like'
            ? 'thumbs-up'
            : 'chatboxes'

    return (
        <View style={{flexDirection: 'row', alignItems: 'center', color:'gray'}}>
            <Icon name={icon} style={{marginRight: 5}} color='gray' size={20}/>
            <Text>{count} {name}</Text>
        </View>
    )
}

export default Tanggapan

const styles = StyleSheet.create({})
