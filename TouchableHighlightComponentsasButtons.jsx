import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
            
                <TouchableHighlight 
                    onPress={() => { 
                        alert('YOU PRESSED ME!') 
                    }}
                >
                    <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            I AM A BUTTON!
                        </Text>
                    </View>
                </TouchableHighlight>
                
                <TouchableHighlight 
                    onPress={() => { 
                        alert('YOU PRESSED ME TOO!') 
                    }}
                >
                    <View style={styles.touchableButton2}>
                        <Text style={styles.buttonText}>
                            ME TOO!
                        </Text>
                    </View>
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
    },
    touchableButton1: {
        backgroundColor: '#55acee',
        height: 75,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchableButton2: {
        backgroundColor: '#2a80b9',
        height: 50,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontFamily: 'futura',
        color: 'white',
        fontSize: 14,
    }
});