import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, Dimensions, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    
    render() {
        return (
            <View style={styles.container}>
            
                {/*This container holds the main information for each screen.*/}
                <View style={styles.contentContainer}>
                </View>
                
                {/*This container holds the bottom navigation buttons.
                This bar exists on every screen.*/}
                <View style={styles.navbarContainer}>
                
                    <TouchableHighlight style={styles.navButton}>
                        <Text style={styles.navButtonText}>
                            Welcome
                        </Text>
                    </TouchableHighlight>
                    
                    <TouchableHighlight style={styles.navButton}>
                        <Text style={styles.navButtonText}>
                            Info
                        </Text>
                    </TouchableHighlight>
                    
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
    contentContainer: {
        height: 5*(deviceHeight/6),
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
    },
    navbarContainer: {
        height: deviceHeight/6,
        width: deviceWidth,
        backgroundColor: 'darkblue',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 10,
        borderColor: 'white',
    },
    navButton: {
        height: deviceHeight/14,
        width: deviceWidth/4,
        backgroundColor: 'white',
        borderColor: 'lightblue',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    navButtonText: {
        fontSize: deviceHeight/40,
        textAlign: 'center',
        color: 'darkblue',
    },

});