import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    render() {
        return (
            <View>
                <Text>
                    Hello, Mercury!
                </Text>
                <Text>
                    Hello, Venus!
                </Text>
                <Text>
                    Hello, Earth!
                </Text>
                <Text>
                    Hello, Mars!
                </Text>
                <Text>
                    Hello, Jupiter!
                </Text>
                <Text>
                    Hello, Saturn!
                </Text>
                <Text>
                    Hello, Uranus!
                </Text>
                <Text>
                    Hello, Neptune!
                </Text>
                <Text>
                    Hello, Pluto!
                </Text>
            </View>
        );
    }
}