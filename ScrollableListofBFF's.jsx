import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, ScrollView } from 'react-native';
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
                    
                    <Image
                        source={{ uri: 'https://codehs.com/uploads/96108652663a2b9e440fb92d9997983b' }}
                        style={{ height: 150, width: 150 }}
                    />
                    
                    <View style={styles.otro}>
                        <Text style={styles.paragraph}>
                            Naruto
                        </Text>
                        
                        <Text style={styles.paragraph}>
                            Fav Color: Orange
                        </Text>
                        
                        <Text style={styles.paragraph}>
                            Fav Food: Ramen
                        </Text>
                    </View>
                    
                    
                </View>
                <View style={styles.itemContainer}>
                    
                    <Image
                        source={{ uri: 'https://codehs.com/uploads/fa75a58a29bea58aa0d5c8793c440241' }}
                        style={{ height: 150, width: 150 }}
                    />
                    
                    <View style={styles.otro}>
                        <Text style={styles.paragraph}>
                            Goku
                        </Text>
                        
                        <Text style={styles.paragraph}>
                            Fav Color: Purple
                        </Text>
                        
                        <Text style={styles.paragraph}>
                            Fav Food: Rice
                        </Text>
                    </View>
                    
                </View>
                <View style={styles.itemContainer}>
                    
                    <Image
                        source={{ uri: 'https://codehs.com/uploads/918713b747333c1c87255eaba19088b0' }}
                        style={{ height: 150, width: 150 }}
                    />
                    
                    <View style={styles.otro}>
                        <Text style={styles.paragraph}>
                            Luffy
                        </Text>
                        
                        <Text style={styles.paragraph}>
                            Fav Color: Red
                        </Text>
                        
                        <Text style={styles.paragraph}>
                            Fav Food: Meat
                        </Text>
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
 
    
    otro: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    }
});