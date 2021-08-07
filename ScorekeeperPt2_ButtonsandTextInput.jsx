import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, TextInput } from 'react-native';
import Constants from 'expo-constants';



export default class App extends Component {
    state = {
        t1: 'Team 1',
        t2: 'Team 2',
    };
    
    render() {
        return (
            <View style={styles.container}>
            
                <View style = {styles.titleContainer}>
                    <Text style = {styles.title}>
                        Basketball Scorekeeper
                    </Text>
                </View>
                
                <View style = {styles.middle}>
                    <View style = {styles.rows}>
                    <TouchableHighlight
                    onPress={() => {
                        alert('Add +3 to ' + this.state.t1)
                    }}
                    >
                        <View style = {styles.boxes}>
                            <Text style = {styles.text}>
                                {this.state.t1} +3pts
                            </Text>
                        </View>
                    </TouchableHighlight>
                    
                    <TouchableHighlight
                    onPress={() => {
                        alert('Add +3 to ' + this.state.t2)
                    }}
                    >
                        <View style = {styles.boxes}>
                            <Text style = {styles.text}>
                                {this.state.t2} +3pts
                            </Text>
                        </View>
                    </TouchableHighlight>
                    </View>

                    
                    <View style = {styles.rows}>
                        <TouchableHighlight
                        onPress={() => {
                            alert('Add +2 to ' + this.state.t1)
                        }}
                        >
                        
                        <View style = {styles.boxes}>
                            <Text style = {styles.text}>
                                {this.state.t1} +2pts 
                            </Text>
                        </View>
                        </TouchableHighlight>
                        
                        <TouchableHighlight
                        onPress={() => {
                            alert('Add +2 to ' + this.state.t2)
                        }}
                        >
                        <View style = {styles.boxes}>
                            <Text style = {styles.text}>
                            {this.state.t2} +2pts
                            </Text>
                        </View>
                        </TouchableHighlight>
                    </View>
                    
                    <View style = {styles.rows}>
                        <TouchableHighlight
                        onPress={() => {
                            alert('Add +1 to ' + this.state.t1)
                        }}
                        >
                        <View style = {styles.boxes}>
                            <Text style = {styles.text}>
                                {this.state.t1} +1pt
                            </Text>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                        onPress={() => {
                            alert('Add +1 to ' + this.state.t2)
                        }}
                        >
                        <View style = {styles.boxes}>
                            <Text style = {styles.text}>
                                {this.state.t2} +1pt
                            </Text>
                        </View>
                        </TouchableHighlight>
                    </View>
                    
                    <View style = {styles.bottom}> 
                        <View style = {styles.rows2}>
                            <TextInput style={styles.bt}
                                multiline = {true}
                                onChangeText={(t1) => this.setState({t1})}
                                value={this.state.t1}
                                style={styles.bottom}
                            />
                            
                            <View style={styles.scoreBoard}>
                                <Text style={styles.bt}>
                                    0
                                </Text>
                            </View>
                        </View>
                            
                        <View style = {styles.rows2}>
                            <TextInput style={styles.bt}
                                multiline = {true}
                                onChangeText={(t2) => this.setState({t2})}
                                value={this.state.t2}
                                style={styles.bottom}
                            />
                            
                            <View style={styles.scoreBoard}>
                                <Text style={styles.bt}>
                                    0
                                </Text>
                            </View>
                        </View>
                        
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
    },
    
    titleContainer: {
        backgroundColor: 'green',
        height: 50,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 40,
    },
    
    title: {
        color: 'white',
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    
    middle: {
        backgroundColor: 'green',
        height: 220,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 20,
    },
    
    rows:{
        flexDirection: 'row',
        height: 70, 
        width: 220,
    },
    
    boxes: {
        borderColor: 'white',
        borderWidth: 1,
        height: 50,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 5,
    },
    
    text: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
    },

    bottom: {
        flexDirection: 'column',
        height: 70,
        width: 200,
        margin: 5,
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white',
    },
    
    bt: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },
    
    rows2: {
      flexDirection: 'rows',
      height: 35,
      width: 200,
      fontSize: 20,
      textAlign: 'center',
      justifyContent: 'center',
      color: 'white',
      
    },
    scoreBoard: {
        height: 35,
        width: 50,
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white',
    }
    
});