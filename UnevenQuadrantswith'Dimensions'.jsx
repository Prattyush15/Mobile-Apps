import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>

            <View style={styles.top}>
                <View style={styles.topLeft}>
                </View>
                <View style={styles.topRight}>
                </View>    
            </View>
            
            <View style={styles.bottom}>
                <View style={styles.bottomLeft}>
                </View>
                <View style={styles.bottomRight}>
                </View>    
            </View>
                
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
    },
    top: {
        height: deviceHeight/3, // the top is 1/3 the height the whole screen
        flexDirection: 'row',
    },
    bottom: {
        height: 2*(deviceHeight/3), // the buttom is 2/3 the height of the whole screen
        flexDirection: 'row', 
    },
    topLeft: {
        width: 2*(deviceWidth/3), // the top left is 2/3 the whole top portion
        backgroundColor: 'pink',
    },
    topRight: {
        width: deviceWidth/3, // the top right is 1/3 the whole top portion
        backgroundColor: 'hotpink',
    },
    bottomLeft: {
        width: deviceWidth/6, // the bottom left is 1/6 the whole bottom portion
        backgroundColor: 'purple',
    },
    bottomRight: {
        width: 5*(deviceWidth/6), // the bottom right is 5/6 the whole bottom portion
        backgroundColor: 'crimson',
    }
    
});