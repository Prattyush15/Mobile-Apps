import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    
    state = {
        locations: ['Salt Lake City','New York City','Denver','Miami','Seattle','Las Vegas','Detroit','Columbus','Orlando','Minneapolis','Washington, D.C.', 'Congrats your roadtrip is over!'],
        index: 0,
    }
    
    roadtripProgress = () => {
        if (this.state.index <= 11){
            this.setState({
                index: this.state.index + 1,
            })
        } else if (this.state.index > 11){
            this.setState({
                index: 12,
            })
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.roadtripProgress}
                >
                    <Text style={styles.buttonText}>
                        Next State
                    </Text>
                </TouchableHighlight>
                
                <Text style={styles.paragraph}>
                    {this.state.locations[this.state.index]}
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
        backgroundColor: 'lightblue',
    },
    button: {
        height: 50,
        width: 150,
        backgroundColor: 'white',
        borderColor: 'navy',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'navy',
        fontSize: 15,
        textAlign: 'center',
    },
    paragraph: {
        color: 'navy',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});