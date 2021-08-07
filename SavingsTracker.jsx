import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, Dimensions, StyleSheet, Image, TextInput } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state = {
        goal: 0,
        moneySaved: 0,
        progress: 0,
        inspiration: 'Ready to start saving!'
    }

    savingsProgress = () => {
        if (this.state.goal - this.state.moneySaved > 0){
            this.setState({
                progress: 'You have ' + '$' + (this.state.goal - this.state.moneySaved) + ' left to save'
            })
        }
        
        if (this.state.progress <= 0) {
            this.setState({
                progress: 'Congrats on reaching your goal!',
                inspiration: ' ',
            })
        }
        
        if (this.state.moneySaved/this.state.goal > 0.5) {
            this.setState({
                inspiration: 'Your over halfway there, keep going! ',
            })
        }
        
        if (this.state.moneySaved/this.state.goal < 0.5) {
            this.setState({
                inspiration: 'Your almost halfway, keep going! ',
            })
        }
        
    
        

        
        
    
    }

    _handleTextChange = inputValue => {
        this.setState({ inputValue });
    };

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.titleBox}>
                    
                    <Text style={styles.titleText}>
                        Savings Tracker
                    </Text>
                </View>
                <View style={styles.titleBox}>
                
                    <View style={styles.rows}>
                        
                        <Text style={styles.text}>
                            Savings Goal: 
                        </Text>
                        
                      
                        <TextInput style={styles.numberBox}
                            multiline = {true}
                            onChangeText={(goal) => this.setState({goal})}
                            value={this.state.goal}
                        />
                        
                        
                    </View>
                    
                    <View style={styles.rows}>
                        <Text style={styles.text}>
                            Money Saved: 
                        </Text>
                        
                      
                        <TextInput style={styles.numberBox}
                            multiline = {true}
                            onChangeText={(moneySaved) => this.setState({moneySaved})}
                            value={this.state.moneySaved}
                        />
                    </View>
                </View>
                <View style={styles.calcBox}>
                    
                    <TouchableHighlight
                        style={styles.button}
                        onPress = {this.savingsProgress}
                    >
                        <View style={styles.buttonView}>
                            <Text style={styles.buttonText}>
                                Calculate Progress
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.titleBox}>
                    
                    <Text style={styles.buttonText}>
                        Progress: {this.state.progress}
                    </Text>
                    
                    <Text style={styles.buttonText}>
                        {this.state.inspiration}
                    </Text>
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
    },
    
    titleBox: {
        height: 2*(deviceHeight/8),
        width: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
    },
    
    calcBox: {
        height: (deviceHeight/8),
        width: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
    },
    
    buttonView: {
        height: (deviceHeight/8),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
        marginTop: 1,
        borderColor: 'black',
        borderWidth: 2,
    },
    buttonText: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',

    },
    titleText: {
        color: 'black',
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    rows: {
        height: 1*(deviceHeight/8),
        width: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
        borderColor: 'black',
        borderWidth: 2,
        flexDirection: 'row',
    },
    text: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
    },
    numberBox: {
        height: (deviceHeight/8),
        width: deviceWidth/2,
        justiyfContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
        borderColor: 'black',
        borderWidth: 2,
        fontSize: 20,
        textAlign: 'center',
    },
    
    
});