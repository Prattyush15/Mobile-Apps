import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, Dimensions, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navbarContainer}>
                
                    <TouchableHighlight style={styles.navButton}>
                        <Text style={styles.navButtonImage}>
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/5ab640baaee52115705cc4b8da38eb15' }}
                                style={{ height: deviceHeight/8, width: deviceWidth/4 }}
                            />
                        </Text>
                    </TouchableHighlight>
                    
                    <TouchableHighlight style={styles.navButton}>
                        <Text style={styles.navButtonImage}>
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/fc53c9cbd2245fa2cd2dbc74a30ad1e7' }}
                                style={{ height: deviceHeight/8, width: deviceWidth/4 }}
                            />
                        </Text>
                    </TouchableHighlight>
                    
                    <TouchableHighlight style={styles.navButton}>
                        <Text style={styles.navButtonImage}>
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/cb6632a768a497c08fa5b0564bd3c73d' }}
                                style={{ height: deviceHeight/8, width: deviceWidth/4 }}
                            />
                        </Text>
                    </TouchableHighlight>
                </View>
                
                <View style={styles.contentContainer}>
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
    
    navbarContainer: {
        height: deviceHeight/6,
        width: deviceWidth,
        backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderColor: 'black',
    },
    
    navButton: {
        height: deviceHeight/8,
        width: deviceWidth/4,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
    },
    
    navButtonImage: {
        height: deviceHeight/8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    contentContainer: {
        height: 5*(deviceHeight/6),
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    
});