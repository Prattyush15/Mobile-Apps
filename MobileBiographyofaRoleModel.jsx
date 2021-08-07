import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TouchableHighlight, Dimensions } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state = {
        welcomePageDisplay: 'block',
        infoPageDisplay: 'none',
        hobbiesPageDisplay: 'none',
    }

    // When Welcome Page button is pressed, hide Info page and show Welcome page
    handleWelcomePagePress = () => this.setState(state => ({
        welcomePageDisplay: 'block',
        infoPageDisplay: 'none',
        hobbiesPageDisplay: 'none',

    }));
    
    // When Info Page button is pressed, hide Welcome page and show Info page
    handleInfoPagePress = () => this.setState(state => ({
        welcomePageDisplay: 'none',
        infoPageDisplay: 'block',
        hobbiesPageDisplay: 'none',

    }));
    handleHobbiesPagePress = () => this.setState(state => ({
        welcomePageDisplay: 'none',
        infoPageDisplay: 'none',
        hobbiesPageDisplay: 'block',
    }));
    
    render() {
        return (
            <View style={styles.container}>
                
                {/*Welcome page screen layout here*/}
                <View style={{ display: this.state.welcomePageDisplay }}>
                    <View style={styles.contentContainer}>
                    <Text style={styles.title}>
                            Stephen Curry
                        </Text>
                    <Image
                        source={{ uri: 'https://codehs.com/uploads/a2e8d9fc292ee73773df4feffabf524d' }}
                        style={{ height: 150, width: 150 }}
                    />
                    
                    <Text style={styles.text}>
                        Hometown: Akron, Ohio
                    </Text>
                    <Text style={styles.text}>
                        Birthday: March 14, 1988
                    </Text>
                    <Text style={styles.text}>
                        Education: Davidson
                    </Text>
                    </View>
                </View>
                
                {/*Info page screen layout here*/}
                <View style={{ display: this.state.infoPageDisplay }}>
                    <View style={styles.contentContainer}>
                        
                        <Text style={styles.title}>
                            Work Experience: 
                        </Text>
                       <Text style={styles.text}>
                            -All-Star and Future Hall of Fame Point Guard for the Golden State Warriors
                        </Text> 
                        <Text style={styles.text}>
                            -Host of Holey Moley
                        </Text> 
                        
                    </View>
                </View>
                
                <View style={{ display: this.state.hobbiesPageDisplay }}>
                    <View style={styles.contentContainer}>
                        
                        <Text style={styles.title}>
                            Hobbies: 
                        </Text>
                       <Text style={styles.text}>
                       
                            -Basketball
                        </Text> 
                        <Text style={styles.text}>
                            -Golf
                        </Text> 
                        
                    </View>
                </View>
                
                
                {/*Bottom nav bar shows on each screen*/}
                <View style={styles.navbarContainer}>
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handleWelcomePagePress}
                    >
                        <Text style={styles.navButtonText}>
                            Basic Info
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handleInfoPagePress}
                    >
                        <Text style={styles.navButtonText}>
                            Work Experience
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handleInfoPagePress}
                    >
                        <Text style={styles.navButtonText}>
                            Hobbies
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
        backgroundColor: 'lightblue',
    },
    title: {
        fontSize: deviceHeight/10,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'darkblue',
    },
    paragraph: {
        fontSize: deviceHeight/20,
        textAlign: 'center',
        color: 'white',
    },
    navbarContainer: {
        height: deviceHeight/6,
        width: deviceWidth,
        backgroundColor: 'darkblue',
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
        borderColor: 'lightblue',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    navButtonText: {
        fontSize: deviceHeight/40,
        textAlign: 'center',
        color: 'darkblue',
    },
    text: {
        fontSize: deviceHeight/20,
        textAlign: 'center',
        color: 'darkblue',
    }

});