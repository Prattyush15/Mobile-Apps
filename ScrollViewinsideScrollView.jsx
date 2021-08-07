import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    
  
    render() {
        return (
            <View style={styles.container}>
            
            <ScrollView>
                <Text style={styles.title}>
                    My Best Friends
                </Text>
                <View style={styles.itemContainer}>
                
                    <View style={styles.imageContainer}>
                        <ScrollView>
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/96108652663a2b9e440fb92d9997983b' }}
                                style={{ height: 150, width: 150 }}
                            />
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/9d24f1e85b992db36fbd29b3315f4a1d' }}
                                style={{ height: 150, width: 150 }}
                            />
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/8986ccbba6a76988bce0635c0113b7c3' }}
                                style={{ height: 150, width: 150 }}
                            />
                        </ScrollView>
                    </View>
                        
                    <View style={styles.otro}>
                        <ScrollView>
                            <Text style={styles.paragraph}>
                                Naruto
                            </Text>
                            
                            <Text style={styles.paragraph}>
                                Fav Color: Orange
                            </Text>
                            
                            <Text style={styles.paragraph}>
                                Fav Food: Ramen
                            </Text>
                            
                            <Text style={styles.paragraph}>
                                Fav Animal: Fox
                            </Text>
                            
                            <Text style={styles.paragraph}>
                                Fav Flower: Marigold
                            </Text>
                            
                            <Text style={styles.paragraph}>
                                Fav Friend: Shikamaru
                            </Text>
                        </ScrollView>
                        
                    </View>
                    
                    
                </View>
                <View style={styles.itemContainer}>
               
                    <View style={styles.imageContainer}>
                        <ScrollView>
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/fa75a58a29bea58aa0d5c8793c440241' }}
                                style={{ height: 150, width: 150 }}
                            />
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/f499f8f9c174146346f6dcc67de94065' }}
                                style={{ height: 150, width: 150 }}
                            />
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/d50075ea58f7a8f8baf5f15d8cc6cc31' }}
                                style={{ height: 150, width: 150 }}
                            />
                        </ScrollView>
                    </View>
                    
                    <View style={styles.otro}>
                        <ScrollView>
                            <Text style={styles.paragraph}>
                                Goku
                            </Text>
                            
                            <Text style={styles.paragraph}>
                                Fav Color: Purple
                            </Text>
                            
                            <Text style={styles.paragraph}>
                                Fav Food: Rice
                            </Text>
                            
                            <Text style={styles.paragraph}>
                                Fav Animal: Dog
                            </Text>
                            
                            <Text style={styles.paragraph}>
                                Fav Flower: Dandelion
                            </Text>
                            
                            <Text style={styles.paragraph}>
                                Fav Friend: Vegeta
                            </Text>
                        </ScrollView>
                        
                    </View>
                    
                </View>
                <View style={styles.itemContainer}>
                    

                    <View style={styles.imageContainer}>
                        <ScrollView>
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/918713b747333c1c87255eaba19088b0' }}
                                style={{ height: 150, width: 150 }}
                            />
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/75cada77983dbca863f0b214be35a1b3' }}
                                style={{ height: 150, width: 150 }}
                            />
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/bf710c6ed4788a9c26b1b95a4f821a2f' }}
                                style={{ height: 150, width: 150 }}
                            />
                        </ScrollView>
                    </View>
                    
                    <View style={styles.otro}>
                        <ScrollView>
                            <Text style={styles.paragraph}>
                                Luffy
                            </Text>
                            
                            <Text style={styles.paragraph}>
                                Fav Color: Red
                            </Text>
                            
                            <Text style={styles.paragraph}>
                                Fav Food: Meat
                            </Text>
                            
                            <Text style={styles.paragraph}>
                                Fav Animal: Whale
                            </Text>
                            
                            <Text style={styles.paragraph}>
                                Fav Flower: Rose
                            </Text>
                            
                            <Text style={styles.paragraph}>
                                Fav Friend: Zoro
                            </Text>
                        </ScrollView>
                    </View>
                    
                </View>
                
                
            </ScrollView>
            </View>
      )
   }
}

const styles = StyleSheet.create ({
    container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
    },
    itemContainer: {
        margin: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        textAlign: 'center',
    },
    paragraph: {
        fontSize: 15,
        fontFamily: 'Helvetica',
        textAlign: 'center',
    },
    
    title: {
        fontSize: 30,
        fontFamily: 'Helvetica',
        textAlign: 'center',
        fontWeight: 'bold',
    },
 
    imageContainer: {
        height: 150,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    
    otro: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    }
});