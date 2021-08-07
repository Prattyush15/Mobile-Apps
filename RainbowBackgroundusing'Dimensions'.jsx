import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.red}>
                
                </View>
            
                
                <View style={styles.orange}>
                
                </View>
                
                <View style={styles.yellow}>
                
                </View>
                
                <View style={styles.green}>
                
                </View>
                
                <View style={styles.blue}>
                
                </View>
                
                <View style={styles.indigo}>
                
                </View>
                
                <View style={styles.violet}>
                
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
    },
    
    red: {
        height: deviceHeight/7,
        backgroundColor: 'red',
    },
    orange: {
        height: deviceHeight/7,
        backgroundColor: 'orange',
    },
    yellow: {
        height: deviceHeight/7,
        backgroundColor: 'yellow',
    },
    green: {
        height: deviceHeight/7,
        backgroundColor: 'green',
    },
    blue: {
        height: deviceHeight/7,
        backgroundColor: 'blue',
    },
    indigo: {
        height: deviceHeight/7,
        backgroundColor: 'indigo',
    },
    violet: {
        height: deviceHeight/7,
        backgroundColor: 'violet',
    },
});