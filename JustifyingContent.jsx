import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topBox}>
                </View>
                <View style={styles.middleBox}>
                </View>
                <View style={styles.bottomBox}>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    topBox: {
        width: 100,
        height: 100,
        backgroundColor: 'lightblue',
    },
    middleBox: {
        width: 100,
        height: 100,
        backgroundColor: 'mediumblue',
    },
    bottomBox: {
        width: 100,
        height: 100,
        backgroundColor: 'darkblue',
    },
});