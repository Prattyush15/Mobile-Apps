import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, TextInput } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    state = {
        inputValue: 'You can change me!'
    };

    _handleTextChange = inputValue => {
        this.setState({ inputValue });
    };

    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.box}>
                    <Text style = {styles.g}>
                        G
                    </Text>
                    <Text style = {styles.o}>
                        o
                    </Text>
                    <Text style = {styles.o2}>
                        o
                    </Text>
                    <Text style = {styles.g2}>
                        g
                    </Text>
                    <Text style = {styles.l}>  
                        l
                    </Text>
                    <Text style = {styles.e}>
                        e
                    </Text>
                </View>
                <View style={styles.textBox}>
                    <Text style={styles.text}>
                    </Text>
                    <TextInput
                        value={this.state.inputValue}
                        onChangeText={this._handleTextChange}
                        style={{ width: 200, height: 44, padding: 8 }}
                    />
                </View>
                
                
                <TouchableHighlight
                    onPress={() => {
                        alert('Alert Message!')
                    }}
                >
                    <View style={styles.searchBox}>
                        <Text style={styles.search}>
                            Search
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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    
    g: {
        color: 'blue',
        fontSize: 50,
        fontFamily: 'Arial',
        fontWeight: 'bold',
    },
    
    o: {
        color: 'red',
        fontSize: 50,
        fontFamily: 'Arial',
        fontWeight: 'bold',
    },
    
    o2: {
        color: 'gold',
        fontSize: 50,
        fontFamily: 'Arial',
        fontWeight: 'bold',
    },
    
    g2: {
        color: 'blue',
        fontSize: 50,
        fontFamily: 'Arial',
        fontWeight: 'bold',
    },
    
    l: {
        color: 'green',
        fontSize: 50,
        fontFamily: 'Arial',
        fontWeight: 'bold',
    },
    
    e: {
        color: 'red',
        fontSize: 50,
        fontFamily: 'Arial',
        fontWeight: 'bold',
    },
    
    textBox: {
        borderWidth: 1,
        width: 200,
        height: 40,
        borderColor: 'black',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 10,
    },
    
    text: {
        color: 'black',
        fontSize: 35,
        fontFamily: 'Arial',
    },
    
    searchBox: {
        borderWidth: 1,
        width: 100,
        height: 50,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: 'blue',
    },
    
    search: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Arial',
    },
    
    
    
});