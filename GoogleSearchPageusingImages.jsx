import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, TextInput, Image } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    state = {
        inputValue: ''
    };

    _handleTextChange = inputValue => {
        this.setState({ inputValue });
    };

    render() {
        return (
            <View style={styles.container}>

                    <Image
                        source={{ uri: 'https://codehs.com/uploads/b61b04781980ec2d29f8083d531cc5f8' }}
                        style={{ height: 100, width: 250 }}
                    />
               
                
                <View style={styles.middle}>
                    <TextInput style={styles.text}
                        multiline = {true}
                        onChangeText={(inputValue) => this.setState({inputValue})}
                        value={this.state.inputValue}
                        style={styles.textBox}
                    />
                    
                    
                    <TouchableHighlight
                        onPress={() => {
                            alert('Searching for '  + this.state.inputValue)
                        }}
                    >
                    
                        <View style={styles.button}>
                            <Image
                            source={{ uri: 'https://codehs.com/uploads/55c6938d3d45ecfb8a32916545f27306' }}
                            style={{ height: 30, width: 30 }}
                            />
                        </View>
                    
                    </TouchableHighlight>
                    
                
                </View>
                    
                    
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        width: 250,
        height: 100,
    },
    
    textBox: {
        borderWidth: 1,
        width: 200,
        height: 30,
        borderColor: 'black',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        flexDirection: 'row',
    },
    
    text: {
        color: 'black',
        fontSize: 40,
        fontFamily: 'Arial',
    },
    
    button: {
        backgroundColor: 'blue',
        width: 30,
        height: 30,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    
    middle: {
        width: 200,
        height: 30,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    

    
    
    
});