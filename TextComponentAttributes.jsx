import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.greenBoldText}>
                    This text is green and bold!
                </Text>
                <Text style={styles.redSerifText}>
                    This text is red and has a serif font!
                </Text>
                <Text style={styles.blueLargeText}>
                    This text is blue and large!
                </Text>
                <Text style={styles.orangeSmallText}>
                    This text is orange and small!
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around'
    },
    greenBoldText: {
        color: 'lawngreen',
        fontWeight: 'bold',
        fontSize: 25,
    },
    redSerifText: {
        color: 'firebrick',
        fontFamily: 'Times New Roman',
        fontSize: 25,
    },
    blueLargeText: {
        color: 'steelblue',
        fontSize: 40,
    },
    orangeSmallText: {
        color: 'orange',
        fontSize: 15,
    }
});