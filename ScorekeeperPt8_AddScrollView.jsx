import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, ScrollView, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state = {
        t1: 'Warriors',
        t2: 'Team 2',
        score1: '0',
        score2: '0',   

        record1: [0,0,0],
        record2: [0,0,0],
        
        gameRecord: [],
        date: 'mm/dd/yy',

        teamPageDisplay: 'block',
        scoringPageDisplay: 'none',
        standingsPageDisplay: 'none',
        rosterPageDisplay: 'none',
        
        players: [
            {
                image: 'https://codehs.com/uploads/fe17731b5241d983fbecad3208f744e8',
                name: 'Stephen Curry',
                pts: 'PPG: 29',
                assist: 'APG: 6.2',
                rebounds: 'REB: 5.3',
                steals: 'STL: 1.4',
                turnOvers: 'TO: 3.1',
                fouls: 'PF: 1.8',
                block: 'BLK: 0.1',
                ftp: 'FT%: 88.9',
                fg: 'FG%: 45.7',
                threep: '3P%: 35.9',
                min: 'MIN: 31.4',                
            },
            
            {
                image: 'https://codehs.com/uploads/532b5a52a9183953f70b40ad7dfa3836',
                name: 'Andrew Wiggins',
                pts: 'PPG: 17.8',
                assist: 'APG: 2.1',
                rebounds: 'REB: 4.7',
                steals: 'STL: 1.6',
                turnOvers: 'TO: 1.9',
                fouls: 'PF: 2.1',
                block: 'BLK: 0.2',
                ftp: 'FT%: 69.5',
                fg: 'FG%: 47.0',
                threep: '3P%: 37.9',
                min: 'MIN: 32.2',      
            },
            
            {
                image: 'https://codehs.com/uploads/3c93787ebbd5870074bd7a928e654cec',
                name: 'Kelly Oubre Jr.',
                pts: 'PPG: 14.9',
                assist: 'APG: 1.3',
                rebounds: 'REB: 5.8',
                steals: 'STL: 1.1',
                turnOvers: 'TO: 1.3',
                fouls: 'PF: 2.2',
                block: 'BLK: 0.8',
                ftp: 'FT%: 70.5',
                fg: 'FG%: 43.4',
                threep: '3P%: 30.2',
                min: 'MIN: 30   .4',      
            },
            
            {
                image: 'https://codehs.com/uploads/7a275e0e2bf321b5b841c80024190ec0',
                name: 'Draymond Green',
                pts: 'PPG: 6.1',
                assist: 'APG: 8.5',
                rebounds: 'REB: 6.5',
                steals: 'STL: 1.4',
                turnOvers: 'TO: 2.8',
                fouls: 'PF: 3.1',
                block: 'BLK: 0.8',
                ftp: 'FT%: 76.5',
                fg: 'FG%: 40.1',
                threep: '3P%: 43.4',
                min: 'MIN: 29.9',      
            },
            
            {
                image: 'https://codehs.com/uploads/1b3353ddf47c6d1cdba889bf78ffd4f5',
                name: 'Kevon Looney',
                pts: 'PPG: 4.0',
                assist: 'APG: 1.6',
                rebounds: 'REB: 4.1',
                steals: 'STL: 0.4',
                turnOvers: 'TO: 0.7',
                fouls: 'PF: 2.0',
                block: 'BLK: 0.3',
                ftp: 'FT%: 80.0',
                fg: 'FG%: 59.8',
                threep: '3P%: 44.4',
                min: 'MIN: 15.0',      
            },
            
            
        
        
        
        
        ]

    }
    
    handleTeamPagePress = () => this.setState(state => ({
        teamPageDisplay: 'block',
        scoringPageDisplay: 'none',
        standingsPageDisplay: 'none',
        rosterPageDisplay: 'none',
    }));
   
    handleScoringPagePress = () => this.setState(state => ({
        teamPageDisplay: 'none',
        scoringPageDisplay: 'block',
        standingsPageDisplay: 'none',
        rosterPageDisplay: 'none',
    }));
    
    handleStandingsPagePress = () => this.setState(state => ({
        teamPageDisplay: 'none',
        scoringPageDisplay: 'none',
        standingsPageDisplay: 'block',
        rosterPageDisplay: 'none',
    }));
    
    handleRosterPagePress = () => this.setState(state => ({
        teamPageDisplay: 'none',
        scoringPageDisplay: 'none',
        standingsPageDisplay: 'none',
        rosterPageDisplay: 'block',
    }));
    
    handleTextChange = teamOne => {
        this.setState({ teamOne });
    };
   
    textChange = teamTwo => {
        this.setState({ teamTwo });
    };
   
    dateChange = date => {
        this.setState({ date });
    };
    
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
    
    submitScore = () => {
            if (this.state.score1 > this.state.score2){
                this.setState({
                    score1: '0',
                    score2: '0',
                    record1:  [this.state.record1[0] + 1, this.state.record1[1], this.state.record1[2]],
                    record2: [this.state.record2[0], this.state.record2[1] + 1, this.state.record2[2]],
                    date: 'mm/dd/yy',
                })
            } else if(this.state.score1 < this.state.score2){
                this.setState({
                    score1: '0',
                    score2: '0',
                    record2: [this.state.record2[0] + 1, this.state.record2[1], this.state.record2[2]],
                    record1: [this.state.record1[0], this.state.record1[1] + 1, this.state.record1[2]],
                    date: 'mm/dd/yy',
                })
            }else if(this.state.score1 == this.state.score2){
                this.setState({
                    score1: '0',
                    score2: '0',
                    record1: [this.state.record1[0], this.state.record1[1], this.state.record1[2] + 1],
                    record2: [this.state.record2[0], this.state.record2[1], this.state.record2[2] + 1],
                    date: 'mm/dd/yy',
                })
            }
            
            this.state.gameRecord.push({
                date: this.state.date,
                team1FinalScore: this.state.score1,
                team2FinalScore: this.state.score2,
            })

           
        }

    
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
                                Warriors Scorekeeper
                            </Text>
                            
                            
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/f9bf74d7992d890cc38d9fb938aa5c90' }}
                                style={{ height: 60, width: 60 }}
                            />
                                
                        </View>
                        
                        <Text style={styles.title}>
                            Change Team Name
                        </Text>
                        
                        <View style={styles.teamContainer}>
                        
                            
                            <Text style={styles.title}>
                                Warriors
                            </Text>
                        

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
                        
                        <View style={styles.rows}>
                            
                            <View style={styles.textBox}>
                                <TextInput style={styles.bt}
                                    multiline = {true}
                                    onChangeText={(date) => this.setState({date})}
                                    value={this.state.date}
                                    style={styles.text3}
                                />
                            </View>
                        
                            
                            
                            <TouchableHighlight style={styles.navButton}
                                onPress={this.submitScore}
                            >
                                <Text style={styles.navButtonText}>
                                    Submit Score
                                </Text>
                            </TouchableHighlight>
                            
                        </View>
                        

                    </View>
                       
                </View>

                
                <View style={{ display: this.state.standingsPageDisplay }}>
                    
                     <Text style={styles.title}>
                        {this.state.t1} Record
                    </Text>
                    
                    

                    <View style={styles.recordRow}>
                        
                        <Text style={styles.text2}>
                            {this.state.record1[0]}-{this.state.record1[1]}-{this.state.record1[2]}
                        </Text>
                       
                        
                        
                      
                        
                    </View>
                    
                    <Text style={styles.title}>
                        {this.state.t2} Record
                    </Text>
                    
                    <View style={styles.recordRow}>
                    
                        <Text style={styles.text2}>
                            {this.state.record2[0]}-{this.state.record2[1]}-{this.state.record2[2]}
                        </Text>
                    </View>
                    
                    
                     <View style={styles.recordBox}>
                        {this.state.gameRecord.map((game) => (
                            <View style={styles.recordLine}>
                                <View style={styles.dateContainer}>
                                    <Text style={styles.whiteText}>
                                        {game.date}
                                    </Text>
                                </View>
                                <View style={styles.teamDataContainer}>
                                    <Text style={styles.whiteText}>
                                        {game.team1FinalScore}
                                    </Text>
                                </View>
                                <View style={styles.teamDataContainer}>
                                    <Text style={styles.whiteText}>
                                        {game.team2FinalScore}
                                    </Text>
                                </View>
                            </View>
                           
                        ))}
                    </View>
                    


                </View>
                
                <View style={{ display: this.state.rosterPageDisplay }}>
                    <ScrollView>
                    
                        <Text style={styles.title}>
                            Warriors Starting Lineup
                        </Text>
                    <View style={styles.rosterBox}>
                        {this.state.players.map((ppl) => (
                            <View style={styles.otherLine}>
                                <Image
                                source={ppl.image}
                                style={{ height: 2*(deviceHeight/8), width: deviceWidth/4 }}
                                ></Image>
                                
                                    <View style={styles.otherBox}>
                                        <ScrollView>
                                            <Text style={styles.otherText}>
                                                {ppl.name}
                                            </Text>
                                            
                                            <Text style={styles.otherText}>
                                                {ppl.pts}
                                            </Text>
                                            
                                            <Text style={styles.otherText}>
                                                {ppl.assists}
                                            </Text>
                                            
                                            <Text style={styles.otherText}>
                                                {ppl.rebound}
                                            </Text>
                                            
                                            <Text style={styles.otherText}>
                                                {ppl.steals}
                                            </Text>
                                            
                                            <Text style={styles.otherText}>
                                                {ppl.turnOvers}
                                            </Text>
                                            
                                            <Text style={styles.otherText}>
                                                {ppl.fouls}
                                            </Text>
                                            
                                            <Text style={styles.otherText}>
                                                {ppl.block}
                                            </Text>
                                            
                                            <Text style={styles.otherText}>
                                                {ppl.ftp}
                                            </Text>
                                            
                                            <Text style={styles.otherText}>
                                                {ppl.fg}
                                            </Text>
                                            
                                            <Text style={styles.otherText}>
                                                {ppl.threep}
                                            </Text>
                                            
                                            <Text style={styles.otherText}>
                                                {ppl.min}
                                            </Text>
                                        </ScrollView>
                                    </View>
                                
                                
                            </View>
                        ))}
                    </View>
                    </ScrollView>
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
                    
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handleStandingsPagePress}
                    >
                        <Text style={styles.navButtonText}>
                            Standings
                        </Text>
                    </TouchableHighlight>
                    
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handleRosterPagePress}
                    >
                        <Text style={styles.navButtonText}>
                            Starting Lineup
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
        height: (deviceHeight/10),
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
        width: deviceWidth/5,
        backgroundColor: 'white',
        borderColor: 'lightgreen',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
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
        alignItems: 'center',
        justifyContent: 'center',
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
    },
    records: {
      height: deviceHeight/2,
      width: (deviceWidth),
      backgroundColor: 'white',
      fontSize: 20,
      textAlign: 'center',
      justifyContent: 'center',
      color: 'black',
    },
    recordRow: {
        height: deviceHeight/8,
        width: (deviceWidth),
        backgroundColor: 'white',
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center',
        color: 'black',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 10,
    },
    
    text2: {
        color: 'black',
        fontSize: 40,
        fontWeight: 'bold',
    },
    
    textBox: {
        height: deviceHeight/8,
        width: deviceWidth/2,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'black',
        margins: 10,
        justifyContent: 'center',
    },
    text3: {
        color: 'black',
        fontSize: 20,
    },
    
    blackBox: {
        height: deviceHeight/4,
        width: deviceWidth,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 20,
        marginTop: 20,
        flexDirection: 'row',
    },
    
    arrayText: {
        color: 'black',
        fontSize: 20,
        texAlign: 'center',
    },
    
    sideContainer: {
        width: deviceWidth/4,
        height: deviceHeight/20,
        alignItems: 'space-between',
        justifyContent: 'flex-start',
        margin: 10,
        flexDirection: 'row',
    },
    
    containerRow: {
      height: deviceHeight/20,
      width: deviceWidth/1.02,
      backgroundColor: 'white',
      justifyContent: 'flex-start',
      borderRightWidth: 2,
      borderColor: 'black',
      flexDirection: 'row',
    },
    
     recordLine: {
        flexDirection: 'row',
        width: 3*(deviceWidth/5),
        height: deviceHeight/14,
        borderBottomWidth: 1,
        backgroundColor: 'black',
        borderColor: 'white',
    },
    recordBox: {
        width: (deviceWidth),
        height: deviceHeight/3,
        borderBottomWidth: 1,
        backgroundColor: 'black',
        marginBottom: 10,
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 3,
    },
    dateContainer: {
        width: deviceWidth/4,
        height: deviceHeight/14,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        color: 'white'
    },
    teamDataContainer: {
        width: deviceWidth/5,
        height: deviceHeight/14,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    },
    extraContainer: {
        height: 5*(deviceHeight/8),
        width: deviceWidth,
        flexDirection: 'column',
        alignItems: 'center',
    },
    
    rosterBox: {
      height: 6*(deviceHeight/8),
      width: deviceWidth,
      flexDirection: 'column',
      alignItems: 'center',
      
    },
    
    otherLine: {
        flexDirection: 'row',
        width: (deviceWidth),
        height: 2*(deviceHeight/8),
        borderBottomWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
    },
    
    otherBox: {
        flexDirection: 'column',
        wdith: 3*(deviceWidth/4),
        height: 2*(deviceHeight/8),
        borderColor: 'black',
        borderWidth: 2,
    },
    
    otherText: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        
    }
    
});