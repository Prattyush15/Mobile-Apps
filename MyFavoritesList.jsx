import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.topBox}>
                    <Text style = {styles.titleFont}>
                        My Favorite Movies
                    </Text>
                </View>
                <View style = {styles.middleBox}>
                    <Text style = {styles.otherFont}>
                        1. The Dark Knight
                    </Text>
                </View>
                <View style = {styles.middleBox}>
                    <Text style = {styles.otherFont}>
                        2. Gladiator
                    </Text>
                </View>
                <View style = {styles.middleBox}>
                    <Text style = {styles.otherFont}>
                        3. Joker
                    </Text>
                </View>
                <View style = {styles.middleBox}>
                    <Text style = {styles.otherFont}>
                        4. The Lord of The Rings
                    </Text>
                </View>
                <View style = {styles.middleBox}>
                    <Text style = {styles.otherFont}>
                        5. Spider-Man: Into The Spider-Verse
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'space-between',
        flexDirection: 'column',
    },
    
    titleFont: {
        color: 'orange',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        alignItems: 'space-between',

    },
    
    otherFont: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        alignItems: 'space-between',

    },
    
    topBox: {
        height: 100,
        width: 225,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    middleBox: {
        height: 50,
        width: 225,
        aligntItems:'center',
        justifyContent: 'center',
    }
    

});