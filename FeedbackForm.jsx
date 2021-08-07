import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, TextInput } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    state = {
        inputValue: '',
        date: 'mm/dd/yyyy',
    };

    _handleTextChange = inputValue => {
        this.setState({ inputValue });
    };

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.titleBox}>
                
                    <Text style={styles.title}>
                        Feedback Form
                    </Text>
                </View>
                
                <View style={styles.middleBox}>
                
                    <View style={styles.entryBox}>
                        
                        <View style={styles.entryRow}>
                        
                            <View style={styles.nameBox}>
                                <Text style={styles.text}>
                                    Name: 
                                </Text>
                            </View>
                            
                            <View style={styles.otherBox}>
                            
                                <Text style={styles.text}>
                                
                                </Text>
                                
                                <TextInput style={styles.nameInput}
                                    multiline = {true}
                                    onChangeText={(name) => this.setState({name})}
                                    value={this.state.name}
                                    style={{ width: 100, height: 40, padding: 8 }}

                                />
                                
                                
                            
                            </View>
                            
                        </View>
                        
                        <View style={styles.entryRow}>
                            <View style={styles.nameBox}>
                            
                                <Text style={styles.text}>
                                    Date: 
                                </Text>
                            </View>
                            
                            <View style={styles.otherBox}>
                                <TextInput style={styles.dateInput}
                                    multiline = {true}
                                    onChangeText={(date) => this.setState({date})}
                                    value={this.state.date}
                                    style={{ width: 100, height: 40, padding: 8 }}
                                />
                                
                            </View>
                        </View>
                    </View>
                    
                    
                    <View style={styles.feedbackBox}>
                        
                        <Text style={styles.submitText}>
                            Feedback
                        </Text>
                        
                        
                        <View style={styles.feedback}>
                            
                            <Text style={styles.text}>
                            
                            </Text>
 
                            <TextInput style={styles.feedbackInput}
                                    multiline = {true}
                                    onChangeText={(feedback) => this.setState({feedback})}
                                    value={this.state.feedback}
                                    style={{ width: 210, height: 110, padding: 8 }}
                            />
 
                        </View>
                    </View>
                </View>
                
                
                <View style={styles.bottomBox}>
                    
                    <View style={styles.submitBox}>
                        
                        <Text style={styles.submitText}>
                            Submit
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    titleBox: { 
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'green',
      height: 100,
      width: 225,
      borderWidth: 1,
      borderColor: 'black',
    },
    
    title: {
        color: 'gold',
        fontWeight: 'bold',
        fontSize: 30,
    },
    
    middleBox: {
        height: 250,
        width: 225,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    entryBox: {
      height: 100,
      width: 210,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5,
    },
    
    entryRow: {
        height: 40,
        width: 210,
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    
    nameBox: {
        height: 40,
        width: 100,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    
    otherBox: {
        height: 40,
        width: 100,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
    },
    
    feedbackBox: {
        height: 125,
        width: 210,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    
    feedback: {
        height: 100,
        width: 210,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        margin: 10,
    },
    
    bottomBox: {
        height: 50,
        width: 225,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: 'white'
    },
    
    submitBox: {
        height: 50,
        width: 75,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        
    },
    
    submitText: {
        color: 'gold',
        fontSize: 20,
    },
    
    text: {
        color: 'black',
        fontSize: 15,
    },
    


});