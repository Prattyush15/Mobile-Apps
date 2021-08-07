import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
   state = {
      myString: 'hello, world'
    }
    
   sayLoudly = () => {
        this.setState({ 
            myString: this.state.myString.toUpperCase() + '!'
        })
    }
    
    
    render() {
        return (
            <View style={styles.container}>
                
                <TouchableHighlight
                    onPress = {this.sayLoudly}
                >
                    <Text style={styles.paragraph}>
                        {this.state.myString}
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
        backgroundColor: 'white',
    },
    paragraph: {
        color: 'indigo',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});