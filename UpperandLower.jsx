import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
   state = {
      greeting: 'Hello'
    }
    
    uppercaseName = () => {
        this.setState({ 
            greeting: this.state.greeting.toUpperCase()
        })
    }
    
    lowercaseName = () => {
        this.setState({ 
            greeting: this.state.greeting.toLowerCase()
        })
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    {this.state.greeting}
                </Text>
                <TouchableHighlight
                    onPress = {this.uppercaseName}
                >
                    <View style={styles.redButton}>
                        <Text style={styles.buttonText}>
                            Uppercase
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress = {this.lowercaseName}
                >
                    <View style={styles.blueButton}>
                        <Text style={styles.buttonText}>
                            Lowercase
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    paragraph: {
        fontSize: 40,
        textAlign: 'center',
        fontFamily: 'futura',
    },
    redButton: {
        backgroundColor: 'red',
        height: 50,
        width: 150,
        margin: 50,
        justifyContent: 'center',
    },
    blueButton: {
        backgroundColor: 'blue',
        height: 50,
        width: 150,
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
});