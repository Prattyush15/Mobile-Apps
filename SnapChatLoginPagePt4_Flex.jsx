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
                style = {styles.redBlock}
                    onPress={() => { 
                        alert('You have successfully logged in.') 
                    }}
                >
                    <Text style = {styles.redWords}>
                        LOG IN
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight 
                style = {styles.blueBlock}
                    onPress={() => { 
                        alert('You have successfully signed up.') 
                    }}
                >
                    <Text style = {styles.blueWords}>
                        SIGN UP
                    </Text>
                </TouchableHighlight>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
    yellowBlock: {
        flex: 5,
        backgroundColor: '#fffc00',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    
    redBlock: {
        flex: 1,
        backgroundColor: '#ff0049',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    blueBlock: {
        flex: 1,
        backgroundColor: '#00a9ff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    redWords: {
        color: 'white',
        fontFamily: 'Avenir',
        fontSize: 30,
        textAlign: 'center',
    },
    
    blueWords: {
        color: 'white',
        fontFamily: 'Avenir',
        fontSize: 30,
        textAlign: 'center',
    },
});