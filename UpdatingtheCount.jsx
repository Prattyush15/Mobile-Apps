import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
   state = {
        count: 0,
    }
    
    increaseCount = () => {
        this.setState({ 
            count: this.state.count + 1,
        })
    }
    
    render() {
        return (
            <View style={styles.container}>
            
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.increaseCount}
                >
                    <Text style={styles.buttonText}>
                        Press me!
                    </Text>
                </TouchableHighlight>
                
                <Text style={styles.paragraph}>
                    {this.state.count}
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
        backgroundColor: 'lightgray',
    },
    button: {
        height: 50,
        width: 150,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'teal',
        fontSize: 25,
    },
    paragraph: {
        color: 'teal',
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});