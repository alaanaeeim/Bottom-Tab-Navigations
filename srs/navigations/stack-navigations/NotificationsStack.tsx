import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NotificationScreen from '../../screens/NotoficationScreen';

const Stack = createNativeStackNavigator();

const NotificationsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notifications" component={NotificationScreen} />
    </Stack.Navigator>
  );
};

export default NotificationsStack;
