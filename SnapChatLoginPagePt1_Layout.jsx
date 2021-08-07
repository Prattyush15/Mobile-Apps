import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.yellowBlock}>
                </View>
                <View style = {styles.redBlock}>
                    <Text style = {styles.redWords}>
                        LOG IN
                    </Text>
                </View>
                <View style = {styles.blueBlock}>
                    <Text style = {styles.blueWords}>
                        SIGN UP
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    
    yellowBlock: {
        backgroundColor: '#fffc00',
        height: 300,
        width: 225,
    },
    
    redBlock: {
        backgroundColor: '#ff0049',
        height: 50,
        width: 225,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    blueBlock: {
        backgroundColor: '#00a9ff',
        height: 50,
        width: 225,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    redWords: {
        color: 'white',
        fontFamily: 'Avenir',
        fontSize: 16,
        textAlign: 'center',
    },
    
    blueWords: {
        color: 'white',
        fontFamily: 'Avenir',
        fontSize: 16,
        textAlign: 'center',
    },
});