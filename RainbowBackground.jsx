import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.violetBox}>
                </View>
                <View style = {styles.indigoBox}>
                </View>
                <View style = {styles.blueBox}>
                </View>
                <View style = {styles.greenBox}>
                </View>
                <View style = {styles.yellowBox}>
                </View>
                <View style = {styles.orangeBox}>
                </View>
                <View style = {styles.redBox}>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    
    violetBox: {
        backgroundColor: '#9400D3',
        height: 57,
        width: 300,
    },
    
    indigoBox: {
        backgroundColor: '#4B0082',
        height: 57,
        width: 300,
    },
    
    blueBox: {
        backgroundColor: '#0000FF',
        height: 57,
        width: 300,
    },
    
    greenBox: {
        backgroundColor: '#00FF00',
        height: 57,
        width: 300,
    },
    
    yellowBox: {
        backgroundColor: '#FFFF00',
        height: 57,
        width: 300,
    },
    
    orangeBox: {
        backgroundColor: '#FF7F00',
        height: 57,
        width: 300,
    },
    
    redBox: {
        backgroundColor: '#FF0000',
        height: 57,
        width: 300,
    },
    
    
});