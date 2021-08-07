import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, Image } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.yellowBlock}>
                    <Image
                        source={{ uri: 'https://codehs.com/uploads/c799accde67e1fd3bbd699119b4e1c83' }}
                        style={{ height: 50, width: 50 }}
                    />
                </View>
                
                <TouchableHighlight 
                    onPress={() => { 
                        alert('You have successfully logged in.') 
                    }}
                >
                <View style = {styles.redBlock}>
                    <Text style = {styles.redWords}>
                        LOG IN
                    </Text>
                </View>
                </TouchableHighlight>
                
                <TouchableHighlight 
                    onPress={() => { 
                        alert('You have successfully signed up.') 
                    }}
                >
                <View style = {styles.blueBlock}>
                    <Text style = {styles.blueWords}>
                        SIGN UP
                    </Text>
                </View>
                </TouchableHighlight>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    
    yellowBlock: {
        backgroundColor: '#fffc00',
        height: 400,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    
    redBlock: {
        backgroundColor: '#ff0049',
        height: 75,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    blueBlock: {
        backgroundColor: '#00a9ff',
        height: 75,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    redWords: {
        color: 'white',
        fontFamily: 'Avenir',
        fontSize: 16,
        textAlign: 'center',
    },
    
    blueWords: {
        color: 'white',
        fontFamily: 'Avenir',
        fontSize: 16,
        textAlign: 'center',
    },
});