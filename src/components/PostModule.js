import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity,Dimensions } from 'react-native'
import { Tanggapan } from './index'

const width = Dimensions.get('window').width - 10
const contoh = require('../../assets/jessica.png')
const post = require('../../assets/post.png')

const ChatModule = props => {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.containerA}>
                    <Image source={contoh} style={styles.img}/>
                    <View>
                        <Text style={styles.nama}>{props.name}</Text>
                        <Text style={{color: 'gray'}}>22 Sep at 10.50 AM</Text>
                    </View>
                </View>
                <Text style={styles.desc}>"Cinta merupakan perwujudan keindahan dari alam semesta, ketika seseorang sedang jatuh cinta, maka semuanya akan terlihat indah."</Text>
                <View style={styles.tanggapan}>
                    <Tanggapan name='like' count={12}/>
                    <Tanggapan name='comment' count={155}/>
                </View>
            </View>
            <Image source={post} style={styles.imgPost}/>
        </View>
    )
}

export default ChatModule

const styles = StyleSheet.create({
    container: {
        width,
        padding: 10,
        flexDirection: 'row',
        overflow: 'hidden',
        elevation: 3,
        marginBottom: 5
    },
    containerA: {
        marginTop: 5,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginBottom: 5
    },
    img: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10
    },
    imgPost: {
        width: 140,
        height: 140
    },  
    nama: {
        fontSize: 20
    },
    desc: {
        width: width - 150,
    },
    tanggapan: {
        flexDirection: 'row',justifyContent: 'space-between', marginRight:10,marginTop:10
    }
})
