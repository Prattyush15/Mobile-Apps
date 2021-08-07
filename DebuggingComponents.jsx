import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    render() {
        return (
            <View>
                <Text>
                    Haikus are easy.
                </Text>
                <Text>
                    But not all haikus make sense.
                </Text>
                <Text>
                    Refrigerator.
                </Text>
            </View>
        );
    }
}