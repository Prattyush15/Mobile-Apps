import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TouchableHighlight, ImageBackground, Alert, Dimensions, TextInput } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;



export default class App extends Component {
    state = {
            inputValue: 'Search'
    };
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topBox}>
                    <View style = {styles.prof}>
                        
                        <Image
                            source={{ uri: 'https://codehs.com/uploads/33fe03655439107715d4c999d8ad2e07' }}
                            style={{ height: deviceHeight/10, width: deviceWidth/6 }}
                        />
                    </View>
                    
                    <View style = {styles.blank}>
                    </View>
                    
                    
                    <View style={styles.prof}>
                    
                        <Image
                            source={{ uri: 'https://codehs.com/uploads/ca23af5f9048a44a242db9fccdc71b58' }}
                            style={{ height: deviceHeight/10, width: deviceWidth/6 }}
                        />
                    </View>
                    
                    
                    <View style={styles.searchBox}>
                        
                        <Text style={styles.text0}>
                        
                        </Text>
                        
                        <TextInput style={styles.text0}
                            multiline = {true}
                            onChangeText={(inputValue) => this.setState({inputValue})}
                            value={this.state.inputValue}
                            style={styles.searchBox}
                        />
                    </View>
                    
                </View>
                
                <View style={styles.followingBox}>
                
                    <Text style={styles.text1}>
                        Following
                    </Text>
                </View>
                <View style={styles.followedCategories}>
                
                    <Text style={styles.text2}>
                        FOLLOWED CATEGORIES
                    </Text>
                </View>
                <View style = {styles.games}>
                    
                    <View style={styles.game1}>
                    
                        <Image
                            source={{ uri: 'https://codehs.com/uploads/a6064e4e58bef27a9fdc1edc1a5df3cf' }}
                            style={{ height: 4*(deviceHeight/10), width: deviceWidth/2 }}
                        />
                        

                    </View>
                    
                    <View style={styles.game1}>
                    
                        <Image
                            source={{ uri: 'https://codehs.com/uploads/529610b22d502d9eea8e68770d3bcdd3' }}
                            style={{ height: 4*(deviceHeight/10), width: deviceWidth/2 }}
                        />
                        

                    </View>
                    
                    
                    
                </View>
                <View style={styles.followedCategories}>
                
                    <Text style={styles.text2}>
                        RECOMMENDED CHANNELS
                    </Text>
                </View>
                
                <View style={styles.bottom}>
                    
                    <View style={styles.channel}>
                        <Image
                            source={{ uri: 'https://codehs.com/uploads/b308e684a26846d9871d0a3b728fded6' }}
                            style={{ height: 140, width: 200 }}
                        />
                    
                    </View>
                    
                    <View style={styles.channel}>
                        <Image
                            source={{ uri: 'https://codehs.com/uploads/7e18742f32ac981fd09aad3bd130ca3f' }}
                            style={{ height: 140, width: 200 }}
                        />
                    
                    </View>
                    
                    <View style={styles.channel}>
                        <Image
                            source={{ uri: 'https://codehs.com/uploads/26e0990b20d10dca179d36797537d367' }}
                            style={{ height: 140, width: 200 }}
                        />
                    
                    </View>
                    
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    topBox: {
      height: 1*(deviceHeight/10),  
      width: deviceWidth,
      backgroundColor: 'white',
      alignItems: 'center',
      flexDirection: 'row',
    },
    
    prof: {
        height: 1*(deviceHeight/10),
        width: deviceWidth/6,
        backgroundColor: 'white',
    },
    
    blank: {
        height: 1*(deviceHeight/10),
        width: 1.5*(deviceWidth/6),
        backgroundColor: 'white',
    },
    
    searchBox: {
        borderWidth: 1,
        width: 2.5*(deviceWidth/6),
        height: 1*(deviceHeight/10),
        borderColor: 'black',
        justifyContent: 'center',
        borderRadius: 10,
    },
    
    text0: {
        color: 'black',
        fontSize: 15,  
    },
    
    followingBox: {
        height: 1*(deviceHeight/10),
        width: deviceWidth,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',

    },
    
    text1: {
      color: 'black',
      fontSize: 25,
      textAlign: 'left',
      fontWeight: 'bold',
    },
    
    followedCategories: {
        height: 1*(deviceHeight/10),
        width: deviceWidth,
        backgroundColor: 'white',
        alignItems:'center',
        flexDirection: 'row',

    },
    
    text2: {
        fontSize: 15,
        color: 'black',
        textAlign: 'left',
        fontWeight: 'bold',
    },
    
    games: {
        height: 3*(deviceHeight/10),
        width: deviceWidth,
        backgroundColor:'white',
        flexDirection: 'row',

    },
    
    game1: {
      height: 3*(deviceHeight/10),
      width: deviceWidth/2,
      backgroundColor: 'white',
    },
    
    textBox: {
        height: 0.5*(deviceHeight/10),
        width: deviceWidth/2,
        backgourndColor: 'white',
        flexDireciton: 'column',
    },
    
    
    bottom: {
        height: 3*(deviceHeight/10),
        width: deviceWidth,
        backgroundColor: 'white',
    },
    
    channel: {
        height: 1*(deviceHeight/10),
        width: deviceWidth,
    },
    
 
    
});