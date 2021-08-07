import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TouchableHighlight, ImageBackground } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    
    state = {
        backgroundToDisplay: ['','http://papers.co/wallpaper/papers.co-me72-dusk-red-new-york-skyline-city-34-iphone6-plus-wallpaper.jpg', 'https://spliffmobile.com/download/new-york-5896.jpg', 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/new-york-city-empire-state-building-sunset-christopher-arndt.jpg'],
        message: ['','Get up and get ready', 'Your halfway through the day', 'Congrats, go take it easy'],
        index: 0,
        
    }
    
    selectBackground = (timeOfDay) => {
        if (timeOfDay == 'morning') {
            this.setState({ 
                index: 1,
            })
        } else if (timeOfDay == 'afternoon') {
            this.setState({ 
                index: 2,
            })
        } else if (timeOfDay == 'evening') {
            this.setState({ 
                index: 3,
            })
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.background}
                    source={this.state.backgroundToDisplay[this.state.index]}
                >
                
                    <TouchableHighlight
                        onPress={() => this.selectBackground('morning')}
                    >
                        <View style={styles.buttonView}>
                            <Text style={styles.buttonText}>
                                Good morning!
                            </Text>
                        </View>
                    </TouchableHighlight>
                    
                    <TouchableHighlight
                        onPress={() => this.selectBackground('afternoon')}
                    >
                        <View style={styles.buttonView}>
                            <Text style={styles.buttonText}>
                                Good afternoon!
                            </Text>
                        </View>
                    </TouchableHighlight>
                    
                    <TouchableHighlight
                        onPress={() => this.selectBackground('evening')}
                    >
                        <View style={styles.buttonView}>
                            <Text style={styles.buttonText}>
                                Good evening!
                            </Text>
                        </View>
                    </TouchableHighlight>
                    
                    <View>
                        <Text style={styles.text}>
                            {this.state.message[this.state.index]}
                        </Text>
                    </View>
                
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
    },
    buttonView: {
        height: 30,
        width: 100,
        backgroundColor: 'black',
        justifyContent: 'center',
        marginBottom: 3,
    },
    buttonText: {
        fontSize: 10, 
        color: 'white',
        textAlign: 'center',
    },
    text: {
        fontSize: 30, 
        color: 'black',
        textAlign: 'center',
    },
});