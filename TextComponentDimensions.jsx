import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
            
                <Text style={styles.textCenter}>
                    This text is centered.
                </Text>
                
                <Text style={styles.textJustify}>
                    This text is right-aligned and has no specific width dimension so it fills in the space it requires.
                </Text>
                
                <Text style={styles.textWrap}>
                    This text does not fit in the height and the width dimensions of this component.
                </Text>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    textCenter: {
        fontSize: 20,
        width: 225,
        textAlign: 'center',
        color: 'hotpink',
        backgroundColor: 'black',
    },
    textJustify: {
        color: 'red',
        fontSize: 20,
        textAlign: 'justify',
    },
    textWrap: {
        fontSize: 15,
        textAlign: 'right',
        width: 100,
        height: 50,
        color: 'limegreen',
        backgroundColor: 'darkblue'
    }
});