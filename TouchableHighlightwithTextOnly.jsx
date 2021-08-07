import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                
                <TouchableHighlight 
                    onPress={() => { 
                        alert('PRESSING THIS TEXT TRIGGERS AN ALERT!') 
                    }}
                >
                    <Text style={styles.touchableText}>
                        PRESS THIS TEXT!
                    </Text>
                </TouchableHighlight>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'darkblue'
    },
    touchableText: {
        fontFamily: 'futura',
        color: 'cyan',
        fontSize: 50,
        textAlign: 'center'
    }
});