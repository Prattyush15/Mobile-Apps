import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

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
        flex: 1,
    },
    
    left: {
        flex: 2.125,
        flexDirection:'row',
    },
    
    topLeft: {
        flex: 1.125,
    },
    
    midLeft: {
        flex: 0.75,
        backgroundColor: 'blue',
    },
    
    bottomLeft: {
        flex: 1.125,
    },
    
    
    
    middle: {
        flex: 0.75,
        backgroundColor: 'blue',
    },
    
    
    right: {
        flex: 3.125,
        flexDirection: 'row',
    },
    
    topRight: {
        flex: 1.125,
    },
    
    midRight: {
        flex: 0.75,
        backgroundColor: 'blue',
    },
    
    bottomRight: {
        flex: 1.125,
    },
    
    
    
});