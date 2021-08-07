import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

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
        flex: 1,
    },
    top: {
        flex: 1, 
        flexDirection: 'row',
    },
    bottom: {
        flex: 1, 
        flexDirection: 'row', 
    },
    topLeft: {
        flex: 1,
        backgroundColor: 'blue',
    },
    topRight: {
        flex: 1, 
        backgroundColor: 'lightblue',
    },
    bottomLeft: {
        flex: 1, 
        backgroundColor: 'darkblue',
    },
    bottomRight: {
        flex: 1, 
        backgroundColor: 'skyblue',
    },
});