import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
            
                <View style = {styles.titleContainer}>
                    <Text style = {styles.title}>
                        Basketball Scorekeeper
                    </Text>
                </View>
                
                <View style = {styles.middle}>
                    <View style = {styles.rows}>
                        <View style = {styles.boxes}>
                            <Text style = {styles.text}>
                                Team 1 +3pts
                            </Text>
                        </View>
                        <View style = {styles.boxes}>
                            <Text style = {styles.text}>
                                Team 2 + 3pts
                            </Text>
                        </View>
                    </View>
                    
                    <View style = {styles.rows}>
                        <View style = {styles.boxes}>
                            <Text style = {styles.text}>
                                Team 1 +2pts 
                            </Text>
                        </View>
                        <View style = {styles.boxes}>
                            <Text style = {styles.text}>
                                Team 2 +2pts
                            </Text>
                        </View>
                    </View>
                    
                    <View style = {styles.rows}>
                        <View style = {styles.boxes}>
                            <Text style = {styles.text}>
                                Team 1 +1pt
                            </Text>
                        </View>
                        <View style = {styles.boxes}>
                            <Text style = {styles.text}>
                                Team 2 +1pt
                            </Text>
                        </View>
                    </View>
                    
                    <View style = {styles.bottom}>  
                        <Text style = {styles. bt}>
                            Team 1 Score: 0
                        </Text>
                        
                        <Text style = {styles.bt}>
                            Team 2 Score: 0
                        </Text>
                    </View>
                    
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
        backgroundColor: 'green',
    },
    
    titleContainer: {
        backgroundColor: 'green',
        height: 50,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 40,
    },
    
    title: {
        color: 'white',
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    
    middle: {
        backgroundColor: 'green',
        height: 220,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 20,
    },
    
    rows:{
        flexDirection: 'row',
        height: 70, 
        width: 220,
    },
    
    boxes: {
        borderColor: 'white',
        borderWidth: 1,
        height: 50,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 5,
    },
    
    text: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
    },

    bottom: {
        flexDirection: 'column',
        height: 70,
        width: 200,
        margin: 5,
    },
    
    bt: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },
    
});