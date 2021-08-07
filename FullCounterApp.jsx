import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    
    state = {
        count: 0,
    };
        
    increaseCounter = () => {
        this.setState({
            count: this.state.count + 1,
        })
    };
    
    decreaseCounter = () => {
        this.setState({
            count: this.state.count - 1,
        })
    };
    
    render() {
        return (
            <View style={styles.container}>
            
                <TouchableHighlight
                    onPress = {this.increaseCounter}
                    >
                    
                    <View style={styles.box}>
                        <Text style={styles.words}>
                            Increase
                        </Text>
                    </View>

                    </TouchableHighlight>
                
                <View style = {styles.box2}>
                    
                    <Text style = {styles.words}>
                        {this.state.count}
                    </Text>
                    
                </View>
                
                <TouchableHighlight
                    onPress = {this.decreaseCounter}
                >
                    
                    <View style={styles.box}>
                        <Text style={styles.words}>
                            Decrease
                        </Text>
                    </View>

                    </TouchableHighlight>
    
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
    box: {
        height: 1*(deviceHeight/5),
        width: deviceWidth,
        backgroundColor: 'blue',
        alingItems: 'center',
        justifyContent: 'center',
        
    },
    
    box2: {
        height: 3*(deviceHeight/5),
        width: deviceWidth,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    words: {
        fontSize: 20,
        color: 'white',  
    },
});