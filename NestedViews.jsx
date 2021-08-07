import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.boxOne}>
                    <View style = {styles.boxTwo}>
                         <View style = {styles.boxThree}>
                             <View style = {styles.boxFour}>
                            </View>
                        </View>
                    </View>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
        
    },
    
    boxOne: {
      backgroundColor: 'green',
      height: 225,
      width: 175,
    alignItems:'center',
    justifyContent:'center',
    },
    
    boxTwo: {
        backgroundColor: 'yellow',
        height: 195,
        width: 145, 
        alignItems:'center',
        justifyContent:'center',
    },
    
    boxThree: {
        backgroundColor: 'blue',
        height: 165,
        width: 115, 
        alignItems:'center',
        justifyContent:'center',        
    },
    
    boxFour: {
        backgroundColor: 'red',
        height: 100,
        width: 50,
        alignItems:'center',
        justifyContent:'center',        
    },
});