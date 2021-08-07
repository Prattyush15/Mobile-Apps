import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, ImageBackground, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {

    state = {
        image: ['https://codehs.com/uploads/a2f95eb24e7bc6c06a5d0918c8646c94', 'https://codehs.com/uploads/72502723cd8b84c3d968d56acda1192d', 'https://codehs.com/uploads/78b825406ced9820a36b6547a8d53650'],
        message: ['Who is the winner?', 'Capitals Wins!', 'Rangers Win!'],
        index: 0,
    }

    capitalsWin = () => {
        this.setState({ 
            index: 1,
        })
    }
    
    rangersWin = () => {
        this.setState({ 
            index: 2,
        })
    }
    
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.background}
                    source={this.state.image[this.state.index]}
                >
                    <View style={styles.titleBox}>
                        <Text style={styles.title}>
                            {this.state.message[this.state.index]}
                        </Text>
                    </View>
                    <View style={styles.buttonBox}>
                        <TouchableHighlight
                            onPress={this.capitalsWin}
                        >
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>
                                    Washington Capitals
                                </Text>
                            </View>
                        </TouchableHighlight>
                        
                        <TouchableHighlight
                            onPress={this.rangersWin}
                        >
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>
                                    New York Rangers
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    background: {
        flex: 1,
        justifyContent: 'space-between'
    },
    titleBox: {
        justifyContent: 'center'
    },
    buttonBox: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        height: 50,
        width: 125,
        backgroundColor: 'blue',
        margin: 12,
        justifyContent: 'center'
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'red'
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    }
});