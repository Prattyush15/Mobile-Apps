import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, AppRegistry, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.topText}>
                    TAKE TIME
                </Text>
                
                
                <Image
                    source={{ uri: 'https://codehs.com/uploads/26bde1cb1dfff078105e21ff0a6a041d' }}
                    style={{ height: 275, width: 275 }}
                />
                
                <Text style={styles.song}>
                    LIKE I WANT YOU
                </Text>
                
                <Text style={styles.artist}>
                    Giveon
                </Text>
                
                <View style={styles.songTimesContainer}>
                
                    <Text style={styles.time}>
                        0:00
                    </Text>
                    
                    <View style={styles.line}>
                    </View>
                    
                    <Text style={styles.time}>
                        4:21
                    </Text>
                    
                </View>
                
                <View style={styles.playerControlsContainer}>
                
                    
                    
                    
                    <TouchableHighlight
                        onPress={() => {
                            alert('Previous Song')
                        }}
                    >
                    
                    <View style={styles.arrows}>
                        <Image
                            source={{ uri: 'https://codehs.com/uploads/de00e9c8530c8309d09592b862bc8961' }}
                            style={{ height: 20, width: 30 }}
                        />
                    </View>
                    </TouchableHighlight>

                    
                    <TouchableHighlight
                        onPress={() => {
                            alert('Pause')
                        }}
                    >
                    
                    
                    <View style={styles.pause}>
                        <Image
                        source={{ uri: 'https://codehs.com/uploads/ef5b99b661f0a16801d65ea0eeee385a' }}
                        style={{ height: 70, width: 70 }}
                        />
                    </View>
                    </TouchableHighlight>
                    
                    <TouchableHighlight
                        onPress={() => {
                            alert('Next Song')
                        }}
                    >
                    
                    <View style={styles.arrows}>
                        <Image
                            source={{ uri: 'https://codehs.com/uploads/c6678f1b21a046cab77a2ad4c6280b36' }}
                            style={{ height: 20, width: 30 }}
                        />
                    </View>
                    </TouchableHighlight>

                    
                    
                    
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#181818',
    },
    topText: {
        fontFamily: 'Roboto',
        fontSize: 14,
        color: 'white',
        paddingTop: 30,
        paddingBottom: 20,
    },
    song: {
        fontFamily: 'Roboto',
        fontSize: 26,
        color: 'white',
        marginTop: 20,
    },
    artist: {
        fontFamily: 'Roboto',
        fontSize: 15,
        color: '#e9e9e9',
        marginTop: 5,
    },
    songTimesContainer: {
        marginTop: 20,
        flexDirection: 'row',
    },
    time: {
        fontFamily: 'Roboto',
        fontSize: 12,
        color: 'white',
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        width: 200,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    playerControlsContainer: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'space-between',
    },
    arrows: {
        margin: 25,
        height: 20,
        width: 30,
    },
    pause: {
        height: 70,
        width: 70,
    }

});