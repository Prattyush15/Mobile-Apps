import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TouchableHighlight, Alert } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.textBox}>
                    <Text style={styles.text}>
                    Madara Uchiha
                    </Text>
                </View>
                    
                
                
                
                <TouchableHighlight
                    onPress={() => {
                        alert('Wake up to reality! Nothing ever goes as planned in this world. The longer you live, the more you realize that in this reality only pain, suffering and futility exist.')
                    }}
                >
                
                <Image
                    source={{ uri: 'https://codehs.com/uploads/99cbd9011cc5deaeb6250a76cef80b65' }}
                    style={{ height: 200, width: 300 }}
                />
                
                </TouchableHighlight>
                
                

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    
    text: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
    },
    
    textBox: {
        height: 30,
        width: 300,
        margin: 10,
        justifyContetn: 'center',
        alignItems: 'center',
    },
});