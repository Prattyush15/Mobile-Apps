import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    
    state = {
        myName: 'Prattyush Giriraj',
        myCity: 'Mason',    
        myGrade: '11',
    }    
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    {this.state.myName}
                    {this.state.myCity}
                    {this.state.myGrade}
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
        flexDirection: 'column',
    },
    paragraph: {
        fontFamily: 'Didot',
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
    }
});