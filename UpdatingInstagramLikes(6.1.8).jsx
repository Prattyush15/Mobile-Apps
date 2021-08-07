import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TouchableHighlight, ScrollView, Dimensions } from 'react-native';
import Constants from 'expo-constants';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
export default class App extends Component {
    state = {
        post: [
            {
                user: 'Prattyush Giriraj',
                pfp: 'https://codehs.com/uploads/b7e4402d567756a011bd20654e181dff',
                image: 'https://codehs.com/uploads/12219ce171e32e23378d94752db630d6',
                threeDots: 'https://codehs.com/uploads/6c9245baf61ac450c8cc5be165d84cd9',
                heart:'https://codehs.com/uploads/fa7f18cc4ea27451ce560dfeeca5b82b',
                comment:'https://codehs.com/uploads/7b1b5c3b1669ba484239c77a2015e371',
                forward:'https://codehs.com/uploads/32c2b54ccd2653ac77dcb60db11b8f8a',
                likes: 0,
            },
           
            
        ]
    }
    
    likePost = (index)=>{
        this.state.post[index].likes++;
        this.setState({
            post:this.state.post            
        })
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box1}>
                    <View>
                    </View>
                   
                    <Image
                        source={{ uri: 'https://codehs.com/uploads/0c68327e56d55f02b2ffd082a17160bc' }}
                        style={{ height: 30, width: 100 }}
                    />
                   
                    <Image
                        source={{ uri: 'https://codehs.com/uploads/ed94aeeca1f6578055707198f9381556' }}
                        style={{ height: 30, width: 30 }}
                    />
                   
                </View>
                
                {this.state.post.map((a, index) => (
                        <View>
                            <View style={styles.box2}>
                               
                                <Image
                                    source={a.pfp}
                                    style={{ height: 30, width: 30 }}
                                />
                               
                                <View style={styles.row}>
                                    <Text style={styles.paragraph}>
                                        {a.user}
                                    </Text>
                                </View>
                           
                           
                                <Image
                                    source={a.threeDots}
                                    style={{ height: 30, width: 30 }}
                                />
                            </View>
                           
                           
                            <Image
                                source={a.image}
                                style={styles.image}
                            />
   
                            <View style={styles.box2}>
                               
                                <View style={styles.row}>
                               
                                    <TouchableHighlight
                                        onPress={()=>{this.likePost(index)}}
                                    >
                                        <Image
                                            source={a.heart}
                                            style={{ height: 30, width: 30, margin: 5 }}
                                        />
                                    </TouchableHighlight>
                                   
                                    <Image
                                        source={a.comment}
                                        style={{ height: 30, width: 30, margin: 5 }}
                                    />
                                    <Image
                                        source={a.forward}
                                        style={{ height: 30, width: 30, margin: 5 }}
                                    />
                                </View>
                            </View>
                           
                            <View style={styles.box2}>
                                <Text style={styles.paragraph}>
                                    {a.likes} Likes
                                </Text>
                            </View>
                        </View>
                    ))}
                    
                    <View style={styles.box1}>
                   
                    <Image
                        source={{ uri: 'https://codehs.com/uploads/1d9fe3deca63cef13213da8ed979a3b1' }}
                        style={{ height: 30, width: 30 }}
                    />
                    <Image
                        source={{ uri: 'https://codehs.com/uploads/db0e9f4acb4ee092bae91b663048a563' }}
                        style={{ height: 30, width: 30 }}
                    />
                    <Image
                        source={{ uri: 'https://codehs.com/uploads/d452d8a442c7439579972a84250931d4' }}
                        style={{ height: 30, width: 30 }}
                    />
                    <Image
                        source={{ uri: 'https://codehs.com/uploads/fa7f18cc4ea27451ce560dfeeca5b82b' }}
                        style={{ height: 30, width: 30 }}
                    />
                    <Image
                        source={{ uri: 'https://codehs.com/uploads/b68ea376ae85d6afa3283113b430baa9' }}
                        style={{ height: 30, width: 30 }}
                    />
                </View>
            </View>
               
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
       
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
    box1: {
        height: deviceHeight/11,    
        backgroundColor: 'lightgray',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    image: {
        height: 6*(deviceHeight/11),
        width: deviceWidth,
       
    },
    box2: {
        height: deviceHeight/11,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
   
    row: {
        flexDirection: 'row',
    },
});