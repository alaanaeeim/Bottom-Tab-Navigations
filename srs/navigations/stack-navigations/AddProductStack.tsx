import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddProductScreen from '../../screens/AddProductScreen';

const Stack = createNativeStackNavigator();

const AddProductStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Add Product" component={AddProductScreen} />
    </Stack.Navigator>
  );
};

export default AddProductStack;
