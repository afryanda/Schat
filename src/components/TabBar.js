import React from 'react'
import { View, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';
import Icon from 'react-native-ionicons'
import Animated from 'react-native-reanimated';

const width = Dimensions.get('window').width

function TabBar({ state, descriptors, navigation, position }) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = Animated.interpolate(position, {
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 1 : 0.5)),
        });

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}
          >{
              label == 'Camera' ? (
                <Icon name="camera" color='gray'/>
              ) : (
                <Animated.Text style={[styles.text,{ opacity }]}>
                  {label}
                </Animated.Text>
              )
            }
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default TabBar

const styles = StyleSheet.create({
    container: {
        width: width,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingVertical: 23,
        paddingHorizontal: 35,
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 18,
    }
})