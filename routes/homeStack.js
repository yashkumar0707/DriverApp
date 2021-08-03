import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
// import Header from '../shared/header';
import Home from '../screens/home';
import Login from '../screens/login';
import Payment from '../screens/payment'
import PaymentFinal from '../screens/payment-final'
import Toll from '../screens/payment-toll'
import Transaction from '../screens/transactions';
// import Transaction from '../screens/transaction'
// import ReviewDetails from '../screens/reviewDetails';

const screens = {
    // Home: {
    //     screen: Home,
    //     navigationOptions: ({ navigation }) => {
    //         return {
    //             headerTitle: () => <Header title='GameZonee' navigation={navigation} />
    //         }
    //     },
    // },
    // ReviewDetails: {
    //     screen: ReviewDetails,
    //     navigationOptions: {
    //         title: 'Review Details',
    //     }
    // },
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login',
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
        }
    },
    Payment: {
        screen: Payment,
        navigationOptions: {
            title: 'Payment'
        }
    },
    PaymentFinal: {
        screen: PaymentFinal,
        navigationOptions: {
            title: 'Payment Final'
        }
    },
    Transaction: {
        screen: Transaction,
        navigationOptions: {
            title: 'Transaction'
        }
    },
    Login1: {
        screen: Toll,
        navigationOptions: {
            title: 'Login',
        }
    },
    Toll: {
        screen: Toll,
        navigationOptions: {
            title: 'Login',
        }
    },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 }
    }
});

export default HomeStack;