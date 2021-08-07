import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.blue}>
                
                </View>
                
                <View style={styles.yellow}>
                
                </View>
                
                <View style={styles.red}>
                
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
        flexDirection: 'row',
    },
    
    blue: {
        height: deviceHeight,
        width: deviceWidth/3,
        backgroundColor: 'blue',
    },
    
    yellow: {
        height: deviceHeight,
        width: deviceWidth/3,
        backgroundColor: 'yellow',
    },
    
    
    red: {
        height: deviceHeight,
        width: deviceWidth/3,
        backgroundColor: 'red',
    },
    
});