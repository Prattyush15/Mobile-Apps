import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Dimensions, TouchableHighlight, TextInput } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state = {
        amount: '20.00',
        mainScreenDisplay: 'block',
        otherScreenDisplay: 'none',
        total: '20.00',
        display: 'Hello',
    };
    
        
    
    
    handlemainScreenPress = () => this.setState(state => ({
        mainScreenDisplay: 'block',
        otherScreenDisplay: 'none',
    }));
    
    handleotherScreenPress = () => this.setState(state => ({
        mainScreenDisplay: 'none',
        otherScreenDisplay: 'block',
    }));

    _handleTextChange = amount => {
        this.setState({ amount });
    };
    
    transferFunds = () => {
            if (this.state.amount - 0.25 <= this.state.total){
                this.setState({
                    total: (this.state.total - this.state.amount - 0.25),
                    display: 'Funds successfully transferred',
                    mainScreenDisplay: 'none',
                    otherScreenDisplay: 'block',
                    
                    
                })
            }else{
                this.setState({
                    display: 'You do not have enough funds to transfer',
                    mainScreenDisplay: 'none',
                    otherScreenDisplay: 'block',
                })
            }
           
        }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ display: this.state.mainScreenDisplay }}>
                    <View style = {styles.blue}>
                        <Text style = {styles.topText}>
                            Transfer Balance
                        </Text>
                    </View>
                    <View style = {styles.middleBox}>
                        <Text style = {styles.middleText1}>
                            Amount
                        </Text>
                        
                            <TextInput style={styles.middleText2}
                                multiline = {true}
                                onChangeText={(amount) => this.setState({amount})}
                                value={this.state.amount}
                            />

                        <Text style = {styles.middleText3}>
                            Your Venmo Balance Is ${this.state.total}
                        </Text>
                    </View>
                    <View style = {styles.debitCard}>
                        <Text style = {styles.debitText}>
                            Debit Card                $0.25 Fee >
                        </Text>
    
                    </View>
                    <View style = {styles.space}>
                    </View>
                    
                    
                    <TouchableHighlight style={styles.next}
                        onPress={this.transferFunds}
                    >
                        <Text style={styles.topText}>
                            Next
                        </Text>
                    </TouchableHighlight>
    
                    <View style = {styles.space}>
                        
                    </View>
                </View>
                
                <View style={{ display: this.state.otherScreenDisplay }}>
                    <View style = {styles.blue}>
                        <Text style = {styles.topText}>
                            Transfer Balance
                        </Text>
                    </View>
                    <View style = {styles.middleBox}>
                        <Text style = {styles.middleText1}>
                            {this.state.display}
                        </Text>
                        
                            <TextInput style={styles.middleText2}
                                multiline = {true}
                                onChangeText={(amount) => this.setState({amount})}
                                value={this.state.amount}
                            />

                        <Text style = {styles.middleText3}>
                            Your Venmo balance is {this.state.total}
                        </Text>
                    </View>
                    
                    
                    <View style = {styles.space}>
                    </View>
                    
                    
                    <TouchableHighlight style={styles.next}
                    onPress={this.handlemainScreenPress}
                    >
                        <Text style={styles.topText}>
                            Go Back
                        </Text>
                    </TouchableHighlight>
    
                    <View style = {styles.space}>
                        
                    </View>
                
                
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
        width: deviceWidth,
        alignItems:'center',
        justifyContent: 'center',
    },
    
    middleBox: {
        backgroundColor: 'white',
        height: 260,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    debitCard: {
        borderColor: 'gray',
        borderWidth: 1,
        height: 30,
        width: deviceWidth,
        alignItems:'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    space: {
        backgroundColor: 'white',
        height: 10,
        width: deviceWidth,
    },
    next: {
        backgroundColor: '#0099cc',
        height: 40, 
        width: deviceWidth,
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