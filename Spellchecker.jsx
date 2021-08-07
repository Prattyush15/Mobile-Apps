import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput, ImageBackground, TouchableHighlight, Dimensions } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state = {
        word: 'Type Here',
    }

    replace = () => {
        this.setState({
            word: this.state.word.replace('wich', 'which')
            .replace('Accomodate', 'Accommodate')
            .replace('accomodate', 'accommodate')
            .replace('Recieve', 'Receive')
            .replace('wich', 'which')
            .replace('Wich', 'Which')
        })
    }


    render() {
        return (
            <View style={styles.container}>

                <ImageBackground
                    style={styles.container}
                    source={{ uri: 'https://codehs.com/uploads/0d1cb67c7b91138b1aacd195efc80945' }}
                >
                    <View>
                        <Text style={styles.title}>
                            Spellchecker
                        </Text>
                    </View>
                   
                    <View style={styles.box}>
                           
                       
                        <TextInput
                            multiline={true}
                            onChangeText={(word) => this.setState({word})}
                            value={this.state.word}
                            style={styles.para}
                        />

                    </View>
                   
                    <TouchableHighlight
                        onPress={this.replace}
                    >
                       
                        <View style={styles.button}>
                       
                            <Text style={styles.text}>
                                Spellcheck!
                            </Text>
                        </View>
                    </TouchableHighlight>
                   
                   
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
        alignItems: 'center',
    },
   
    title: {
        fontSize: deviceHeight/10,
        fontFamily: 'futura',
        marginTop: 10,
       
    },
   
    para: {
        fontSize: deviceHeight/30,
        fontFamily: 'futura',
        marginTop: 10,
       
    },
   
    box: {
        height: deviceHeight/2,
        width: deviceWidth/1.4,
        textAlign: 'left',
        backgroundColor: 'white',
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 20,
       
    },
   
    button: {
        width: deviceWidth/1.4,
        height: deviceHeight/9,
        backgroundColor: 'black',
        marginTop: 20,
    },
   
    text: {
        fontSize: deviceHeight/20,
        fontFamily: 'futura',
        marginTop: 10,
        color: 'white',
        textAlign:'center',
    }
   
   
});