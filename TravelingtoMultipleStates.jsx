import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// Note: the index will run out once it goes through the entire list of states
// that means it will no longer have anything to display
export default class App extends Component {
   state = {
        cities: ['Salt Lake City','New York City','Denver','Miami','Seattle','Las Vegas','Detroit','Columbus','Orlando','Minneapolis','Washington, D.C.'],
        count: 0,
    }
    
    randomState = () => {
        this.setState({ 
            count: this.state.count + 1,
        })
        
    }
    
    render() {
        return (
            <View style={styles.container}>
            
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.randomState}
                >
                    <Text style={styles.buttonText}>
                        Travel to a new City!
                    </Text>
                </TouchableHighlight>
                
                <Text style={styles.paragraph}>
                    {this.state.cities[this.state.count]}
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
        backgroundColor: 'lightblue',
    },
    button: {
        height: 50,
        width: 150,
        backgroundColor: 'white',
        borderColor: 'navy',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'navy',
        fontSize: 15,
        textAlign: 'center',
    },
    paragraph: {
        color: 'navy',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});