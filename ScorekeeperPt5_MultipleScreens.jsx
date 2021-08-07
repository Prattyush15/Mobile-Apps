import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state = {
        t1: 'Team 1',
        t2: 'Team 2',
        score1: '0',
        score2: '0',   
        teamPageDisplay: 'block',
        scoringPageDisplay: 'none',
    }
    
    handleTeamPagePress = () => this.setState(state => ({
        teamPageDisplay: 'block',
        scoringPageDisplay: 'none',
    }));
   
    handleScoringPagePress = () => this.setState(state => ({
        teamPageDisplay: 'none',
        scoringPageDisplay: 'block',
    }));
    
    t13pt = () => {
        this.setState ({
            score1: Number(this.state.score1) + 3,
        })
    };
    
    t12pt = () => {
        this.setState ({
            score1: Number(this.state.score1) + 2,
        })
    };
    
    t11pt = () => {
        this.setState ({
            score1: Number(this.state.score1) + 1,
        })
    };
    
    t23pt = () => {
        this.setState ({
            score2: Number(this.state.score2) + 3,
        })
    };
    
    t22pt = () => {
        this.setState ({
            score2: Number(this.state.score2) + 2,
        })
    };
    
    t21pt = () => {
        this.setState ({
            score2: Number(this.state.score2) + 1,
        })
    };
    
    
    
    render() {
        return (
            <View style={styles.container}>
                <View style={{ display: this.state.teamPageDisplay }}>
                    
                    
                    
                    
                    <View style={styles.contentContainer}>
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
                        
                        <Text style={styles.title}>
                            Change Team Names
                        </Text>
                        
                        <View style={styles.teamContainer}>
                        
                            <TextInput style={styles.bt}
                                multiline = {true}
                                onChangeText={(t1) => this.setState({t1})}
                                value={this.state.t1}
                                style={styles.title}
                            />
                        </View>
                        <View style={styles.teamContainer}>
                        
                            <TextInput style={styles.bt}
                                multiline = {true}
                                onChangeText={(t2) => this.setState({t2})}
                                value={this.state.t2}
                                style={styles.title}
                            />
                        </View>
                        
                    
                    </View>
                    
                        
                </View>
                <View style={{ display: this.state.scoringPageDisplay }}>
                    
                    <View style={styles.contentContainer}>
                        <View style = {styles.rows}>
                        <TouchableHighlight
                            onPress = {this.t13pt}
                        >
                            <View style = {styles.boxes}>
                                <Text style = {styles.text}>
                                    {this.state.t1} +3pts
                                </Text>
                            </View>
                        </TouchableHighlight>
                        
                        <TouchableHighlight
                            onPress = {this.t23pt}
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
                            onPress = {this.t12pt}

                        >
                        
                        <View style = {styles.boxes}>
                            <Text style = {styles.text}>
                                {this.state.t1} +2pts 
                            </Text>
                        </View>
                        </TouchableHighlight>
                        
                        <TouchableHighlight
                            onPress = {this.t22pt}

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
                                onPress = {this.t11pt}
    
                            >
                            <View style = {styles.boxes}>
                                <Text style = {styles.text}>
                                    {this.state.t1} +1pt
                                </Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress = {this.t21pt}
    
                            >
                            <View style = {styles.boxes}>
                                <Text style = {styles.text}>
                                    {this.state.t2} +1pt
                                </Text>
                            </View>
                            </TouchableHighlight>
                        </View>
                        
                        <Text style={styles.title}>
                            Scoreboard:
                        </Text>
                        
                        <View style = {styles.rows2}>
                            
                            <Text style={styles.bottom}>
                                {this.state.t1}
                            </Text>
                            
                            <View style={styles.scoreBoard}>
                                <Text style={styles.bt}>
                                    {this.state.score1}
                                </Text>
                            </View>
                        </View>
                            
                        <View style = {styles.rows2}>
                            
                            <Text style={styles.bottom}>
                                {this.state.t2}
                            </Text>
                            
                            <View style={styles.scoreBoard}>
                                <Text style={styles.bt}>
                                    {this.state.score2}
                                </Text>
                            </View>
                        </View>
                        
                        
                        

                    </View>
                       
                </View>
                
                <View style={styles.navbarContainer}>
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handleTeamPagePress}
                    >
                        <Text style={styles.navButtonText}>
                            Teams
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handleScoringPagePress}
                    >
                        <Text style={styles.navButtonText}>
                            Scoring
                        </Text>
                    </TouchableHighlight>
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
    
    contentContainer: {
        height: 5*(deviceHeight/6),
        width: deviceWidth*1.15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
    },
    
    teamContainer: {
        heigth: (deviceHeight/10),
        width: deviceWidth*1.15,
        alignItems: 'center',
        backgroundColor: 'green',
        borderWidth: 1,
        borderColor: 'white',
    },
    
    titleContainer: {
        backgroundColor: 'green',
        height: (deviceHeight/10),
        width: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 40,
        flexDirection: 'row',
    },
    navbarContainer: {
        height: deviceHeight/6,
        width: deviceWidth,
        backgroundColor: 'gold',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 10,
        borderColor: 'white',
    },
    navButton: {
        height: deviceHeight/14,
        width: deviceWidth/4,
        backgroundColor: 'white',
        borderColor: 'lightgreen',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    navButtonText: {
        fontSize: deviceHeight/40,
        textAlign: 'center',
        color: 'black',
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