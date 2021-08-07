import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.border}>
                    <View style = {styles.rowContainer}>
                        <View style = {styles.bigRed}>
                            <View style = {styles.smallBlue}>
                            </View>
                        </View>
                        <View style = {styles.bigBlue}>
                            <View style = {styles.smallYellow}>
                            </View>
                        </View>
                    </View>
                    <View style = {styles.rowContainer}>
                        <View style = {styles.bigYellow}>
                            <View style = {styles.smallGreen}>
                            </View>
                        </View>
                        <View style = {styles.bigGreen}>
                            <View style = {styles.smallRed}>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    border: {
      backgroundColor: 'white',
      height: 200,
      width: 200,
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    rowContainer: {
        height: 100,
        width: 200,
        flexDirection: 'row',
    },
    
    bigRed: {
        height: 100,
        width: 100,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    bigBlue: {
        height: 100,
        width: 100,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    bigYellow: {
        height: 100,
        width: 100,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    bigGreen: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    smallBlue: {
        height: 50,
        width: 50,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    smallYellow: {
        height: 50,
        width: 50,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    smallGreen: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    smallRed: {
        height: 50,
        width: 50,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
});