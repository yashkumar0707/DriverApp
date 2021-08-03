import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard, FlatList, Modal } from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
import { BarCodeScanner } from 'expo-barcode-scanner';
// import QRCodeScanner from 'react-native-qrcode-scanner';
// import { RNCamera } from 'react-native-camera';

export default function Payment({ navigation}) {
    let getinfo = navigation.getParam('sendinfo')
    let username = navigation.getParam('username')
    const [high, sethigh] = useState('')

    const [hasPermission, setHasPermission] = useState(null)
    const [scanned, setScanned] = useState(false)
    const [text, setText] = useState('Not yet scanned')
    const loginHandle = () =>{
        navigation.navigate('Transaction', { sendinfo: "successful" })
    }
    console.log(navigation.state.params.sendinfo)
    return (
        <View style={globalStyles.container}>
            <View style={styles.container}>
                 <Formik initialValues={{ amount: '', number: '' }}

                    onSubmit={(values) => {
                        //actions.resetForm()
                        loginHandle
                    }}>
                    {props => (
                        <View>
                            <Text style={styles.titleText}>Make Payment</Text>
                            
                            <TextInput
                                style={globalStyles.input1}
                                placeholder='Merchant Name'
                                onChangeText={props.handleChange('number')}
                                value={navigation.state.params.sendinfo}
                                // keyboardType='numeric'
                                editable = {false}
                            >
                            </TextInput>
                            <TextInput
                                style={globalStyles.input}
                                placeholder='Enter Amount'
                                onChangeText={props.handleChange('amount')}
                                value={props.values.amount}
                                keyboardType='numeric'
                            >
                            </TextInput>
                            <Button title='Send' color='#243C84' onPress={() => loginHandle(props.values)}></Button>

                            <Text style={styles.titleText}>{high}</Text>
                        </View>
                    )}
                </Formik> 
                
            </View>
        </View >
    );
}


const styles = StyleSheet.create({
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
        paddingBottom: '10%'
    },
    barcodebox: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        overflow: 'hidden',
        borderRadius: 30,
        backgroundColor: '#243C84',
        // borderLeftWidth:20
    }
});