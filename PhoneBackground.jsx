import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, ImageBackground } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.background}
                    source={{ uri: 'https://codehs.com/uploads/61b6d53b40527ed9fedf1f66c415c146' }}
                >
                
                    <View style={styles.timeBox}>
                        <Text style={styles.time}>
                            12:00
                        </Text>
                        
                        <Text style={styles.date}>
                            01/28/2021
                        </Text>
                        
                    </View>
                    
                    <View style={styles.empty}>
                    
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
        height: 600,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    timeBox: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
    },
    
    time: {
        color: 'white',
        fontSize: 80,
    },
    
    date: {
        color: 'white',
        fontSize: 20,
    },
    
    empty: {
        height: 300,
    },
});