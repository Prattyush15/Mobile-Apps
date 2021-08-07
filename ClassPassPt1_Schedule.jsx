import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;


export default class App extends Component {
   
    state = {
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
                instructor: 'Xavier Woods',
            },

        ]
    }
    render() {
        return (
            <View style={styles.container}>
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
    }
});