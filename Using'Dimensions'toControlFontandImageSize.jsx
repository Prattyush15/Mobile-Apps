import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.smallText}>
                    small
                </Text>
                <Text style={styles.mediumText}>
                    medium
                </Text>
                <Text style={styles.largeText}>
                    large
                </Text>
                <Image
                    source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }}
                    style={{ height: deviceHeight/3, width: deviceHeight/3 }}
                />
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
    },
    smallText: {
        fontSize: deviceHeight/20, // this font size is 1/20th the height of the screen
    },
    mediumText: {
        fontSize: deviceHeight/10, // this font size is 1/10th the height of the screen
    },
    largeText: {
        fontSize: deviceHeight/4, // this font size is 1/4th the height of the screen
    },
});