import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleBox}>
                    <Text style={styles.title}>
                        GUCCI
                    </Text>
                </View>
                
                <View style={styles.middleBox}>
                    <View style={styles.sloganBox}>
                        <Text style={styles.slogan}>
                            L'aveugle par amour
                        </Text>
                    </View>
                    
                    <TouchableHighlight
                        onPress={() => {
                            alert('Login successful')
                        }}
                    >
                        <View style={styles.buttonText1}>
                            <Text style={styles.text}>
                                Log In
                            </Text>
                        </View>
                    
                    </TouchableHighlight>
                    
                    <TouchableHighlight
                        onPress={() => {
                            alert('SignUp Successful')
                        }}
                    >
                        <View style={styles.buttonText1}>
                            <Text style={styles.text}>
                                Sign Up
                            </Text>
                        </View>
                    </TouchableHighlight>
                    
                    
                    
                </View>
                
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        flexDirection: 'column',
        alignItems: 'center',
    },
    
    titleBox: {
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        width: 225,
        height: 50,
        borderColor: 'gold',
        borderWidth: 2,
    },
    
    title: {
      color: 'gold',
      fontSize: 50,
      fontWeight: 'bold',
      fontFamily: 'aventura',
    },
    
    middleBox: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    width: 225,
    height: 350,
    },
    
    sloganBox: {
      width: 225,
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'green',
      margin: 5, 
    },
    
    slogan: {
        fontSize: 25,
        color: 'gold',
        fontFamily: 'aventura',
    },
    
    buttonText1: {
      width: 100,
      hegiht: 100,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5,
      backgroundColor: 'green',
      borderColor: 'gold',
      borderWidth: 1,
    },
    
    text: {
      fontSize: 25,
      color: 'gold',
      fontFamily: 'aventura',
    
    },
    
    
    
});