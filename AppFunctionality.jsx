import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions, ScrollView } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    
    state={
        mainPageDisplay: 'block',
        place1PageDisplay: 'none',
        place2PageDisplay: 'none',
        place3PageDisplay: 'none',
        place4PageDisplay: 'none',
        place5PageDisplay: 'none',
        
       
        
    }

    mainPagePress = () => this.setState(state => ({
        mainPageDisplay: 'block',
        place1PageDisplay: 'none',
        place2PageDisplay: 'none',
        place3PageDisplay: 'none',
        place4PageDisplay: 'none',
        place5PageDisplay: 'none',

    }));
    
    place1PagePress = () => this.setState(state => ({
        mainPageDisplay: 'none',
        place1PageDisplay: 'block',
        place2PageDisplay: 'none',
        place3PageDisplay: 'none',
        place4PageDisplay: 'none',
        place5PageDisplay: 'none',

    }));
    
    place2PagePress = () => this.setState(state => ({
        mainPageDisplay: 'none',
        place1PageDisplay: 'none',
        place2PageDisplay: 'block',
        place3PageDisplay: 'none',
        place4PageDisplay: 'none',
        place5PageDisplay: 'none',

    }));
    
    place3PagePress = () => this.setState(state => ({
        mainPageDisplay: 'none',
        place1PageDisplay: 'none',
        place2PageDisplay: 'none',
        place3PageDisplay: 'block',
        place4PageDisplay: 'none',
        place5PageDisplay: 'none',

    }));
    
    place4PagePress = () => this.setState(state => ({
        mainPageDisplay: 'none',
        place1PageDisplay: 'none',
        place2PageDisplay: 'none',
        place3PageDisplay: 'none',
        place4PageDisplay: 'block',
        place5PageDisplay: 'none',

    }));
    
    place5PagePress = () => this.setState(state => ({
        mainPageDisplay: 'none',
        place1PageDisplay: 'none',
        place2PageDisplay: 'none',
        place3PageDisplay: 'none',
        place4PageDisplay: 'none',
        place5PageDisplay: 'block',

    }));
    
    render() {
        return (
            <View style={styles.container}>
                <View style={{ display: this.state.mainPageDisplay }}>
                    <Text style={styles.titleText}>
                        Top 5 places to visit in 2021!
                    </Text>
                    
                    <TouchableHighlight
                         onPress={this.place1PagePress}
                    >
                        <View style={styles.button}>
                            <Text style={styles.paragraph}>
                                Kenya
                            </Text>
                        </View>
                    </TouchableHighlight>
                    
                    <TouchableHighlight
                         onPress={this.place2PagePress}
                    >
                        <View style={styles.button}>
                            <Text style={styles.paragraph}>
                                Costa Rica
                            </Text>
                        </View>
                    </TouchableHighlight>
                    
                    <TouchableHighlight
                         onPress={this.place3PagePress}
                    >
                        <View style={styles.button}>
                            <Text style={styles.paragraph}>
                                British Virgin Islands
                            </Text>
                        </View>
                    </TouchableHighlight>
                    
                    <TouchableHighlight
                         onPress={this.place4PagePress}
                    >
                        <View style={styles.button}>
                            <Text style={styles.paragraph}>
                                New Zealand
                            </Text>
                        </View>
                    </TouchableHighlight>
                    
                    <TouchableHighlight
                         onPress={this.place5PagePress}
                    >
                        <View style={styles.button}>
                            <Text style={styles.paragraph}>
                                Paris
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                
                <View style={{ display: this.state.place1PageDisplay }}>
                    
                    <View style={styles.contentContainer}>
                        <ScrollView>
                        <View style={styles.text1}>
                            <Text style={styles.titleText}>
                                Welcome to Kenya!
                            </Text>
                            
                            <Text style={styles.description}>
                                Description:
                            </Text>
                        </View>
                        
                        <View style={styles.text2}>
                            <ScrollView>
                                <Text style={styles.paragraph2}>
                                    Kenya has been in the tourism game longer than virtually any other African country – and it shows. Other nations may boast higher mountains, bigger game reserves, more exclusive lodges and more exotic culture, but Kenya’s decades of experience means it still tops many travellers’ lists, with superb service, tried and tested itineraries, and the understanding that its people are as important as its wildlife in creating the perfect East African holiday. Kenya’s vast grasslands are safari-classic, with wildlife as far as the eye can see; the only interruptions being a scattering of acacia trees and life-giving waterholes. (Responsible Travel)
                                </Text>
                            </ScrollView>
                        </View>
                        
                        
                        <View style={styles.text1}>
                        
                            <Text style={styles.titleText}>
                                Images: 
                            </Text>
                        </View>
                        
                        <View style={styles.images}>
                            <ScrollView>
                                <Image
                                    source={'https://codehs.com/uploads/f47e09ea3be112143eb1af4e57261f62'}
                                    style={{ height: 200, width: 300 }}
                                ></Image>
                                
                                <Image
                                    source={'https://codehs.com/uploads/633e98d29571cea9b48b834a07210b69'}
                                    style={{ height: 200, width: 300 }}
                                ></Image>
                                
                                <Image
                                    source={'https://codehs.com/uploads/80eb385e97a6944461508f38c07011d3'}
                                    style={{ height: 200, width: 300 }}
                                ></Image>
                                
                            </ScrollView>
                        </View>
                        
                        
                        <View style={styles.text1}>
                            <Text style={styles.titleText}>
                                Top 5 things to do here: 
                            </Text>
                        </View>
                        <View style={styles.text2}>
                            <ScrollView>
                                
                                
                                <Text style={styles.paragraph2}>
                                    1. Summit Mount Kenya
                                </Text>
                                
                                <Text style={styles.paragraph2}>
                                    2. Watch the Great Migration in Masai Maraa
                                </Text>
                                
                                <Text style={styles.paragraph2}>
                                    3. Soak up sea, sun & sand at Diani
                                </Text>
                                
                                <Text style={styles.paragraph2}>
                                    4. Foster orphaned elephants (or a blind rhino)
                                </Text>
                                
                                <Text style={styles.paragraph2}>
                                    5. Ride the new Nairobi-Mombassa train
                                </Text>
                                
                                
                            </ScrollView>
                        </View>
                        
                        <View style = {styles.text1}>
                            <TouchableHighlight
                                onPress={this.mainPagePress}
                            >
                                <View style={styles.button}>
                                    <Text style={styles.paragraph}>
                                        Main Page
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                            
                    </ScrollView>
                    </View>
                </View>
                
                <View style={{ display: this.state.place2PageDisplay }}>
                    <View style={styles.contentContainer}>
                        <ScrollView>
                        <View style={styles.text1}>
                            <Text style={styles.titleText}>
                                Welcome to Costa Rica!
                            </Text>
                            
                            <Text style={styles.description}>
                                Description:
                            </Text>
                        </View>
                        
                        <View style={styles.text2}>
                            <ScrollView>
                                <Text style={styles.paragraph2}>
                                    To many, Costa Rica's charm lies in its lush rainforests, unspoiled beaches and abundance of wildlife. With breathtaking landscapes and a myriad of creatures – from toucans to monkeys to jaguars – it's easy to see why. Where else can you hike active volcanoes, zip line through cloud-covered rainforests and surf warm turquoise waters within the span of just a few days? In this compact but diverse tropical paradise, exhilarating outdoor activities are abundant. Nature-seekers will roam thick jungles while beachgoers will sprawl across the powdery sands. It's hard not to admire all the splendors this "Rich Coast" has to offer.
                                </Text>
                                
                                <Text style={styles.paragraph2}>
                                    However, for others, this small Latin American country has a different appeal: it's a relaxed way of life. Residents – known as Ticos – often recite the catchphrase "pura vida" (or "pure life"). This guiding philosophy can be observed from Costa Rica's central cosmopolitan capital of San José all the way to the sandy Atlantic and Pacific coasts. To truly immerse yourself in the good life, kick back and admire the awe-inspiring scenery. Surround yourself with graceful butterflies at La Paz Waterfall Gardens, hike along the monumental Arenal Volcano, mingle with locals at Puerto Viejo de Talamanca, or simply sit in a hammock under a palm tree along the Nicoya Peninsula. We have a strong feeling you'll discover the pure life, too. (US News)
                                </Text>
                            </ScrollView>
                        </View>
                        
                        
                        <View style={styles.text1}>
                        
                            <Text style={styles.titleText}>
                                Images: 
                            </Text>
                        </View>
                        
                        <View style={styles.images}>
                            <ScrollView>
                                <Image
                                    source={'https://codehs.com/uploads/3f7842df63c2dade5801f3374eb0c2f8'}
                                    style={{ height: 200, width: 300 }}
                                ></Image>
                                
                                <Image
                                    source={'https://codehs.com/uploads/2a19d886505a55cc646ec32f3fc5e65d'}
                                    style={{ height: 200, width: 300 }}
                                ></Image>
                                
                                <Image
                                    source={'https://codehs.com/uploads/3c24aef94ff7e699f09355b2d7bbd1e0'}
                                    style={{ height: 200, width: 300 }}
                                ></Image>
                                
                            </ScrollView>
                        </View>
                        
                        
                        <View style={styles.text1}>
                            <Text style={styles.titleText}>
                                Top 5 things to do here: 
                            </Text>
                        </View>
                        <View style={styles.text2}>
                            <ScrollView>
                                
                                
                                <Text style={styles.paragraph2}>
                                    1. Visit Teatro Nacional Costa Rica
                                </Text>
                                
                                <Text style={styles.paragraph2}>
                                    2. Visit La Fortuna Waterfall
                                </Text>
                                
                                <Text style={styles.paragraph2}>
                                    3. Soak up sea, sun & sand at Tamarindo Beach
                                </Text>
                                
                                <Text style={styles.paragraph2}>
                                    4. Soak up sea, sun & sand at Playa Manuel Antonio
                                </Text>
                                
                                <Text style={styles.paragraph2}>
                                    5. Visit Curi Cancha Reserve
                                </Text>
                                
                                
                            </ScrollView>
                        </View>
                        
                        <View style = {styles.text1}>
                            <TouchableHighlight
                                onPress={this.mainPagePress}
                            >
                                <View style={styles.button}>
                                    <Text style={styles.paragraph}>
                                        Main Page
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                            
                    </ScrollView>
                    </View>
                </View>
                
                <View style={{ display: this.state.place3PageDisplay }}>
                    <View style={styles.contentContainer}>
                        <ScrollView>
                        <View style={styles.text1}>
                            <Text style={styles.titleText}>
                                Welcome to the British Virgin Islands!
                            </Text>
                            
                            <Text style={styles.description}>
                                Description:
                            </Text>
                        </View>
                        
                        <View style={styles.text2}>
                            <ScrollView>
                                <Text style={styles.paragraph2}>
                                    The British Virgin Islands, or BVI for short, are some of the most-exclusive and least-developed islands of the Caribbean, but this only adds to their appeal. The resorts, villas, restaurants and other tourist attractions in this paradise are known to emphasize spare luxury over sprawling expansion, and they attract travelers with deep pockets and a love for sailing and seclusion. Many travelers who visit come by ferry boat from another Caribbean isle, especially as some find opulent exile too hard to enjoy for longer than a day or two. And some say it's better to split your time between here, the nearby U.S. Virgin Islands and Anguilla to the east.
                                </Text>
                                
                                <Text style={styles.paragraph2}>
                                    Others find more than enough to keep them exclusively anchored by these 50-plus islands and cays, which sadly were hit hard by Hurricane Irma in September 2017. Travelers will still be able to find evidence of the hurricane's handiwork, though BVI has done a valiant job of rebuilding. On Tortola, you'll find mountainous cliffs and chalk white beaches, characterized by changing tides and calm easterly winds. A brief sail away, sleepy Jost Van Dyke offers delicious Caribbean food and drink, one of the region's best New Year's Eve parties, as well as a few outdoor excursions like diving and fishing. On Virgin Gorda, you'll find The Baths, perhaps the most picturesque shore in the British Virgin Islands, and with good reason: It offers unique grottoes amidst gigantic granite boulders (just be mindful of the daytripping crowds). For supreme seclusion, try Anegada; its slow pace, flat terrain and sparkling sand lies almost overlooked in Caribbean Sea. (US News)
                                </Text>
                            </ScrollView>
                        </View>
                        
                        
                        <View style={styles.text1}>
                        
                            <Text style={styles.titleText}>
                                Images: 
                            </Text>
                        </View>
                        
                        <View style={styles.images}>
                            <ScrollView>
                                <Image
                                    source={'https://codehs.com/uploads/09df965c64478302be7e842e609c6bc9'}
                                    style={{ height: 200, width: 300 }}
                                ></Image>
                                
                                <Image
                                    source={'https://codehs.com/uploads/d243cbb956fe6b77dfe2d88ccebcd9b4'}
                                    style={{ height: 200, width: 300 }}
                                ></Image>
                                
                                <Image
                                    source={'https://codehs.com/uploads/65315c5b24822aac9def050e01482571'}
                                    style={{ height: 200, width: 300 }}
                                ></Image>
                                
                            </ScrollView>
                        </View>
                        
                        
                        <View style={styles.text1}>
                            <Text style={styles.titleText}>
                                Top 5 things to do here: 
                            </Text>
                        </View>
                        <View style={styles.text2}>
                            <ScrollView>
                                
                                
                                <Text style={styles.paragraph2}>
                                    1. Visit The Baths
                                </Text>
                                
                                <Text style={styles.paragraph2}>
                                    2. Visit Cane Garden Bay
                                </Text>
                                
                                <Text style={styles.paragraph2}>
                                    3. Visit Anegada Island
                                </Text>
                                
                                <Text style={styles.paragraph2}>
                                    4. Visit Smuggler's Cove
                                </Text>
                                
                                <Text style={styles.paragraph2}>
                                    5. Visit Brewers Bay
                                </Text>
                                
                                
                            </ScrollView>
                        </View>
                        
                        <View style = {styles.text1}>
                            <TouchableHighlight
                                onPress={this.mainPagePress}
                            >
                                <View style={styles.button}>
                                    <Text style={styles.paragraph}>
                                        Main Page
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                            
                    </ScrollView>
                    </View>
                </View>
                
                <View style={{ display: this.state.place4PageDisplay }}>
                    <View style={styles.contentContainer}>
                        <ScrollView>
                        <View style={styles.text1}>
                            <Text style={styles.titleText}>
                                Welcome to New Zealand!
                            </Text>
                            
                            <Text style={styles.description}>
                                Description:
                            </Text>
                        </View>
                        
                        <View style={styles.text2}>
                            <ScrollView>
                                <Text style={styles.paragraph2}>
                                    Across New Zealand, you can find everything from untamed wilderness to rich culture. Find inspiration in towering mountains and mist-cloaked fjords. Serenity in golden beaches curled around quiet bays. New friends in small towns with big doses of laid-back charm. When the world starts to move again, find your dream destination here. (NewZealand.com)
                                </Text>
                                
                            </ScrollView>
                        </View>
                        
                        
                        <View style={styles.text1}>
                        
                            <Text style={styles.titleText}>
                                Images: 
                            </Text>
                        </View>
                        
                        <View style={styles.images}>
                            <ScrollView>
                                <Image
                                    source={'https://codehs.com/uploads/cd531446b1e014a578a41ff05c88e5ca'}
                                    style={{ height: 200, width: 300 }}
                                ></Image>
                                
                                <Image
                                    source={'https://codehs.com/uploads/5c034e173ebb0ebc4b0f1671f07422fd'}
                                    style={{ height: 200, width: 300 }}
                                ></Image>
                                
                                <Image
                                    source={'https://codehs.com/uploads/80161a7400a9b85b9cae4bbd9c5cce64'}
                                    style={{ height: 200, width: 300 }}
                                ></Image>
                                
                            </ScrollView>
                        </View>
                        
                        
                        <View style={styles.text1}>
                            <Text style={styles.titleText}>
                                Top 5 things to do here: 
                            </Text>
                        </View>
                        <View style={styles.text2}>
                            <ScrollView>
                                
                                
                                <Text style={styles.paragraph2}>
                                    1. Visit Fiordland National Park and Milford Sound, South Island
                                </Text>
                                
                                <Text style={styles.paragraph2}>
                                    2. Visit Bay of Islands, North Island
                                </Text>
                                
                                <Text style={styles.paragraph2}>
                                    3. Visit Queenstown, South Island
                                </Text>
                                
                                <Text style={styles.paragraph2}>
                                    4. Visit Lake Taupo and Tongariro National Park, North Island
                                </Text>
                                
                                <Text style={styles.paragraph2}>
                                    5. Visit Rotorua, North Island
                                </Text>
                                
                                
                            </ScrollView>
                        </View>
                        
                        <View style = {styles.text1}>
                            <TouchableHighlight
                                onPress={this.mainPagePress}
                            >
                                <View style={styles.button}>
                                    <Text style={styles.paragraph}>
                                        Main Page
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                            
                    </ScrollView>
                    </View>
                </View>
                
                <View style={{ display: this.state.place5PageDisplay }}>
                    <View style={styles.contentContainer}>
                        <ScrollView>
                        <View style={styles.text1}>
                            <Text style={styles.titleText}>
                                Welcome to Paris!
                            </Text>
                            
                            <Text style={styles.description}>
                                Description:
                            </Text>
                        </View>
                        
                        <View style={styles.text2}>
                            <ScrollView>
                                <Text style={styles.paragraph2}>
                                    The City of Light draws millions of visitors every year with its unforgettable ambiance. Of course, the divine cuisine and vast art collections deserve some of the credit as well. The gentle River Seine rambles through the city, flanked by stately museums, centuries-old churches, and blocks of Rococo- and Neoclassic-design architecture, further enhanced by cascading trees and glowing streetlamps. Peppering the Seine's cobbled walks and graceful bridges are impossibly chic Parisians, probably on their way to the market, cafe or cinema.
                                </Text>
                                
                                <Text style={styles.paragraph2}>
                                    Containing world-class museums, fashion, cuisine and an atmosphere all its own, Paris is also a city of "many splendors," as Ernest Hemingway recalled in his memoir, "A Moveable Feast." Visit the beloved Musée d'Orsay, shop the biggest designers on the Champs Élysées or hit the boutiques in Le Marais, take in the view atop the Eiffel Tower, or even plan a day trip to Versailles Palace. But don't miss out on the simple pleasure of meandering the marvelous arrondissements (districts), or snacking on street crepes either. (US News)
                                </Text>
                                
                            </ScrollView>
                        </View>
                        
                        
                        <View style={styles.text1}>
                        
                            <Text style={styles.titleText}>
                                Images: 
                            </Text>
                        </View>
                        
                        <View style={styles.images}>
                            <ScrollView>
                                <Image
                                    source={'https://codehs.com/uploads/e45053530041cf33ef0e13f62701f1ab'}
                                    style={{ height: 200, width: 300 }}
                                ></Image>
                                
                                <Image
                                    source={'https://codehs.com/uploads/6477a60211f736e201001ae1a3b5ff82'}
                                    style={{ height: 200, width: 300 }}
                                ></Image>
                                
                                <Image
                                    source={'https://codehs.com/uploads/23a71ba423ef66d9642b15bb1ec1b12f'}
                                    style={{ height: 200, width: 300 }}
                                ></Image>
                                
                            </ScrollView>
                        </View>
                        
                        
                        <View style={styles.text1}>
                            <Text style={styles.titleText}>
                                Top 5 things to do here: 
                            </Text>
                        </View>
                        <View style={styles.text2}>
                            <ScrollView>
                                
                                
                                <Text style={styles.paragraph2}>
                                    1. Visit Musée d'Orsay
                                </Text>
                                
                                <Text style={styles.paragraph2}>
                                    2. Visit Cathédrale Notre-Dame de Paris
                                </Text>
                                
                                <Text style={styles.paragraph2}>
                                    3. Visit Sainte-Chapelle
                                </Text>
                                
                                <Text style={styles.paragraph2}>
                                    4. Visit Palais Garnier

                                </Text>
                                
                                <Text style={styles.paragraph2}>
                                    5. Visit Eiffel Tower
                                </Text>
                                
                                
                            </ScrollView>
                        </View>
                        
                        <View style = {styles.text1}>
                            <TouchableHighlight
                                onPress={this.mainPagePress}
                            >
                                <View style={styles.button}>
                                    <Text style={styles.paragraph}>
                                        Main Page
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                            
                    </ScrollView>
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
    },
    
    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    },
    
    button: {
        height: deviceHeight/8,
        width: deviceWidth,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
   
    paragraph: {
        margin: 5,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
    
    description: {
        margin: 5,
        fontSize: 30,
        textAlign: 'center',
        color: 'black',
    },
    
    paragraph2: {
        margin: 5,
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
    },
    
    text1: {
        width: deviceWidth,
        height: deviceHeight/4,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        marginTop: 5,
    },
    
    text2: {
        width: deviceWidth,
        height: deviceHeight/2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 2,

    },
    
    images: {
        width: deviceWidth,
        height: deviceHeight/2,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 2,
    },
    
    contentContainer: {
        height: 7*(deviceHeight/7),
        width: deviceWidth,
        alignItems: 'center',
    },    

});