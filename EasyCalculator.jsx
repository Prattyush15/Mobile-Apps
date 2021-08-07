import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput, TouchableHighlight, Dimensions } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state = {
        numOne: '5',
        numTwo: '5',
        answer: '10',
        sign: '+',
    };

    numOneChange = numOne => {
        this.setState({ numOne });
    };
   
    numTwoChange = numTwo => {
        this.setState({ numTwo });
    };
   
    addition = () => {
        this.setState ({
            sign: '+',
            answer: Number(this.state.numOne) + Number(this.state.numTwo),
        })
    }
   
    subtraction = () => {
        this.setState ({
            sign: '-',
            answer: Number(this.state.numOne) - Number(this.state.numTwo),
        })
    }
   
    multiply = () => {
        this.setState ({
            sign: '*',
            answer: Number(this.state.numOne) * Number(this.state.numTwo),
        })
    }
   
    divide = () => {
        this.setState ({
            sign: '/',
            answer: Number(this.state.numOne) / Number(this.state.numTwo),
        })
    }
   
   
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Calculator
                </Text>
                <View style={styles.row}>
                    <TextInput
                        value={this.state.numOne}
                        keyboardType = 'numeric'
                        onChangeText={this.numOneChange}
                        style={styles.num}
                    />
                   
                    <View style={styles.signBox}>
                        <Text style={styles.sign}>
                            {this.state.sign}
                        </Text>
                    </View>
                    <TextInput
                        value={this.state.numTwo}
                        keyboardType = 'numeric'
                        onChangeText={this.numTwoChange}
                        style={styles.num}
                    />
                </View>
                <Text style={styles.answer}>
                    Answer: {this.state.answer}
                </Text>
                <Text style={styles.instructions}>
                    Click on a sign below to calculate
                </Text>
               
                <View style={styles.row2}>
               
                    <TouchableHighlight
                        onPress = {this.addition}
                    >
                        <View style={styles.box}>
                            <Text style={styles.sign}>
                                +
                            </Text>
                        </View>
                    </TouchableHighlight>
                   
                    <TouchableHighlight
                        onPress = {this.subtraction}
                    >
                        <View style={styles.box}>
                            <Text style={styles.sign}>
                                -
                            </Text>
                        </View>
                    </TouchableHighlight>
                   
                </View>
                <View style={styles.row2}>
                    <TouchableHighlight
                        onPress = {this.multiply}
                    >
                        <View style={styles.box}>
                            <Text style={styles.sign}>
                                *
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress = {this.divide}
                    >
                        <View style={styles.box}>
                            <Text style={styles.sign}>
                                /
                            </Text>
                        </View>
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },
    title: {
        fontSize: deviceHeight/11,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: deviceHeight/6,
        width: deviceWidth,
    },
    num: {
        height: deviceHeight/8,
        width: deviceWidth/5,
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    signBox: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
    },
    row2: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: deviceHeight/6,
        width: deviceWidth,
        marginTop: 10,
    },
    box: {
        borderWidth: 2,
        borderColor: 'black',
        height: deviceHeight/6,
        width: deviceWidth/5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    answer: {
        marginBottom: 10,
        marginTop: 5,
        fontWeight: 'bold',
    },
    
    sign: {
        fontSize: deviceHeight/10,
    },
});