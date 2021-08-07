import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    state = {
        name: 'Prattyush'
    }
    
    newState = () => {
        this.setState ({
            name: 'Pratty',
            
        })
    }
    
    render() {
        return (
            <View style={styles.container}>

                <TouchableHighlight
                    onPress = {this.newState}
                >
                    <Text style={styles.paragraph}>
                        {this.state.name}

                    </Text>
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
        backgroundColor: 'lightgray',
    },
    
    name: {
        height: 40,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue'
    },
    
    paragraph: {
        color: 'teal',
        fontSize: 40,
        textAlign: 'center',
    },
});