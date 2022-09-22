import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductScreen from '../../screens/ProductScreen';

const Stack = createNativeStackNavigator();

const ProductsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Products" component={ProductScreen} />
    </Stack.Navigator>
  );
};

export default ProductsStack;
