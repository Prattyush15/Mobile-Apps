import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, TextInput } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    state = {
        amount: '$20.00',
    };

    _handleTextChange = amount => {
        this.setState({ amount });
    };

    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.blue}>
                    <Text style = {styles.topText}>
                        Transfer Balance
                    </Text>
                </View>
                <View style = {styles.middleBox}>
                    <Text style = {styles.middleText1}>
                        Amount
                    </Text>
                    
                        <Text style = {styles.middleText2}>
                            <TextInput style={styles.amountInput}
                                multiline = {true}
                                onChangeText={(amount) => this.setState({amount})}
                                value={this.state.amount}
                                style={{ width: 100, height: 50, padding: 8 }}
                            />
                        </Text>
                    
                    <Text style = {styles.middleText3}>
                        Your Venmo balance is $20.00
                    </Text>
                </View>
                <View style = {styles.debitCard}>
                    <Text style = {styles.debitText}>
                        Debit Card                $0.25 Fee >
                    </Text>

                </View>
                <View style = {styles.space}>
                </View>
                
                
                <TouchableHighlight
                    onPress={() => {
                        alert('You have successfully trasnferred ' + this.state.amount  + '.')
                    }}
                >
                
                <View style = {styles.next}>
                    <Text style = {styles.topText}>
                        Next
                    </Text>
                    
                </View>
                
                </TouchableHighlight>

                <View style = {styles.space}>
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    blue: {
        backgroundColor: '#0099cc',
        height: 40,
        width: 225,
        alignItems:'center',
        justifyContent: 'center',
    },
    
    middleBox: {
        backgroundColor: 'white',
        height: 260,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    debitCard: {
        borderColor: 'gray',
        borderWidth: 1,
        height: 40,
        width: 200,
        alignItems:'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    space: {
        backgroundColor: 'white',
        height: 10,
        width: 200,
    },
    next: {
        backgroundColor: '#0099cc',
        height: 40, 
        width: 200,
        alignItems:'center',
        justifyContent: 'center',
    },
    
    topText: {
        color: 'white',
        fontSize: '15',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    
    middleText1: {
        color: 'black',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    
    middleText2: {
        color: 'black',
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    
    middleText3: {
        color: 'black',
        fontSize: 13,
        textAlign: 'center',
    },
    
    debitText: {
        color: 'black',
        fontSize: 13,
        txtAlign: 'center',
    },
    
    
});