import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, ImageBackground, TouchableHighlight, Image } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
   
    state = {
        teamPicture: '',
        teamText: '',
        teamName: '',
    }
   
    selectColor = (winner) => {
        if (winner == 'teamA') {
            this.setState({
                teamPicture: { uri: 'https://codehs.com/uploads/6febf4f01870d0ddda66defcec258a28'},
                teamName: 'Green Bay Packers',
                teamText: 'GO PACKERS!!',
            })
        } else if (winner == 'teamB') {
            this.setState({
                teamPicture: { uri: 'https://codehs.com/uploads/075deaaa9e1ef07dc255c9331f71015d'},
                teamName: 'Chicago Bears',
                teamText: 'We will win next time',
            })
        }
    }
   
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                        Choose a winner
                    </Text>
                <View style={styles.buttonsContainer}>
               
                    
                    <TouchableHighlight
                        onPress={() => this.selectColor('teamA')}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                Packers
                            </Text>
                        </View>
                    </TouchableHighlight>
                   
                    <TouchableHighlight
                        onPress={() => this.selectColor('teamB')}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                Bears
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <Text style={styles.buttonText}>
                    {this.state.teamName}
                </Text>
                <Image
                    source={this.state.teamPicture}
                    style={{ height: 200, width: 500 }}
                />
                <Text style={styles.buttonText}>
                    {this.state.teamText}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonsContainer:{
        flexDirection: 'row',
    },
    button: {
        height: 50,
        width: 90,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: 'black',
    },
    title: {
        fontSize: 40,
        color: 'black',
    }

});