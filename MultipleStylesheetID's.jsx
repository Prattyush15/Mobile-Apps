import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
            
                <View style={styles.textContainer}>
                
                    <Text style={styles.paragraph}>
                        Hello, World!
                    </Text>
                    
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
    },
    textContainer: {
        height: 100,
        backgroundColor: 'darkblue',
    },
    paragraph: {
        color: 'white',
        fontSize: 25,
    },
});