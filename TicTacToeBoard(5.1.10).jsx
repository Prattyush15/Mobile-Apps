import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.top}>
                    
                    <Text style={styles.title}>
                        Tic-Tac-Toe
                    </Text>
                </View>
                
                <View style={styles.middle}>
                
                    <View style={styles.rows}>
                    
                        <View style={styles.box}>
                        
                        </View>
                        <View style={styles.box}>
                        
                        </View>
                        <View style={styles.box}>
                        
                        </View>
                    </View>
                    
                    <View style={styles.rows}>
                    
                        <View style={styles.box}>
                        
                        </View>
                        <View style={styles.box}>
                        
                        </View>
                        <View style={styles.box}>
                        
                        </View>
                    </View>
                    
                    <View style={styles.rows}>
                    
                        <View style={styles.box}>
                        
                        </View>
                        <View style={styles.box}>
                        
                        </View>
                        <View style={styles.box}>
                        
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
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    
    top: {
        height: deviceHeight/4,
        width: deviceWidth,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    title: {
        fontSize: 40,
        color: 'red',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    
    middle: {
        height: 3*(deviceHeight/4),
        width: deviceWidth,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    rows: {
        height: deviceHeight/4,
        width: deviceWidth,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    
    box: {
        height: deviceHeight/5,
        width: deviceWidth/4,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
        marginBottom: 10,
    },

});