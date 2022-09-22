import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ProductScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Products Screen</Text>
        </View>
    )
}

export default ProductScreen;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})