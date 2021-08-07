import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, Alert } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }}
                    style={{ height: 140, width: 200 }}
                />
                <Text style={styles.caption}>
                    Bad Kitty
                </Text>
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
    caption: {
        fontWeight: 'bold',
        fontSize: 24,
    }
});