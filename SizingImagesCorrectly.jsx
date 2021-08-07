import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: 'https://static.codehs.com/img/courses/introkarel/1.png' }}
                    style={{ height: 125, width: 200 }}
                />
                <Image
                    source={{ uri: 'https://static.codehs.com/img/courses/introkarel/2.png' }}
                    style={{ height: 200, width: 125 }}
                />
                <Image
                    source={{ uri: 'https://static.codehs.com/img/courses/introkarel/3.png' }}
                    style={{ height: 200, width: 200 }}
                />
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
});