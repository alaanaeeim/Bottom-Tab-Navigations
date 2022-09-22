import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AddProductScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Add Product Screen</Text>
        </View>
    )
}

export default AddProductScreen;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})