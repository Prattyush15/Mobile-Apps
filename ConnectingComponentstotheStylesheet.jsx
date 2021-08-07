import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.topTextContainer}>
                    <Text style = {styles.topText}>
                        Hello, Earth!
                    </Text>
                </View>
                <View style = {styles.bottomTextContainer}>
                    <Text style = {styles.bottomText}>
                        Hello, Mars!
                    </Text>
                </View>
            </View>
        );
    }
}

// Don't change anything below this point!
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightpink',
    },
    topTextContainer: {
        height: 200,
        width: 300,
        backgroundColor: 'blue',
    },
    bottomTextContainer: {
        height: 100,
        width: 100,
        backgroundColor: 'lightblue',
    },
    topText: {
        color: 'white',  
        fontSize: 25,
    },
    bottomText: {
        color: 'black',
        fontSize: 25,
    }
});