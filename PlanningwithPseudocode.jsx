import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                Text with title: Top 5 Places to Visit in 2021.
                5 buttons with different locations across the world.
                Once you click one button, it will take you to a different page
                where it will show you images of the places and a list of things
                to do and a short list of things you need to bring.
                Then there will be a button to take you to the main page where 
                you will be able to click another button to see another place.
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
});