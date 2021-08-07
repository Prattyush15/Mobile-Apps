import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet, ImageBackground } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
   state = {
        mileCount: 26,
        message: 'miles to go!'
    }
    
    updateMileCount = () => {
        if (this.state.mileCount > 1) {
            this.setState({ 
                mileCount: (this.state.mileCount - 1)
            })
        } else {
            this.setState({ 
                mileCount: 'You finished!',
                message: 'No more miles!'
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.background}
                    source={{ uri: 'https://i.pinimg.com/736x/18/50/1a/18501a27d99f90adb6c062e13d6010ea--wallpapers-ipad-iphone--wallpaper.jpg' }}
                >
                
                    <TouchableHighlight
                        style={styles.button}
                        onPress = {this.updateMileCount}
                    >
                        <View style={styles.buttonView}>
                            <Text style={styles.buttonText}>
                                Press to update the mile count!
                            </Text>
                        </View>
                    </TouchableHighlight>
                
                    <View style={styles.mileCountContainer}>
                        <Text style={styles.stateText}>
                            {this.state.mileCount}
                        </Text>
                        <Text style={styles.stateText}>
                            {this.state.message}
                        </Text>
                    </View>
                    
                </ImageBackground>
            </View>
      );
   }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        alignItems: 'space-between',
        justifyContent: 'space-between',
    },
    button: {
        flex: 1,
    },
    buttonView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    buttonText: {
        color: 'skyblue',
        fontSize: 20,
        textAlign: 'center',
    },
    mileCountContainer: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    stateText: {
        fontSize: 50,
        color: 'black',
        textAlign: 'center',
    }
});