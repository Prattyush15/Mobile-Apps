import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state = {
        students: [
            {
                name: 'Stefany',
                grade: 10,
                age: 16,
                favoriteSubject: 'Math',
            },
            {
                name: 'Roger',
                grade: 9,
                age: 14,
                favoriteSubject: 'Music',
            },
            {
                name: 'Sam',
                grade: 12,
                age: 17,
                favoriteSubject: 'History',
            }
        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Student Roster
                </Text>
                <View style={styles.studentContainer}>
                    <ScrollView
                    horizontal = {true}>
                        {this.state.students.map((student) => (
                            <View style={styles.itemContainer}>
                                <ScrollView>
                                    <Text style={styles.text}>
                                        {student.name}
                                    </Text>
                                    <Text style={styles.text}>
                                        Grade: {student.grade}
                                    </Text>
                                    <Text style={styles.text}>
                                        {student.age}
                                    </Text>
                                    <Text style={styles.text}>
                                        {student.favoriteSubject}
                                    </Text>
                                </ScrollView>
                             </View>
                        ))}
                    </ScrollView>
                </View>
            </View>
      )
   }
}

const styles = StyleSheet.create ({
    container: {
       height: deviceHeight,
       width: deviceWidth,
    },
    studentContainer: {
        height: deviceHeight/2,
        width: deviceWidth,
        borderWidth: 5
    },
    itemContainer: {
        height: deviceHeight/4,
        width: deviceWidth/2,
        justifyContent: 'center',
        backgroundColor: 'lightBlue',
        borderWidth: 1,
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: deviceHeight/16,
    },
});