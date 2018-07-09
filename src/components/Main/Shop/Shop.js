import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { TabBar } from '../../Route/Route';
import Header from './Header';

export default class Shop extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header />
                <TabBar />
            </View>

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
