import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TouchableHighlight, ScrollView, Dimensions } from 'react-native';
import Constants from 'expo-constants';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
export default class App extends Component {
    state = {
        feedDisplay: 'block',
        postDisplay: 'none',
        accountDisplay: 'none',
        account: 'Prattyush Giriraj',
        url: 'Enter URL Here',
        caption: 'Enter Caption Here',
        comments: 'Enter Comment Here',
        
        post: [
            {
                user: 'Prattyush Giriraj',
                pfp: 'https://codehs.com/uploads/b7e4402d567756a011bd20654e181dff',
                image: 'https://codehs.com/uploads/12219ce171e32e23378d94752db630d6',
                heart:'https://codehs.com/uploads/fa7f18cc4ea27451ce560dfeeca5b82b',
                comment:'https://codehs.com/uploads/7b1b5c3b1669ba484239c77a2015e371',
                likes: 0,
                message: '',
                comments: 'Enter Comment Here',
                caption: 'Beautiful waterfall!'

            },
            
            {
                user: 'John Cena',
                pfp: 'https://codehs.com/uploads/cee1cf92c062c065d9770545faa8821e',
                image: 'https://codehs.com/uploads/4423189d80e7863392068a3bd19e795b',
                heart:'https://codehs.com/uploads/fa7f18cc4ea27451ce560dfeeca5b82b',
                comment:'https://codehs.com/uploads/7b1b5c3b1669ba484239c77a2015e371',
                likes: 0,
                message: '',
                comments: 'Enter Comment Here',
                caption: 'Hello my name is John Cena!'
            },
            
            {
                user: 'Xavier Woods',
                pfp: 'https://codehs.com/uploads/65d03d0363c0568a5437682d49ac0599',
                image: 'https://codehs.com/uploads/56ed38458ce33b0420db7c33258ffd6d',
                heart:'https://codehs.com/uploads/fa7f18cc4ea27451ce560dfeeca5b82b',
                comment:'https://codehs.com/uploads/7b1b5c3b1669ba484239c77a2015e371',
                likes: 0,
                message: '',
                comments: 'Enter Comment Here',
                caption: 'Hello my name is Xavier Woods!'
            },
            
            {
                user: 'Kofi Kingston',
                pfp: 'https://codehs.com/uploads/3788d8ea9cd2048412d3852e30d86d54',
                image: 'https://codehs.com/uploads/db1bbda1642b5a069313b95c19e87996',
                heart:'https://codehs.com/uploads/fa7f18cc4ea27451ce560dfeeca5b82b',
                comment:'https://codehs.com/uploads/7b1b5c3b1669ba484239c77a2015e371',
                likes: 0,
                message: '',
                comments: 'Enter Comment Here',
                caption: 'Hello my name is Kofi Kingston!'
            },
          
            
        ]
    }
    
    handleFeedPress = () => this.setState(state => ({
        feedDisplay: 'block',
        postDisplay: 'none',
        accountDisplay: 'none',

    }));

    handlePostPress = () => this.setState(state => ({
        feedDisplay: 'none',
        postDisplay: 'block',
        accountDisplay: 'none',

    }));

    handleAccountPress = () => this.setState(state => ({
        feedDisplay: 'none',
        postDisplay: 'none',
        accountDisplay: 'block',

    }));
    
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
                    <Text style={styles.paragraph}>
                        Image App
                    </Text>
                </View>
                <View style={{ display: this.state.feedPageDisplay }}>
                    <View style={styles.contentContainer}>
                        <ScrollView>
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
                                            
                                            <Text style={styles.paragraph}>
                                                {a.likes} Likes
                                            </Text>
                                        
                                        </View>
                                    </View>
                                   
                                    <View style={styles.box2}>
                                        <Text style={styles.paragraph}>
                                            {a.likes} Likes
                                        </Text>
                                    </View>
                                    
                                    
                                </View>
                            ))}
                            </ScrollView>
                            
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
            </View>
               
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
       
    },
    
    contentContainer: {
        height: 5*(deviceHeight/7),
        width: deviceWidth,
        alignItems: 'center',
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