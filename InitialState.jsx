import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
      state = {
      text: 'hello'
    }

    newText = () => {
        this.setState({ 
            text: this.state.text.toUpperCase() + this.state.text
        })
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    {this.state.text}
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
        backgroundColor: 'white',
    },
    paragraph: {
        color: 'black',
        fontSize: 16,
        lineHeight: 20,
        textAlign: 'center',
    }
});