import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Shop from './Shop/Shop';

export default class Main extends Component {

    render() {
        return (
            <Shop />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
});
