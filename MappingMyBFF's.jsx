import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    
     state = {
        naruto: [
            {
                name: 'Naruto',
                color: 'Orange',
                food: 'Ramen',
                animal: 'Fox',
                flower: 'Marigold',
                friend: 'Shikamaru',
            },
        ],
        
        goku: [
        {
                name: 'Goku',
                color: 'Purple',
                food: 'Rice',
                animal: 'Dog',
                flower: 'Dandelion',
                friend: 'Vegeta',
            },
        
        ],
            
        luffy: [
            {
                name: 'Luffy',
                color: 'Red',
                food: 'Meat',
                animal: 'Whale',
                flower: 'Rose',
                friend: 'Zoro',
            },
 
        ]
            
        
    }
  
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
                    
                    <ScrollView>
                        {this.state.naruto.map((item) => (
                            <View style={styles.otro}>
                                <Text style={styles.text}>
                                    Name: {item.name}
                                </Text>
                                <Text style={styles.text}>
                                    Fav Color: {item.color}
                                </Text>
                                
                                <Text style={styles.text}>
                                    Fav Food: {item.food}
                                </Text>
                                
                                <Text style={styles.text}>
                                    Fav Animal: {item.animal}
                                </Text>
                                
                                <Text style={styles.text}>
                                    Fav Flower: {item.flower}
                                </Text>
                                
                                <Text style={styles.text}>
                                    Fav Friend: {item.friend}
                                </Text>
                                
                             </View>
                        ))}
                    </ScrollView>
                
                    
                    
                    
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
                    
                    <ScrollView>
                        {this.state.goku.map((item) => (
                            <View style={styles.otro}>
                                <Text style={styles.text}>
                                    Name: {item.name}
                                </Text>
                                <Text style={styles.text}>
                                    Fav Color: {item.color}
                                </Text>
                                
                                <Text style={styles.text}>
                                    Fav Food: {item.food}
                                </Text>
                                
                                <Text style={styles.text}>
                                    Fav Animal: {item.animal}
                                </Text>
                                
                                <Text style={styles.text}>
                                    Fav Flower: {item.flower}
                                </Text>
                                
                                <Text style={styles.text}>
                                    Fav Friend: {item.friend}
                                </Text>
                                
                             </View>
                        ))}
                    </ScrollView>
                        
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
                    
                    <ScrollView>
                        {this.state.luffy.map((item) => (
                            <View style={styles.otro}>
                                <Text style={styles.text}>
                                    Name: {item.name}
                                </Text>
                                <Text style={styles.text}>
                                    Fav Color: {item.color}
                                </Text>
                                
                                <Text style={styles.text}>
                                    Fav Food: {item.food}
                                </Text>
                                
                                <Text style={styles.text}>
                                    Fav Animal: {item.animal}
                                </Text>
                                
                                <Text style={styles.text}>
                                    Fav Flower: {item.flower}
                                </Text>
                                
                                <Text style={styles.text}>
                                    Fav Friend: {item.friend}
                                </Text>
                                
                             </View>
                        ))}
                    </ScrollView>
                    
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
    text: {
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