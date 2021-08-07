import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state = {
        usd: '0',
        homeDisplay: 'block',
        pesoDisplay: 'none',
        rupeeDisplay: 'none',
        euroDisplay: 'none',
        yenDisplay: 'none',
        total: '0',
    };

    _handleTextChange = inputValue => {
        this.setState({ inputValue });
    };

    handleHomePress = () => this.setState(state => ({
        homeDisplay: 'block',
        pesoDisplay: 'none',
        rupeeDisplay: 'none',
        euroDisplay: 'none',
        yenDisplay: 'none',
    }));
    
    handlePesoPress = () => this.setState(state => ({
        homeDisplay: 'none',
        pesoDisplay: 'block',
        rupeeDisplay: 'none',
        euroDisplay: 'none',
        yenDisplay: 'none',
    }));
    
    handleRupeePress = () => this.setState(state => ({
        homeDisplay: 'none',
        pesoDisplay: 'none',
        rupeeDisplay: 'block',
        euroDisplay: 'none',
        yenDisplay: 'none',
    }));
    
    handleEuroPress = () => this.setState(state => ({
        homeDisplay: 'none',
        pesoDisplay: 'none',
        rupeeDisplay: 'none',
        euroDisplay: 'block',
        yenDisplay: 'none',
    }));
    
    handleYenPress = () => this.setState(state => ({
        homeDisplay: 'none',
        pesoDisplay: 'none',
        rupeeDisplay: 'none',
        euroDisplay: 'none',
        yenDisplay: 'block',
    }));
    
    
    render() {
        return (
            <View style={styles.container}>
                <View style={{ display: this.state.homeDisplay }}>
                    <View style = {styles.titleBox}>
                        <Text style={styles.titleText}>
                            Currency Converter
                        </Text>
                    </View>
                    
                    <View style={styles.middleBox}>
                        <Text style={styles.text}>
                            Input USD Value:
                        </Text>
                        <View style={styles.textInputBox}>
                            <TextInput style={styles.text}
                                multiline = {true}
                                onChangeText={(usd) => this.setState({usd})}
                                value={this.state.usd}
                            />
                        </View>
                        
                        <View style={styles.rows}>
                            <TouchableHighlight
                                onPress={this.handlePesoPress}
                            >
                                <View style = {styles.button}>
                                    <Text style = {styles.text}>
                                        Mexican Peso
                                    </Text>
                                </View>
                            </TouchableHighlight>
    
                            <TouchableHighlight
                                onPress={this.handleRupeePress}
                            >
                                <View style = {styles.button}>
                                    <Text style = {styles.text}>
                                        Indian Rupee
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            
                        </View>
                        
                        
                        <View style={styles.rows}>
                        
                            <TouchableHighlight
                                onPress={this.handleEuroPress}
                            >
                                <View style = {styles.button}>
                                    <Text style = {styles.text}>
                                        Euro
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            
                            <TouchableHighlight
                                onPress={this.handleYenPress}
                            >
                                <View style = {styles.button}>
                                    <Text style = {styles.text}>
                                        Japanese Yen
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                       
                        
                    </View>
                </View>
                
                <View style={{ display: this.state.pesoDisplay }}>
                    
                    <Text style={styles.text}>
                        Converted Value
                    </Text>
                    
                    <View style={styles.amount}>
                        
                        <Text style={styles.text}>
                            {this.state.amount}
                        </Text>
                    </View>
                    
                    <Text style={styles.text}>
                        Pesos
                    </Text>
                    
                    <TouchableHighlight
                        onPress={this.handleHomePress}
                    >
                        <View style = {styles.button}>
                            <Text style = {styles.text}>
                                Back
                            </Text>
                        </View>
                    </TouchableHighlight>
                    
                    
                    
                    
                </View>
                
                <View style={{ display: this.state.rupeeDisplay }}>
                    <Text style={styles.text}>
                        Converted Value
                    </Text>
                    
                    <View style={styles.amount}>
                        
                        <Text style={styles.text}>
                            {this.state.amount}
                        </Text>
                    </View>
                    
                    <Text style={styles.text}>
                        Rupee
                    </Text>
                    
                    <TouchableHighlight
                        onPress={this.handleHomePress}
                    >
                        <View style = {styles.button}>
                            <Text style = {styles.text}>
                                Back
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                
                <View style={{ display: this.state.euroDisplay }}>
                    <Text style={styles.text}>
                        Converted Value
                    </Text>
                    
                    <View style={styles.amount}>
                        
                        <Text style={styles.text}>
                            {this.state.amount}
                        </Text>
                    </View>
                    
                    <Text style={styles.text}>
                        Euro
                    </Text>
                    
                    <TouchableHighlight
                        onPress={this.handleHomePress}
                    >
                        <View style = {styles.button}>
                            <Text style = {styles.text}>
                                Back
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                
                <View style={{ display: this.state.yenDisplay }}>
                    <Text style={styles.text}>
                        Converted Value
                    </Text>
                    
                    <View style={styles.amount}>
                        
                        <Text style={styles.text}>
                            {this.state.amount}
                        </Text>
                    </View>
                    
                    <Text style={styles.text}>
                        Yen
                    </Text>
                    
                    <TouchableHighlight
                        onPress={this.handleHomePress}
                    >
                        <View style = {styles.button}>
                            <Text style = {styles.text}>
                                Back
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
        backgroundColor: 'green',
        alignItems: 'center',
    },
    
    titleBox: {
        height: deviceHeight/4,
        width: deviceWidth,
        backgroundColor: 'green',
        borderBottomWidth: deviceHeight/40,
        borderColor: 'red',
    },
    
    titleText: {
        color: 'gold',
        fontSize: deviceHeight/10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    
    middleBox: {
        backgroundColor: 'green',
        height: deviceHeight/2,
        width: deviceWidth,
        marginTop: deviceHeight/30,
        marginBottom: deviceHeight/30,
        alignItems: 'center',
    },
    
    text: {
        color: 'gold',
        fontSize: deviceHeight/20,
        textAlign: 'center',
    },
    
    textInputBox: {
        height: deviceHeight/9,
        width: deviceWidth/1.5,
        borderColor: 'red',
        borderWidth: deviceHeight/60,
        marginTop: deviceHeight/30,
        marginBottom: deviceHeight/30,
    },
    
    rows: {
        height: deviceHeight/6,
        width: deviceWidth,
        alignItems: 'center',
        backgroundColor: 'green',
        margin: deviceHeight/40,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    
    button: {
        height: deviceHeight/6,
        width: deviceWidth/2.5,
        borderColor: 'red',
        borderWidth: deviceHeight/100,
        margin: deviceHeight/40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    amount: {
        height: deviceHeight/9,
        width: deviceWidth/1.5,
        borderColor: 'red',
        borderWidth: deviceHeight/60,
        marginTop: deviceHeight/30,
        marginBottom: deviceHeight/30,
    }


});