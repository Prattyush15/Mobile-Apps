import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {

    state = {
        welcomePageDisplay: 'block',
        infoPageDisplay: 'none',
        yesCount: 0,
        noCount: 0,
    }
   
    handleWelcomePagePress = () => this.setState(state => ({
        welcomePageDisplay: 'block',
        infoPageDisplay: 'none',
    }));
   
    handleInfoPagePress = () => this.setState(state => ({
        welcomePageDisplay: 'none',
        infoPageDisplay: 'block',
    }));
   
    addYes = () => {
        this.setState({
            yesCount: this.state.yesCount + 1,
        })
    }
   
    addNo = () => {
        this.setState({
            noCount: this.state.noCount + 1,
        })
    }
   
    render() {
        return (
            <View style={styles.container}>
                <View style={{ display: this.state.welcomePageDisplay }}>
                    <View style={styles.contentContainer}>
                        <Text style={styles.title}>
                            Birthday Party!!!
                        </Text>
                        <Text style={styles.paragraph}>
                            When: March 18
                        </Text>
                        <Text style={styles.paragraph}>
                            Where: Ceasar's Palace
                        </Text>
                        <View style={styles.buttonContainer}>
                            <TouchableHighlight
                                onPress={this.addYes}
                            >
                                <View style={styles.navButton}>
                                    <Text style={styles.navButtonText}>
                                        I am coming!
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={this.addNo}
                            >
                                <View style={styles.navButton}>
                                    <Text style={styles.navButtonText}>
                                        Nah, I have other plans
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                <View style={{ display: this.state.infoPageDisplay }}>
                    <View style={styles.contentContainer}>
                        <Text style={styles.title}>
                            RSVPs
                        </Text>
                        <Text style={styles.paragraph}>
                            Total confirmed RSVPs: {this.state.yesCount}
                        </Text>
                        <Text style={styles.paragraph}>
                            Total denied RSVPs: {this.state.noCount}
                        </Text>
                    </View>
                </View>
                <View style={styles.navbarContainer}>
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handleWelcomePagePress}
                    >
                        <Text style={styles.navButtonText}>
                            Info
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handleInfoPagePress}
                    >
                        <Text style={styles.navButtonText}>
                            RSVPs
                        </Text>
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
    },
    contentContainer: {
        height: 5*(deviceHeight/6),
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'darkgreen',
    },
    title: {
        fontSize: deviceHeight/10,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'gold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    paragraph: {
        fontSize: deviceHeight/20,
        textAlign: 'center',
        color: 'white',
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

});