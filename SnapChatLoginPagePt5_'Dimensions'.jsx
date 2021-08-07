import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TouchableHighlight, Alert, Dimensions, ImageBackground } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.yellowBlock}>
                    
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: 'https://codehs.com/uploads/c799accde67e1fd3bbd699119b4e1c83' }}
                            style={{ height: deviceHeight/10, width: deviceHeight/10 }}
                        />
                        
                    </View>
                    
                </View>
                
                <TouchableHighlight 
                style = {styles.redBlock}
                    onPress={() => { 
                        alert('You have successfully logged in.') 
                    }}
                >
                    <Text style = {styles.redWords}>
                        LOG IN
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight 
                style = {styles.blueBlock}
                    onPress={() => { 
                        alert('You have successfully signed up.') 
                    }}
                >
                    <Text style = {styles.blueWords}>
                        SIGN UP
                    </Text>
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