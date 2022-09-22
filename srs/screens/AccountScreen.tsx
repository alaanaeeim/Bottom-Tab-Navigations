import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AccountScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Account Screen</Text>
        </View>
    )
}

export default AccountScreen;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})