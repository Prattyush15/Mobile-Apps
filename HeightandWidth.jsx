import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.tallView}>
                </View>
                
                <View style={styles.shortView}>
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
    tallView: {
        height: 200,
        width: 200,
        backgroundColor: 'blue',
    },
    shortView: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
    }
});