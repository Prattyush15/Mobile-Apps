import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import Constants from 'expo-constants';

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
        flex: 1,
        flexDirection: 'row',
    },
    
    blue: {
        flex: 1,
        backgroundColor: 'blue',
    },
    
    yellow: {
        flex: 1,
        backgroundColor: 'yellow',
    },
    
    
    red: {
        flex: 1,
        backgroundColor: 'red',
    },
    
    
    
    
});