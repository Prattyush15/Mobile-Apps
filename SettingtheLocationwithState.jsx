import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    state = {
        myCity: 'Mason'    
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    {this.state.myCity}
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
        backgroundColor: '#333333',
    },
    paragraph: {
        fontFamily: 'Didot',
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
    }
});