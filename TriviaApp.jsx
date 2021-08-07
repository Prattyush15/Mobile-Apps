import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
   
    state = {
        colorRender: '',
        textRender: '',
        mainPage: 'block',
        triviaPage: 'none',
        rightPage: 'none',
        wrongPage: 'none',
    }
   
    answerChoice = (answer) => {
        if (answer == 'a') {
            this.setState({
                triviaPage: 'none',
                wrongPage: 'block',
                rightPage: 'none',
            })
        } else if (answer == 'b') {
            this.setState({
                triviaPage: 'none',
                rightPage: 'block',
                wrongPage: 'none',
            })
        } else if (answer == 'c') {
            this.setState({
                triviaPage: 'none',
                wrongPage: 'block'
            })
        } else if (answer == 'd') {
            this.setState({
                triviaPage: 'none',
                wrongPage: 'block'
            })
        }
    }
   
    startQuiz = () => this.setState(state => ({
        mainPage: 'none',
        triviaPage: 'block',
    }));
   
    render() {
        return (
            <View style={styles.container}>
                <View style={{ display: this.state.mainPage }}>
                    <Text style={styles.instructions}>
                        Click to answer the hardest question in the world.
                    </Text>
                    <TouchableHighlight
                        onPress={this.startQuiz}
                    >
                        <View style={styles.button}>
                            <Text style={styles.start}>
                                Start
                            </Text>
                        </View>
                    </TouchableHighlight>
                   
                </View>
                <View style={{ display: this.state.triviaPage}}>
                    <Text style={styles.question}>
                        Zurich is the largest city in which country?
                    </Text>
                    <TouchableHighlight
                        onPress={() => this.answerChoice('a')}
                    >
                    <View style={styles.button}>
                            <Text style={styles.buttonText1}>
                                Belgium
                            </Text>
                        </View>
                    </TouchableHighlight>
                   
                    <TouchableHighlight
                        onPress={() => this.answerChoice('b')}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText2}>
                                Switzerland
                            </Text>
                        </View>
                    </TouchableHighlight>
                   
                    <TouchableHighlight
                        onPress={() => this.answerChoice('c')}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText3}>
                                Japan
                            </Text>
                        </View>
                    </TouchableHighlight>
                   
                    <TouchableHighlight
                        onPress={() => this.answerChoice('d')}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText4}>
                                United States of America
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{ display: this.state.rightPage}}>
                    <Text style={styles.instructions}>
                        Congrats, you got it correct!
                    </Text>
                    <View style={styles.button}>
                        <Text style={styles.buttonText1}>
                            Score: 1
                        </Text>
                    </View>
                </View>
                <View style={{ display: this.state.wrongPage}}>
                    <Text style={styles.instructions}>
                        Sorry, but that's incorrect.
                    </Text>
                    <View style={styles.button}>
                        <Text style={styles.buttonText1}>
                            Score: 0
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        justifyContent: 'center',
    },
    button: {
        height: 50,
        width: 90,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText1: {
        fontSize: 15,
        color: 'blue',
    },
    buttonText2: {
        fontSize: 15,
        color: 'green',
    },
    buttonText3: {
        fontSize: 15,
        color: 'purple',
    },
    buttonText4: {
        fontSize: 15,
        color: 'red',
    },
    question: {
        fontSize: 20,
        color: 'orange',
        
    },
    instructions: {
        textAlign: 'center',
        fontSize: 30,
        color: 'orange',
        fontWeight: 'bold',
    }
});