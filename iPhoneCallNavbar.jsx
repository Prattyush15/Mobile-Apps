import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TouchableHighlight, Dimensions } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
            
                <View style={styles.contentContainer}>
                </View>
                

                <View style={styles.navbarContainer}>
                
                    <TouchableHighlight style={styles.navButton}>
                        <Text style={styles.navButtonImage}>
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/167db19eeb42f67b3e80444442b5f585' }}
                                style={{ height: deviceHeight/12, width: deviceWidth/6 }}
                            />
                            
                            <Text style={styles.text}>
                                Favorites
                            </Text>
                        </Text>
                    </TouchableHighlight>
                    
                    <TouchableHighlight style={styles.navButton}>
                        <Text style={styles.navButtonImage}>
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/58526c04126647c616920fd7f7f4b9cc' }}
                                style={{ height: deviceHeight/12, width: deviceWidth/6 }}
                            />
                            <Text style={styles.text}>
                                Recents
                            </Text>
                        </Text>
                    </TouchableHighlight>
                    
                    <TouchableHighlight style={styles.navButton}>
                        <Text style={styles.navButtonImage}>
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/f84700b5372ff195ae4447ba45aca22e' }}
                                style={{ height: deviceHeight/12, width: deviceWidth/6 }}
                            />
                            <Text style={styles.text}>
                                Contacts
                            </Text>
                        </Text>
                    </TouchableHighlight>
                    
                    <TouchableHighlight style={styles.navButton}>
                        <Text style={styles.navButtonImage}>
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/1e280414d057e6f33b3b8ae3ceef1962' }}
                                style={{ height: deviceHeight/12, width: deviceWidth/6 }}
                            />
                            <Text style={styles.text}>
                                Keypad
                            </Text>
                        </Text>
                    </TouchableHighlight>
                    
                    <TouchableHighlight style={styles.navButton}>
                        <Text style={styles.navButtonImage}>
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/93e86aa46aaf49859420d73aff725c04' }}
                                style={{ height: deviceHeight/12, width: deviceWidth/6 }}
                            />
                            <Text style={styles.text}>
                                Voicemail
                            </Text>
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
        backgroundColor: 'white',
    },
    navbarContainer: {
        height: deviceHeight/6,
        width: deviceWidth,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 10,
        borderColor: 'grey',
    },
    navButton: {
        height: deviceHeight/14,
        width: deviceWidth/6,
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    navButtonImage: {
        height: deviceHeight/12,
        width: deviceWidth/6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    text: {
        fontSize: 11,
        color: 'grey',
        fontFamily: 'Roboto',
        textAlign: 'center',
    },
});