import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

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
        flex: 1,
    },
    
    red: {
        flex: 1,
        backgroundColor: 'red',
    },
    orange: {
        flex: 1,
        backgroundColor: 'orange',
    },
    yellow: {
        flex: 1,
        backgroundColor: 'yellow',
    },
    green: {
        flex: 1,
        backgroundColor: 'green',
    },
    blue: {
        flex: 1,
        backgroundColor: 'blue',
    },
    indigo: {
        flex: 1,
        backgroundColor: 'indigo',
    },
    violet: {
        flex: 1,
        backgroundColor: 'violet',
    },
    
});