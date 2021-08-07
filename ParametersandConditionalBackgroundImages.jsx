import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TouchableHighlight, ImageBackground } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    
    state = {
        backgroundToDisplay: '',
    }
    
    selectBackground = (timeOfDay) => {
        if (timeOfDay == 'morning') {
            this.setState({ 
                backgroundToDisplay: 'http://papers.co/wallpaper/papers.co-me72-dusk-red-new-york-skyline-city-34-iphone6-plus-wallpaper.jpg',
            })
        } else if (timeOfDay == 'afternoon') {
            this.setState({ 
                backgroundToDisplay: 'https://spliffmobile.com/download/new-york-5896.jpg',
            })
        } else if (timeOfDay == 'evening') {
            this.setState({ 
                backgroundToDisplay: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/new-york-city-empire-state-building-sunset-christopher-arndt.jpg',
            })
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.background}
                    source={this.state.backgroundToDisplay}
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
});