import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
 state = {
    guestList: [
        {
            listNumber: 'Rankings',
            name: 'Movie Names',
        },
        {
            listNumber: '1',
            name: 'The Dark Knight',
            image: 'https://codehs.com/uploads/0717fd51fe7ca3a93fece1aa97e3d322',
            
        },
        {
            listNumber: '2',
            name: 'Lord of the Rings',
            image: 'https://codehs.com/uploads/a450b6689144af58e3135605fb1758df',
        },
        {
            listNumber: '3',
            name: 'Inception',
            image: 'https://codehs.com/uploads/10acf39b906b1fd5aa0b9b1876bc85a9',
        },
        {
            listNumber: '4',
            name: 'Gladiator',
            image: 'https://codehs.com/uploads/c0d0fe2fbaaef39d671a3937f513f9e4',
        },
        {
            listNumber: '5',
            name: 'Spider-Man: Into The Spider-Verse',
            image: 'https://codehs.com/uploads/e412c8a6b84fc36a13202a1562111033',
        },
        
    ]
}

render() {
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Text style={styles.titleText}>
                    My Top 5
                </Text>
                <Text style={styles.titleText}>
                    Favorite Movies
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
                        <Text style={styles.whiteText}>
                            {guest.name}
                        </Text>
                        
                    </View>
                    <View style={styles.sideContainer}>
                        <Image
                            source={guest.image}
                            style={{ height: deviceHeight/8, width: deviceWidth/4 }}

                            
                        />
                        
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
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
},
guestListContainer: {
    flexDirection: 'row',
    width: deviceWidth,
    height: deviceHeight/8,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    backgroundColor: 'white',
},
sideContainer: {
    width: deviceWidth/4,
    height: deviceHeight/8,
    alignItems: 'center',
    justifyContent: 'center'
},
middleContainer: {
    width: deviceWidth/2,
    height: deviceHeight/8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
},
titleText: {
    fontSize: deviceHeight/25,
    textAlign: 'center',
    fontFamily: 'Futura',
    color: 'black',
    margin: 5,
},
whiteText: {
    fontSize: deviceHeight/25,
    fontFamily: 'Futura',
    color: 'black',
},
blueText: {
    fontSize: deviceHeight/33,
    color: 'black',
    fontFamily: 'Futura',
}
});