import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    
    state = {
        guestList: [
            {
                listNumber: 'Number',
                firstName: 'Last',
                lastName: 'First',
                RSVP: 'RSVP'
            },
            {
                listNumber: '1',
                firstName: 'Jillian',
                lastName: 'Spokes',
                RSVP: 'Yes'
            },
            {
                listNumber: '2',
                firstName: 'Gerald',
                lastName: 'Spokes',
                RSVP: 'Yes'
            },
            {
                listNumber: '3',
                firstName: 'Trina',
                lastName: 'Cleary',
                RSVP: 'No'
            },
            {
                listNumber: '4',
                firstName: 'Jacob',
                lastName: 'Cleary',
                RSVP: 'No'
            },
            {
                listNumber: '5',
                firstName: 'Howard',
                lastName: 'Smith',
                RSVP: 'Yes'
            },
            {
                listNumber: '6',
                firstName: 'Shonda',
                lastName: 'Watkins',
                RSVP: 'Yes'
            },
            {
                listNumber: '7',
                firstName: 'Peter',
                lastName: 'Watkins',
                RSVP: 'Yes'
            },
        ]
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topBar}>
                    <Text style={styles.titleText}>
                        Guest List
                    </Text>
                    <Text style={styles.titleText}>
                        Fourth of July Party
                    </Text>
                    <Text style={styles.titleText}>
                        7/4/2020
                    </Text>
                </View>
                {this.state.guestList.map((guest) => (
                    <View style={styles.guestListContainer}>
                        <View style={styles.sideContainer}>
                            <Text style={styles.whiteText}>
                                {guest.listNumber}
                            </Text>
                        </View>
                        <View style={styles.middleContainer}>
                            <Text style={styles.blueText}>
                                {guest.lastName},
                            </Text>
                            <Text style={styles.blueText}>
                                {guest.firstName}
                            </Text>
                        </View>
                        <View style={styles.sideContainer}>
                            <Text style={styles.whiteText}>
                                {guest.RSVP}
                            </Text>
                        </View>
                    </View>
                ))}
            </View>
      )
   }
}

const styles = StyleSheet.create ({
    container: {
       flex: 1,
    },
    topBar: {
        height: deviceHeight/5,
        width: deviceWidth,
        justifyContent: 'center',
        backgroundColor: 'darkblue',
        borderBottomWidth: 2,
        borderBottomColor: 'white',
    },
    guestListContainer: {
        flexDirection: 'row',
        width: deviceWidth,
        height: deviceHeight/10,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        backgroundColor: 'red',
    },
    sideContainer: {
        width: deviceWidth/4,
        height: deviceHeight/10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    middleContainer: {
        width: deviceWidth/2,
        height: deviceHeight/10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        fontSize: deviceHeight/25,
        textAlign: 'center',
        fontFamily: 'Futura',
        color: 'white',
        margin: 5,
    },
    whiteText: {
        fontSize: deviceHeight/25,
        fontFamily: 'Futura',
        color: 'white',
    },
    blueText: {
        fontSize: deviceHeight/33,
        color: 'darkblue',
        fontFamily: 'Futura',
    }
});