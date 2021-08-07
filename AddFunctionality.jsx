import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions, ScrollView } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state={
        feedDisplay: 'block',
        postDisplay: 'none',
        accountDisplay: 'none',
        account: 'Prattyush Giriraj',
        comment2: 'Enter Your Comment ',
        caption: 'Enter Your Caption ',
        link: 'Enter Image Link ',
        

        posts: [
            {
                user: 'Prattyush Giriraj',
                image: 'https://codehs.com/uploads/12219ce171e32e23378d94752db630d6',
                heart:'https://codehs.com/uploads/fa7f18cc4ea27451ce560dfeeca5b82b',
                comment:'https://codehs.com/uploads/7b1b5c3b1669ba484239c77a2015e371',
                likes: 0,
                caption: 'Beautiful Waterfall in Brazil!',
                comment2: 'Enter Your Comment ',
                

            },
           
            {
                user: 'John Cena',
                image: 'https://codehs.com/uploads/4423189d80e7863392068a3bd19e795b',
                heart:'https://codehs.com/uploads/fa7f18cc4ea27451ce560dfeeca5b82b',
                comment:'https://codehs.com/uploads/7b1b5c3b1669ba484239c77a2015e371',
                likes:0,
                caption: 'Hello my name is John Cena!',
                comment2: 'Enter Your Comment ',
                
            },
           
            {
                user: 'Xavier Woods',
                image: 'https://codehs.com/uploads/56ed38458ce33b0420db7c33258ffd6d',
                heart:'https://codehs.com/uploads/fa7f18cc4ea27451ce560dfeeca5b82b',
                comment:'https://codehs.com/uploads/7b1b5c3b1669ba484239c77a2015e371',
                likes:0,
                caption: 'Hello my name is Xavier Woods!',
                comment2: 'Enter Your Comment ',
                
            },
           
            {
                user: 'Kofi Kingston',
                image: 'https://codehs.com/uploads/db1bbda1642b5a069313b95c19e87996',
                heart:'https://codehs.com/uploads/fa7f18cc4ea27451ce560dfeeca5b82b',
                comment:'https://codehs.com/uploads/7b1b5c3b1669ba484239c77a2015e371',
                likes:0,
                caption: 'Hello my name is Kofi Kingston!',
                comment2: 'Enter Your Comment ',
                
            },
        ],
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

    liking = (index)=>{
        this.state.posts[index].likes++;
        this.setState({
            posts: this.state.posts,     
        })
    }
    
    post = () =>{
        this.state.posts.push({
            user: this.state.account,
            image: this.state.link,
            likes: 0,
            heart:'https://codehs.com/uploads/fa7f18cc4ea27451ce560dfeeca5b82b',
            comment:'https://codehs.com/uploads/7b1b5c3b1669ba484239c77a2015e371',
            caption: this.state.caption,
        })
    }

     handle1TextChange = link => {
        this.setState({ link });
    };
   
    handle2TextChange = caption => {
        this.setState({ caption });
    };
   
   
    handle3TextChange = account => {
        this.setState({ account });
    };
   
    handle4TextChange = comment2 => {
        this.setState({ comment2 });
    };
   
    comment = () =>{
        this.state.posts.push({
            comment2: this.state.comment2,
        })
    }
   
    nombre = () =>this.setState(state =>({
        account: 'Prattyush Giriraj'
    }))

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleBox}>
                    <Text style={styles.titleText}>
                        Image Feed
                    </Text>
                </View>
               
                <View style={{ display: this.state.feedDisplay }}>
                    <View style={styles.contentContainer}>
                        <ScrollView>
                            {this.state.posts.map((a, index) => (
                                <View>
                                    <View style={styles.box1}>
                                        <View style={styles.rows}>
                                            <Text style={styles.text1}>
                                                {a.user}
                                            </Text>
                                        </View>
                                    </View>
                                   
                                    <Image
                                        source={a.image}
                                        style={styles.imageBox}
                                    />
                                    
                                    <View style={styles.box1}>
                                        <Text style={styles.captions}>
                                            {a.caption}
                                        </Text>
                                    </View>
                                    
                                    <View style={styles.box1}>
                                        <Image
                                            source={a.comment}
                                            style={{ height: 20, width: 20, margin: 5 }}
                                        />
                                        <TextInput
                                            value={this.state.comment2}
                                            onChangeText={this.handle4TextChange}
                                            style={styles.input}
                                        />
                                    </View>
           
                                    <View style={styles.box1}>
                                        <View style={styles.rows}>
                                            <TouchableHighlight
                                                onPress={()=>{this.liking(index)}}
                                            >
                                                <Image
                                                    source={a.heart}
                                                    style={{ height: 20, width: 20, margin: 5 }}
                                                />
                                            </TouchableHighlight>
                                           
                                            <Text style={styles.text1}>
                                                {a.likes} Likes
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
               
                <View style={{ display: this.state.postDisplay }}>
                    <View style={styles.contentContainer}>
                        <View style={styles.accountBox}>
                            <Text style={styles.text1}>
                                {this.state.account}
                            </Text>
                        </View>
                       
                       
                        <TextInput
                            value={this.state.link}
                            onChangeText={this.handle1TextChange}
                            style={styles.input}
                        />
                       
                        <TextInput
                            value={this.state.caption}
                            onChangeText={this.handle2TextChange}
                            style={styles.input}
                        />
                        
                        <TouchableHighlight
                             onPress={this.post}
                        >
                            <View style={styles.button1}>
                                <Text style={styles.text1}>
                                    Post Image
                                </Text>
                            </View>
                        </TouchableHighlight>
                        
                    </View>
                </View>
                

                <View style={{ display: this.state.accountDisplay }}>
                    <View style={styles.contentContainer}>
                        <View style={styles.accountBox}>
                            <Text style={styles.text1}>
                                Change Account
                            </Text>
                        </View>
                       
                        <TouchableHighlight
                            onPress={this.nombre}
                        >
                            <View style={styles.accountBox}>
                                <Text style={styles.text1}>
                                    Prattyush Giriraj
                                </Text>
                            </View>
                        </TouchableHighlight>

                        <TextInput
                            value={this.state.account}
                            onChangeText={this.handle3TextChange}
                            style={styles.input}
                        />
                        
                        <TouchableHighlight
                            onPress={this.nombre}
                        >
                            <View style={styles.button1}>
                                <Text style={styles.text1}>
                                    Click Here To Create Account
                                </Text>
                            </View>
                        </TouchableHighlight>
                       
                       
                    </View>
                </View>
               
                <View style={styles.bottom}>
                    <TouchableHighlight style={styles.bottomButton}
                        onPress={this.handleFeedPress}
                    >
                        <Text style={styles.bottomButtonText}>
                            Feed
                        </Text>
                    </TouchableHighlight>
           
                    <TouchableHighlight style={styles.bottomButton}
                        onPress={this.handlePostPress}
                    >
                        <Text style={styles.bottomButtonText}>
                            Post
                        </Text>
                    </TouchableHighlight>
   
           
                    <TouchableHighlight style={styles.bottomButton}
                        onPress={this.handleAccountPress}
                    >
                        <Text style={styles.bottomButtonText}>
                            Account
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
    },
   
    contentContainer: {
        height: 7*(deviceHeight/9),
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },    

   
    titleBox: {
        height: deviceHeight/9,
        width: deviceWidth,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 7,
    },
   
   
    titleText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: deviceHeight/17,
        color: 'black',
    },
   
    bottom: {
        backgroundColor: 'blue',
        justifyContent: 'center',
        height: deviceHeight/9,
        width: deviceWidth,
        borderTopWidth: 7,
        flexDirection: 'row',
    },
   
    bottomButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 4,
        margin: 10,
        height: deviceHeight/16,
        width: deviceWidth/5,
    },
   
    button1: {
        height: deviceHeight/10,
        width: deviceWidth/2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 3,
        margin: 5,
    },
   
    bottomButtonText: {
        fontSize: deviceHeight/40,
        color: 'black',
        textAlign: 'center',
    },
   
    box1: {
        height: deviceHeight/11,
        width: deviceWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'lightgray',
    },
   
    accountBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        height: deviceHeight/11,
        width: deviceWidth,
        borderWidth: 1,
        borderColor: 'black',
        color: 'black',
    },
   
    rows: {
        flexDirection: 'row',
    },
   
    imageBox: {
        height: deviceHeight/2,
        width: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
   
    text1: {
        fontSize: 18,
        color: 'blue',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 5,
    },
   
  
    input: {
        height: deviceHeight/10,
        width: deviceWidth/2,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'lightgray',
        borderWidth: 2,
        margin: 5,
    },
    
    captions: {
        fontSize: deviceHeight/25,
        color: 'black',
        textAlign: 'center',
    },

});