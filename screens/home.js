import React, { useState, useEffect, Component } from 'react';
// import axios from 'axios'
import { StyleSheet, View, Text, Image, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard, FlatList, Modal } from 'react-native';
import { globalStyles } from '../styles/global';
// import { useIsFocused } from "@react-navigation/native";
import { Card } from 'react-native-elements'
import Animated from 'react-native-reanimated';
// import BottomSheet from 'reanimated-bottom-sheet';
import { BottomSheet } from 'react-native-btr';
export default class Home extends Component {

    state = {
        //     const[trans, setTrans] = useState([])
        // const[balance, setBalance] = useState(0)
        transaction: [],
        // const[associated_bank, setassociated_bank] = useState('')
        username: '',
        conn: '',
        balance: '',
        associated_bank: '',
        forceUpdateHandler: '',
        visible:false
    }
    // constructor() {
    //     super();
    //     this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    // };
    
    getfromAsync = async () => {
        let bal = await AsyncStorage.getItem("balance");
        let bank = await AsyncStorage.getItem("bank")
        this.setState({ balance: bal })
        this.setState({ associated_bank: bank })
    }
    render() {
        
        // const sheetRef = React.useRef(null);
        console.log(this.props.navigation.state.params.username)
        let conn = ''

        let sendinfo = []
        sendinfo.conn = this.state.conn
        sendinfo.username = this.state.username
        // unsubscribe()
        // const cache = new Cache({
        //     namespace: "myapp",
        //     policy: {
        //         maxEntries: 50000
        //     },
        //     backend: AsyncStorage
        // });
        const handlePayment = async () => {
            this.setState({visible:true})
            // this.props.navigation.navigate('Payment', { sendinfo: sendinfo })
        }
        const handleToll = async () => {
            // this.setState({visible:true})
            // console.log('HIHIH')
            this.props.navigation.navigate('Login1', { sendinfo: sendinfo })
        }
        const handleFuel = async () => {
            // this.setState({visible:true})
            this.props.navigation.navigate('Payment', { sendinfo: sendinfo })
        }
        const toggleBottomNavigationView = () => {
            //Toggling the visibility state of the bottom sheet
            const vis = this.state.visible
            this.setState({visible:!vis})
          };
        
        return (
            <View style={globalStyles.container} >
                <Card style={styles.card}>
                    <Card.Title>Driver Details</Card.Title>
                    <Text>Start Point:-{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} Bangalore {"\n"}</Text>
                    <Text>End Point:- {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} Hydrebad {"\n"}</Text>
                    <Text>Start Date:- {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 03/08/21 {"\n"}</Text>
                    <Text>End Date:- {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 05/08/21 {"\n"}</Text>
                    <Text>Fuel Limit:- {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 4000{"\n"}</Text>
                    <Text>Toll Limit:- {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 4000 {"\n"}</Text>
                    <Text>Driver Limit:- {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 4000 {"\n"}</Text>
                    <Text>Driver Money Remaining:- {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 4000{"\n"}</Text>
                    <Text>Toll Money Remaining:- {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 4000 {"\n"}</Text>
                    <Text>Fuel Money Remaining:-  {"\t"} {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} 200 {"\n"}</Text>

                </Card>


                <Button style={styles.button} title='Make Payment' color='#243C84' onPress={handlePayment}></Button>
                {/* <Text style={styles.titleText}>Transaction History a</Text> */}
                {/* <Card>
                <Card.Title>{trans[0].merchant_phone}</Card.Title>
            </Card> */}

                {/* <Card>
                        <Text style={styles.transText}>Transaction history available only in online mode.</Text>
                    </Card>
               
                    <Card>

                      
 
                            <View style={styles.parent}>
                               
                                <Text style={styles.transText}>Yash</Text>
                                <Text style={styles.transText}>50</Text>
                            </View>



                    </Card>
                   */}

                <BottomSheet
                    visible={this.state.visible}
                    //setting the visibility state of the bottom shee
                    onBackButtonPress={toggleBottomNavigationView}
                    //Toggling the visibility state
                    onBackdropPress={toggleBottomNavigationView}
                //Toggling the visibility state
                >
                 <Button style={styles.button1} title='Toll Payment'  onPress={handleToll}></Button>
                 <View style={styles.space} />
                 <Button style={styles.button1} title='Fuel Payment' color='#243C84' onPress={handleFuel}></Button>
                 <View style={styles.space} />
                 <Button style={styles.button1} title='Driver Payment' color='#243C84' onPress={handleFuel}></Button>
                </BottomSheet>
            </View >)
    }
}

const styles = StyleSheet.create({
    space: {
        // width: 20, // or whatever size you need
        height: 10,
      },
    modalToggle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    },
    container: {
        marginTop: '60%'
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        // paddingBottom: '10%',
        paddingTop: '10%'
    },
    button: {
        paddingTop: '10%',
        paddingBottom:'2%',
        
    },
    
    button1: {
        paddingTop: '10%',
        borderRadius:50,
        paddingBottom:'2%',
        height:200,
        color:'#243C84' 
    },
    card: {
        paddingBottom: '10%'
    },
    tinyLogo: {
        width: 65,
        height: 50,
        // alignItems: 'left'
    },
    parent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    transText: {
        fontSize: 16,
        // fontWeight: 'bold',
        // color: '#333',
        // alignItems: 'center',
        // justifyContent: 'center',
        // alignSelf: 'center',
        // // paddingBottom: '10%',
        paddingTop: '5%'
    }
});
