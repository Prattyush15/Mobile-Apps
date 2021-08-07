import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {

   state = {
      name: 'Mikaela',
      age: '',
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Name
                </Text>
                <TextInput style={styles.textInput}
                    onChangeText={(name) => this.setState({name})}
                    value={this.state.name}
                />
                <Text style={styles.title}>
                    Age
                </Text>
                <TextInput style={styles.textInput}
                    onChangeText={(age) => this.setState({age})}
                    value={this.state.age}
                />
            </View>
      );
   }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightBlue',
    },
    textInput: {
        height: 50,
        borderWidth: 1,
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    title: {
        color: 'darkBlue',
        fontSize: 50,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 30,
        marginTop: 50,
    },
});