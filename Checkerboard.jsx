import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.border}>
                    <View style={styles.rowContainer}>
                        <View style={styles.redBox}>
                        </View>
                        <View style={styles.blackBox}>
                        </View>
                        <View style={styles.redBox}>
                        </View>
                    </View>
                    <View style={styles.rowContainer}>
                        <View style={styles.blackBox}>
                        </View>
                        <View style={styles.redBox}>
                        </View>
                        <View style={styles.blackBox}>
                        </View>
                    </View>
                    <View style={styles.rowContainer}>
                        <View style={styles.redBox}>
                        </View>
                        <View style={styles.blackBox}>
                        </View>
                        <View style={styles.redBox}>
                        </View>
                    </View>
                    <View style={styles.rowContainer}>
                        <View style={styles.blackBox}>
                        </View>
                        <View style={styles.redBox}>
                        </View>
                        <View style={styles.blackBox}>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center", //remove this line and see how the layout is affected
        alignItems: "center", //remove this line and see how the layout is affected
    },
    border: {
        backgroundColor: "yellow",
        height: 225,
        width: 175,
        alignItems: "center", //remove this line and see how the layout is affected
        justifyContent: "center", //remove this line and see how the layout is affected
    },
    rowContainer: {
        height: 50,
        width: 150,
        flexDirection: "row"
    },
    redBox: {
        width: 50,
        height: 50,
        backgroundColor: "red",
    },
    blackBox: {
        width: 50,
        height: 50,
        backgroundColor: "black",
    },
    
});