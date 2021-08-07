import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.itemContainer}>
                        <Text style={styles.text}>
                            Period: 1
                        </Text>
                        <Text style={styles.text}>
                            Introduction to Computer Science
                        </Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <Text style={styles.text}>
                            Period: 2
                        </Text>
                        <Text style={styles.text}>
                            AP Computer Science Principles
                        </Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <Text style={styles.text}>
                            Period: 3
                        </Text>
                        <Text style = {styles.text}>
                            Introduction to Python
                        </Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <Text style={styles.text}>
                            Period: 4
                        </Text>
                        <Text style={styles.text}>
                            AP Java
                        </Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <Text style={styles.text}>
                            Period: 5
                        </Text>
                        <Text style={styles.text}>
                            Computing Ideas
                        </Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <Text style={styles.text}>
                            Period: 6
                        </Text>
                        <Text style={styles.text}>
                            Web Design
                        </Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <Text style={styles.text}>
                            Period: 7
                        </Text>
                        <Text style={styles.text}>
                            Introduction to Virtual Reality
                        </Text>
                    </View>
                </ScrollView>
            </View>
      )
   }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'stretch',
    },
    itemContainer: {
        flex: 1,
        padding: 20,
        borderBottomWidth: 2,
        borderColor: 'white',
        backgroundColor: 'deepskyblue',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        textAlign: 'left',
        marginBottom: 2,
    }
});