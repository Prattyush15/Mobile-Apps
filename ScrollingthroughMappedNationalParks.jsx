import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    
    state = {
        nationalParks: [
            {
                name: 'Grand Canyon',
                location: 'Arizona',
                image: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Dawn_on_the_S_rim_of_the_Grand_Canyon_%288645178272%29.jpg'
            },
            {
                name: 'Bryce Canyon',
                location: 'Utah',
                image: 'https://www.nationalgeographic.com/content/dam/travel/2019-digital/bryce-canyon-national-park-utah/01-bryce-canyon-national-park-utah.jpg',
            },
            {
                name: 'Yosemite',
                location: 'California',
                image: 'https://www.nationalgeographic.com/content/dam/travel/2019-digital/yosemite-guide/yosemite-national-park-california.jpg'
            }
        ]
    }
    
    render() {
        return (
            <View style={styles.container}>
            
                <ScrollView>
                
                    {this.state.nationalParks.map((park) => (
                        <View style={styles.itemContainer}>
                            <Text style={styles.text}>
                                {park.name}
                            </Text>
                            <Text style={styles.text}>
                                {park.location}
                            </Text>
                            
                            <Image
                                source={park.image}
                                style={{ height: 200, width: 300 }}
                            ></Image>
                         </View>
                    ))}
                
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
    },
    text: {
        fontSize: 20,
        fontFamily: 'Helvetica',
        textAlign: 'center',
    }
});