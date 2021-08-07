import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TouchableHighlight, Alert, Dimensions, ImageBackground } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    
    state = {
        logIn: 'Log In',
        signUp: 'Sign Up',
        image: 'https://codehs.com/uploads/c799accde67e1fd3bbd699119b4e1c83'
        
    }
    
    newState = () => {
        this.setState ({
            logIn: 'Woo hoo, you logged in!',
            image: 'https://codehs.com/uploads/e6a75f14f57912fe8bd1722a30b98942'
            
        })
    }
    
    newState2 = () => {
        this.setState ({
            signUp: 'Yeah, sign you up!',
            image: 'https://codehs.com/uploads/926e7c484935e958de5b6bcfba56539b'
            
        })
    }
    
    
    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.yellowBlock}>
                    
                    <View style={styles.imageContainer}>
                        
                        <Image
                            source={{ uri: this.state.image }}
                            style={{ height: deviceHeight/10, width: deviceWidth/5 }}
                        />
                        
                    </View>
                    
                </View>
                
                
                    <TouchableHighlight
                    onPress = {this.newState}
                    >
                    
                    <View style={styles.redBlock}>
                        <Text style={styles.redWords}>
                            {this.state.logIn}
                        </Text>
                    </View>

                    </TouchableHighlight>
                
                
                    <TouchableHighlight
                    onPress = {this.newState2}
                    >
                    <View style={styles.blueBlock}>
                        <Text style={styles.blueWords}>
                            {this.state.signUp}

                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
    },
    
    yellowBlock: {
        height: 5*(deviceHeight/7),
        backgroundColor: '#fffc00',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    
    redBlock: {
        height: 1*(deviceHeight/7),
        backgroundColor: '#ff0049',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    blueBlock: {
        height: 1*(deviceHeight/7),
        backgroundColor: '#00a9ff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    redWords: {
        color: 'white',
        fontFamily: 'Avenir',
        fontSize: deviceHeight/30,
        textAlign: 'center',
    },
    
    blueWords: {
        color: 'white',
        fontFamily: 'Avenir',
        fontSize: deviceHeight/30,
        textAlign: 'center',
    },
    
    imageContainer: {
        height: deviceHeight/10,
    },
    
});