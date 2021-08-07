import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

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
        flex: 1,
    },
    top: {
        flex: 1, // the top is 1 part the height the whole screen
        flexDirection: 'row',
    },
    bottom: {
        flex: 2, // the buttom is 2 parts the height of the whole screen
        flexDirection: 'row', 
    },
    topLeft: {
        flex: 2, // the top left is 2 parts of the whole top
        backgroundColor: 'pink',
    },
    topRight: {
        flex: 1, // the top right is 1 part of the whole top
        backgroundColor: 'hotpink',
    },
    bottomLeft: {
        flex: 1, // the bottom left is 1 part of the whole bottom
        backgroundColor: 'purple',
    },
    bottomRight: {
        flex: 5, // the bottom right is 5 parts of the whole bottom
        backgroundColor: 'crimson',
    }
    
});