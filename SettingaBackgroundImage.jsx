import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, Text, ImageBackground } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.background}
                    source={{ uri: 'https://c1.staticflickr.com/6/5253/5426098861_4aee73fb6d_b.jpg' }}
                >
                    <View style={styles.textContainer}>
                        <Text style={styles.paragraph}>
                            Hello, Universe!
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
    },
    paragraph: {
        textAlign: 'center',
        fontSize: 50,
        fontFamily: 'Courier New',
    }
});