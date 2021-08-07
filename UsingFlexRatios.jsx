import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.top}>
                    <Text style={styles.paragraph}>
                        THIS VIEW TAKES UP 1 PART OF THE PARENT CONTAINER
                    </Text>
                </View>
                
                <View style={styles.middle}>
                    <Text style={styles.paragraph}>
                        THIS VIEW TAKES UP 2 PARTS OF THE PARENT CONTAINER
                    </Text>
                </View>
                
                <View style={styles.bottom}>
                    <Text style={styles.paragraph}>
                        THIS VIEW TAKES UP 7 PARTS OF THE PARENT CONTAINER
                    </Text>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        flex: 1, // change this value to see how the layout is affected
        backgroundColor: 'silver',
    },
    middle: {
        flex: 2, // change this value to see how the layout is affected
        backgroundColor: 'skyblue',
    },
    bottom: {
        flex: 7, // change this value to see how the layout is affected
        backgroundColor: 'dodgerblue',
    },
    paragraph: {
        color: 'white',
        fontSize: 12,
    },
});