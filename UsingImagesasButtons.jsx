import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, AppRegistry, TouchableHighlight, Alert } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight 
                    onPress={() => { alert('Karel says "Woof Woof!"'); }}
                >
                    <Image
                        source={{ uri: 'https://static.codehs.com/img/courses/introkarel/1.png' }}
                        style={{ height: 200, width: 200 }}
                    />
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
});