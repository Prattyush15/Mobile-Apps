import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    FOOTBALL SCOREKEEPER
                </Text>
            
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            TEAM 1 TOUCHDOWN!
                        </Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            TEAM 1 FIELD GOAL!
                        </Text>
                    </View>
                </View>
                
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            TEAM 2 TOUCHDOWN!
                        </Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            TEAM 2 FIELD GOAL!
                        </Text>
                    </View>
                </View>
                <Text style={styles.paragraph}>
                    SCORE
                </Text>
                <Text style={styles.paragraph}>
                    Team 1: 0
                </Text>
                
                <Text style={styles.paragraph}>
                    Team 2: 0
                </Text>
                
            </View>
      );
   }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
    },
    title: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    paragraph: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        height: 50,
        width: 90,
        backgroundColor: 'green',
        borderColor: 'white',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 10,
        textAlign: 'center',
    },
});