import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
   state = {
      myState: 'State is an object that stores the "state" of a component. The initial state of our app is this string you are reading right now. When pressed, the function updateState() will be called which will set a new state, meaning it will render a new string!'
    }
    
    updateState = () => {
        this.setState({ 
            myState: 'This string (state) is updated!' 
        })
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={styles.paragraph}
                    onPress = {this.updateState}
                >
                    {this.state.myState}
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
        backgroundColor: 'navy',
    },
    paragraph: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    }
});