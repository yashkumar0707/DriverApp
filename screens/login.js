import React, { useState } from 'react';
// import axios from 'axios';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard, FlatList, Modal } from 'react-native';
import { globalStyles } from '../styles/global';
// import { MaterialIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
// import * as yup from 'yup';
// import NetInfo from "@react-native-community/netinfo";
// import AsyncStorage from '@react-native-community/async-storage';




export default function Login({ navigation }) {
    console.disableYellowBox = true;
    const loginHandle = async (values) => {
        console.log(values)

        navigation.navigate('Home', { username: values.username, password: values.password })


    }

    const [username, setUsername] = useState('');
    return (
        <View style={globalStyles.container}>
            <View style={styles.container}>


                <Formik initialValues={{ username: '', password: '', rating: '' }}

                    onSubmit={(values) => {
                        //actions.resetForm()
                        loginHandle(values)
                    }}>
                    {props => (
                        <View>
                            <Text style={styles.titleText}> </Text>
                            <TextInput
                                style={globalStyles.input}
                                placeholder='Username'
                                onChangeText={props.handleChange('username')}
                                value={props.values.username}
                            >
                            </TextInput>
                            <TextInput
                                style={globalStyles.input}
                                placeholder='Password'
                                secureTextEntry={true}
                                onChangeText={props.handleChange('password')}
                                value={props.values.password}
                            >
                            </TextInput>

                            <Button title='Submit' color='#243C84' onPress={() => loginHandle(props.values)}></Button>

                        </View>
                    )}
                </Formik>

            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    modalToggle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#fff',
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
});