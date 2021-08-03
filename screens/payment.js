import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard, FlatList, Modal } from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
import { BarCodeScanner } from 'expo-barcode-scanner';
// import QRCodeScanner from 'react-native-qrcode-scanner';
// import { RNCamera } from 'react-native-camera';

export default function Payment({ navigation, cache }) {
    let getinfo = navigation.getParam('sendinfo')
    let username = navigation.getParam('username')
    const [high, sethigh] = useState('')

    const [hasPermission, setHasPermission] = useState(null)
    const [scanned, setScanned] = useState(false)
    const [text, setText] = useState('Not yet scanned')
    const askForCameraPermission = () => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })()
    }

    // Request Camera Permission
    useEffect(() => {
        askForCameraPermission();
    }, []);

    // What happens when we scan the bar code
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setText(data)
        console.log('Type: ' + type + '\nData: ' + data)
        navigation.navigate('PaymentFinal', { sendinfo: data})
    };

    // Check permissions and return the screens
    if (hasPermission === null) {
        return (
            <View style={styles.container}>
                <Text>Requesting for camera permission</Text>
            </View>)
    }
    if (hasPermission === false) {
        return (
            <View style={styles.container}>
                <Text style={{ margin: 10 }}>No access to camera</Text>
                <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
            </View>)
    }

    console.log(getinfo.username, getinfo.conn)


    onSuccess = e => {
        console.log('scanned')
    };




    return (
        <View style={globalStyles.container}>
            <View style={styles.container}>
                <View style={styles.barcodebox}>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={{ height: 400, width: 400 }} />
                </View>
                <Text style={styles.maintext}>{text}</Text>

                {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}
                {/* <Formik initialValues={{ amount: '', number: '' }}

                    onSubmit={(values) => {
                        //actions.resetForm()
                        loginHandle
                    }}>
                    {props => (
                        <View>
                            <Text style={styles.titleText}>Make Payment</Text>
                            <TextInput
                                style={globalStyles.input}
                                placeholder='Enter Amount'
                                onChangeText={props.handleChange('amount')}
                                value={props.values.amount}
                                keyboardType='numeric'
                            >
                            </TextInput>
                            <TextInput
                                style={globalStyles.input}
                                placeholder='Recepient Mobile Number'
                                secureTextEntry={true}
                                onChangeText={props.handleChange('number')}
                                value={props.values.mobile}
                                keyboardType='numeric'
                            >
                            </TextInput>

                            <Button title='Send' color='maroon' onPress={() => loginHandle(props.values)}></Button>

                            <Text style={styles.titleText}>{high}</Text>
                        </View>
                    )}
                </Formik> */}
                {/* <QRCodeScanner
                    onRead={this.onSuccess}
                    // flashMode={RNCamera.Constants.FlashMode.torch}
                    topContent={
                        <Text style={styles.centerText}>
                            Go to{' '}
                            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
                            your computer and scan the QR code.
                        </Text>
                    }
                    bottomContent={
                        <TouchableOpacity style={styles.buttonTouchable}>
                            <Text style={styles.buttonText}>OK. Got it!</Text>
                        </TouchableOpacity>
                    }
                /> */}
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