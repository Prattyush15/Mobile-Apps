import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
            
                <View style={styles.left}>
                
                    <View style={styles.topLeft}>
                    
                    </View>
                    
                    <View style={styles.midLeft}>
                    
                    </View>
                    
                    <View style={styles.bottomLeft}>
                    
                    </View>
                </View>
                
                <View style={styles.middle}>
                
                </View>
                
                <View style={styles.right}>
                
                    <View style={styles.topRight}>
                    
                    </View>
                    
                    <View style={styles.midRight}>
                    
                    </View>
                    
                    <View style={styles.bottomRight}>
                    
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
    },
    
    left: {
        height: 2.125*(deviceHeight/6),
        flexDirection:'row',
    },
    
    topLeft: {
        width: 1.125*(deviceWidth/3),
    },
    
    midLeft: {
        width: 0.75*(deviceWidth/3),
        backgroundColor: 'blue',
    },
    
    bottomLeft: {
        width: 1.125*(deviceWidth/3),
    },
    
    
    
    middle: {
        height: 0.75*(deviceHeight/6),
        backgroundColor: 'blue',
    },
    
    right: {
        height: 3.125*(deviceHeight/6),
        flexDirection: 'row',
    },
    
    topRight: {
        width: 1.125*(deviceWidth/3),
    },
    
    midRight: {
        width: 0.75*(deviceWidth/3),
        backgroundColor: 'blue',
    },
    
    bottomRight: {
        width: 1.125*(deviceWidth/3),
    },
    
   
    
    
});