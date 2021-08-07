import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, Dimensions, TouchableHighlight, ScrollView } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;


export default class App extends Component {

    state = {
        classPage: 'block',
        selectionPage: 'none',
        classList: [],
        newName: '',
   
        pass: [
            {
                time: '11:00 AM',
                title: 'CHEST BUILD UP',
                duration: '60 min',
                location: 'Crunch Fitness',
                instructor: 'Hulk Hogan',
            },
            {
                time: '12:30 AM',
                title: 'YOGA',
                duration: '45 min',
                location: 'Planet Fitness',
                instructor: 'Kofi Kingston'
            },
            {
                time: '12:45 PM',
                title: 'Meditation',
                duration: '30 min',
                location: 'Lifetime Fitness',
                instructor: 'Batista',
            },
            
            {
                time: '1:00 PM',
                title: 'Obe Fitness',
                duration: '45 min',
                location: 'Prattyush Gym',
                instructor: 'Dwayne Johnson',
            },
            
            {
                time: '1:45 PM',
                title: 'Alo Moves',
                duration: '75 min',
                location: 'Om Industries',
                instructor: 'Stone Cold Steve Austin',
            },
            
            {
                time: '2:45 PM',
                title: 'P.Vole',
                duration: '90 min',
                location: 'Nischal Industries',
                instructor: 'Ric Flair',
            },
            
            {
                time: '3:00 PM',
                title: 'BBG',
                duration: '80 min',
                location: 'Big Muscle Bois',
                instructor: 'Andre the Giant',
            },
            
            {
                time: '4:00 PM',
                title: 'Core de Force',
                duration: '30 min',
                location: 'Lucha Amigos',
                instructor: 'Rey Mysterio',
            },
            
            {
                time: '5:00 PM',
                title: 'Insanity',
                duration: '60 min',
                location: 'Devils Paradise',
                instructor: 'The Undertaker',
            },

        ],
    };
        
    handleSignUp(name){
        this.state.classList.push({
            newName: name,
        })
    };
   
    changePage = () => this.setState(state => ({
        classPage: 'none',
        selectionPage: 'block',
    }));
           
    changePageBack = () => this.setState(state => ({
        classPage: 'block',
        selectionPage: 'none',
    }));

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ display: this.state.classPage }}>
                        <View style={styles.topBar}>
                            <Text style={styles.titleText}>
                                MONDAY, MARCH 15TH
                            </Text>
                        </View>
                        
                        
                       
                            {this.state.pass.map((clas) => (
                                <View style={styles.listContainer}>
                                    <View style={styles.sideContainer}>
                                        <Text style={styles.grayText}>
                                            {clas.time}
                                        </Text>
            
                                        <Text style={styles.grayText}>
                                            {clas.duration}
                                        </Text>
                                        
                                        <TouchableHighlight
                                            onPress={() => {this.handleSignUp(clas.title)}}
                                        >
                                    <View style = {styles.signUp}>
                                        <Text style = {styles.grayText}>
                                            Sign Up
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                                       
                                    </View>
                                    <View style={styles.middleContainer}>
                                        <Text style={styles.grayText}>
                                            {clas.title}
                                        </Text>
                                        <Text style={styles.blueText}>
                                            {clas.location}
                                        </Text>
                                        <Text style={styles.grayText}>
                                            {clas.instructor}
                                        </Text>
                                       
                                        
                                    </View>
                                </View>
                            ))}
                        <TouchableHighlight
                            onPress={this.changePage}
                        >
                            <View style={styles.buttonBig}>
                           
                                <Text style={styles.grayText}>
                                    View Your Scheduled Classes
                                </Text>
                            </View>
                   
                   
                        </TouchableHighlight>
                    </View>
                </ScrollView>
                
                <View style={{ display: this.state.selectionPage }}>
                    <View style={styles.topBar}>
                        <Text style={styles.titleText}>
                            SCHEDULED CLASSES
                        </Text>
                    </View>
                    
                     <View style={styles.whiteContainerRow}>
                            <ScrollView>
                                {this.state.classList.map((clas) => (
                                    <View style={styles.sideContainer2}>
                                        <Text style={styles.grayText}>
                                            {clas.newName}
                                        </Text>
                                    </View>
                                   
                                ))}
                                   
                            </ScrollView>
                        </View>
                        
                    
                    <TouchableHighlight
                        onPress={this.changePageBack}
                        >
                            <View style={styles.buttonBig}>
                           
                                <Text style={styles.greyText}>
                                    Schedule More Classes
                                </Text>
                            </View>
                        </TouchableHighlight>
                </View>
            </View>

        


            
        );
    }
}

const styles = StyleSheet.create ({
    container: {
       flex: 1,
    },
    topBar: {
        height: deviceHeight/10,
        width: deviceWidth,
        justifyContent: 'center',
        backgroundColor: '#1b1342',
        borderBottomWidth: 2,
        borderBottomColor: 'white',
    },
    listContainer: {
        flexDirection: 'row',
        width: deviceWidth,
        height: deviceHeight/5,
        borderBottomWidth: 2,
        borderBottomColor: 'darkblue',
        backgroundColor: 'white',
        alignItems: 'center',
       
    },
    sideContainer: {
        width: deviceWidth/3,
        height: deviceHeight/5,
        justifyContent: 'flex-start',
        marginLeft: 5,
    },
   
    middleContainer: {
        width: deviceWidth/2,
        height: deviceHeight/5,
        justifyContent: 'flex-start',
        marginLeft: 2,
    },
    titleText: {
        fontSize: deviceHeight/25,
        textAlign: 'center',
        fontFamily: 'calibri',
        color: 'white',
        margin: 5,
        fontWeight: 'bold',
    },
 
    grayText: {
        fontSize: deviceHeight/29,
        color: 'gray',
        fontFamily: 'calibri',
        fontWeight: 'bold',

        margin: 5,
        textAlign: 'left',
    },
    blueText: {
        fontSize: deviceHeight/30,
        color: 'lightblue',
        fontFamily: 'calibri',
        fontWeight: 'bold',
        margin: 5,
        textAlign: 'left',
    },
    signUp: {
        height: deviceHeight/20, 
        width: deviceWidth/4,
        backgroundColor: 'lightblue',
        margin: 5,
    },
    
     buttonBig: {
        height: deviceHeight/10,
        width: deviceWidth/2,
        borderWidth: 1,
        borderColor: 'black',
        margin: 5,
        justifyContent:'center',
    },
    
    sideContainer2: {
        width: deviceWidth/4,
        height: deviceHeight/30,
        alignItems: 'space-between',
        justifyContent: 'flex-start',
        margin: 10,
        flexDirection: 'row',
    },
    
    greyText: {
        fontSize: deviceHeight/40,
        color: 'gray',
        fontFamily: 'calibri',
        fontWeight: 'bold',

        margin: 5,
        textAlign: 'left',
    },
    
   
    
});