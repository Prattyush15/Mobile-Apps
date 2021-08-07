import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
   state = {
      name: 'Maria'
    }
    
    updateNameRed = () => {
        this.setState({ 
            name: 'Zach' 
        })
    }
    
    updateNameBlue = () => {
        this.setState({ 
            name: 'Rochelle' 
        })
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    {this.state.name}
                </Text>
                <TouchableHighlight
                    onPress = {this.updateNameRed}
                >
                    <View style={styles.redButton}>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress = {this.updateNameBlue}
                >
                    <View style={styles.blueButton}>
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
        fontSize: 20,
        textAlign: 'center',
    },
    redButton: {
        backgroundColor: 'red',
        height: 50,
        width: 50,
        margin: 50,
    },
    blueButton: {
        backgroundColor: 'blue',
        height: 50,
        width: 50,
    },
});