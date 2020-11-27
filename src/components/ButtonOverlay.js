import React from 'react'
import { StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-ionicons'

const OverlayButton = (props) => {
    const icon = props.name == 'chat'
            ? 'chatbubbles'
            : 'call'

    return (
        <TouchableOpacity style={styles.container}>
            <Icon name={icon} color='white' size={40}/>
        </TouchableOpacity>
    )
}

export default OverlayButton

const styles = StyleSheet.create({
    container: {
        height: 75,
        width: 75,
        borderRadius: 37.5,
        backgroundColor: '#71B280',
        position: 'absolute',
        bottom: 35,
        right: 30,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 9
    }
})
