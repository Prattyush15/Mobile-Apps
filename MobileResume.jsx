import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.imagine}>
                    <Image
                        source={{ uri: 'https://codehs.com/uploads/7c7bfa2d5c5e4ffed84a4faeb6fdaf37' }}
                        style={{ height: 250, width: 250 }}
                    />
                </View>
                
                <View style={styles.textBox}>
                
                    <Text style={styles.text}>
                        High School: William Mason High School
                    </Text>
                    
                    <View style={styles.empty}>
                    
                    </View>
                    
                    <Text style={styles.text}>
                        Extracurriculars: FTC (Robotics), Model UN, Spanish NHS, Science NHS and Track and Field
                    </Text>
                    
                    <View style={styles.empty}>
                    
                    </View>
                    
                    <Text style={styles.text}>
                        Hobbies: Biking, sports, and video games
                    </Text>
                </View>
                
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
    },
    
    imagine: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'gold',
        borderWidth: 5,
    },
    
    textBox: {
        height: 250,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    text: {
        color: 'gold',
        fontSize: 20,
    },
    
    empty: {
        height: 20,
    },
    
    
});