import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    
    render() {
        return (
            <View style={styles.container}>
            
            <ScrollView>
                <View style={styles.itemContainer}>
                    <Text style={styles.paragraph}>
                        Grand Canyon
                    </Text>
                    <Image
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Dawn_on_the_S_rim_of_the_Grand_Canyon_%288645178272%29.jpg' }}
                        style={{ height: 200, width: 300 }}
                    />
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.paragraph}>
                        Yosemite
                    </Text>
                    <Image
                        source={{ uri: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/F155380D-1DD8-B71B-0B9A465C3EE41D81.jpg?width=950&quality=90&mode=crop' }}
                        style={{ height: 200, width: 300 }}
                    />
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.paragraph}>
                        Yellowstone
                    </Text>
                    <Image
                        source={{ uri: 'https://www.yellowstonepark.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_620/MTQ3MzIwMDY4Nzk5NjY5NzEw/yellowstone-wildlife-buffalo-79.jpg' }}
                        style={{ height: 200, width: 300 }}
                    />
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.paragraph}>
                        Bryce Canyon
                    </Text>
                    <Image
                        source={{ uri: 'https://www.nps.gov/common/uploads/grid_builder/imr/crop16_9/501D7125-1DD8-B71B-0B4AE905CF620734.jpg?width=465&quality=90&mode=crop' }}
                        style={{ height: 200, width: 300 }}
                    />
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
        justifyContent: 'center'
    },
    paragraph: {
        fontSize: 20,
        fontFamily: 'Helvetica',
        textAlign: 'center',
    }
});