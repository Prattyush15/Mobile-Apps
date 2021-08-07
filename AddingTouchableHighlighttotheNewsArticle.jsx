import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight 
                    onPress={() => { 
                        alert('By: Rory Cellan-Jones') 
                    }}
                >
                    <View style = {styles.titleBox}>
                        <Text style = {styles.title}>
                            Elon Musk becomes world's richest person as wealth tops $185bn
                        </Text>
                    </View>
                </TouchableHighlight>
                
                <TouchableHighlight 
                    onPress={() => { 
                        alert('BBC News: http://bbc.in/3oKj0mc') 
                    }}
                >
                
                <View style = {styles.paragraphBox}>
                    <Text style = {styles.paragraph}>
                        Elon Musk has become the world's richest person, as his net worth crossed $185bn (£136bn).The Tesla and SpaceX entrepreneur was pushed into the top slot after Tesla's share price increased on Thursday.He takes the top spot from Amazon founder Jeff Bezos, who had held it since 2017.Mr Musk's electric car company Tesla has surged in value this year, and hit a market value of $700bn (£516bn) for the first time on Wednesday.
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
    
    titleBox: {
        height:50,
        width: 225,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    
    title: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: '25',
        textAlign: 'center',
    },
    
    authorBox: {
        height: 30,
        width: 225,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    authorName: {
        color: 'blue',
        fontSize: '12',
        textAlign: 'center',
    },
    
    paragraphBox: {
        height: 250,
        width: 225, 
        aligntItems: 'justify',
        margins: 30,
    },
    
    paragraph: {
        fontSize: '20',
        textAlign: 'justify',
        color: 'black',
    },
    
    sourceBox: {
        height: 100,
        width: 225,
        alignItems: 'center',
    },
    
    source: {
        fontSize: '12',
        textAlign: 'left',
        color: 'blue',
        fontStyle: 'italic',
    },

});