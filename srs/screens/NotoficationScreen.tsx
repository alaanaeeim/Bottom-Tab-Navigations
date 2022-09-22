import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NotificationScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Notifications Screen</Text>
        </View>
    )
}

export default NotificationScreen;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})