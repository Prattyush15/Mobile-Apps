import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>

            <View style={styles.top}>
                <View style={styles.topLeft}>
                </View>
                <View style={styles.topRight}>
                </View>    
            </View>
            
            <View style={styles.bottom}>
                <View style={styles.bottomLeft}>
                </View>
                <View style={styles.bottomRight}>
                </View>    
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
    top: {
        height: deviceHeight/2, 
        flexDirection: 'row',
    },
    bottom: {
        height: deviceHeight/2,
        flexDirection: 'row', 
    },
    topLeft: {
        height: deviceHeight/2,
        width: deviceWidth/2,
        backgroundColor: 'blue',
    },
    topRight: {
        height: deviceHeight/2,
        width: deviceWidth/2,
        backgroundColor: 'lightblue',
    },
    bottomLeft: {
        height: deviceHeight/2,
        width: deviceWidth/2,
        backgroundColor: 'darkblue',
    },
    bottomRight: {
        height: deviceHeight/2,
        width: deviceWidth/2,
        backgroundColor: 'skyblue',
    },
});