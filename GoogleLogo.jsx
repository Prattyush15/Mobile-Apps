import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style = {styles.g}>
                    G
                </Text>
                <Text style = {styles.o}>
                    o
                </Text>
                <Text style = {styles.o2}>
                    o
                </Text>
                <Text style = {styles.g2}>
                    g
                </Text>
                <Text style = {styles.l}>  
                    l
                </Text>
                <Text style = {styles.e}>
                    e
                </Text>
                
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    g: {
        color: 'blue',
        fontSize: 50,
        fontFamily: 'Arial',
        fontWeight: 'bold',
    },
    
    o: {
        color: 'red',
        fontSize: 50,
        fontFamily: 'Arial',
        fontWeight: 'bold',
    },
    
    o2: {
        color: 'gold',
        fontSize: 50,
        fontFamily: 'Arial',
        fontWeight: 'bold',
    },
    
    g2: {
        color: 'blue',
        fontSize: 50,
        fontFamily: 'Arial',
        fontWeight: 'bold',
    },
    
    l: {
        color: 'green',
        fontSize: 50,
        fontFamily: 'Arial',
        fontWeight: 'bold',
    },
    
    e: {
        color: 'red',
        fontSize: 50,
        fontFamily: 'Arial',
        fontWeight: 'bold',
    },
});