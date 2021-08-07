import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state = {
        t1: 'Team 1',
        t2: 'Team 2',
    };
    
    render() {
        return (
            <View style={styles.container}>
            
                <View style = {styles.titleContainer}>
                    
                    <Image
                        source={{ uri: 'https://codehs.com/uploads/b0b715987f820bb195f62b5f0fff24aa' }}
                        style={{ height: 60, width: 60 }}
                    />
                    
                    <Text style = {styles.title}>
                        Basketball Scorekeeper
                    </Text>
                    
                    
                    <Image
                        source={{ uri: 'https://codehs.com/uploads/f9bf74d7992d890cc38d9fb938aa5c90' }}
                        style={{ height: 60, width: 60 }}
                    />
                    
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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        height: deviceHeight,
        width: deviceWidth,
    },
    
    titleContainer: {
        backgroundColor: 'green',
        height: (deviceHeight/5),
        width: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 40,
        flexDirection: 'row',
    },
    
    title: {
        color: 'white',
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    
    middle: {
        backgroundColor: 'green',
        height: 3*(deviceHeight/5),
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 20,
    },
    
    rows:{
        flexDirection: 'row',
        height: 1*(deviceHeight/7), 
        width: (deviceWidth),
    },
    
    boxes: {
        borderColor: 'white',
        borderWidth: 1,
        height: 1*(deviceHeight/10),
        width: deviceWidth/2,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 5,
    },
    
    text: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },

    bottom: {
        flexDirection: 'column',
        height: (deviceHeight/5),
        width: deviceWidth/2,
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
      height: 1*(deviceHeight/10),
      width: deviceWidth/2,
      fontSize: 20,
      textAlign: 'center',
      justifyContent: 'center',
      color: 'white',
      
    },
    scoreBoard: {
        height: 1.01*(deviceHeight/16),
        width: deviceWidth/5,
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white',
    }
    
});