/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeStack from '../stack-navigations/HomeStack';
import ProductsStack from '../stack-navigations/ProductsStack';
import AddProductStack from '../stack-navigations/AddProductStack';
import NotificationsStack from '../stack-navigations/NotificationsStack';
import AccountStack from '../stack-navigations/AccountStack';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  const producCartNumber: number = 12;
  return (
    <Tab.Navigator
        screenOptions={({route}) => {
        const labels: any = {
          home: 'Home',
          products: 'Products',
          addProduct: 'Add',
          notifications: 'Notifications',
          account: 'Account',
        };

        const icons: any = {
          home: 'home',
          products: 'cart',
          addProduct: 'add',
          notifications: 'notifications',
          account: 'person',
        };

        return {
          tabBarLabel: ({focused}) => {
            if (route.name === 'addProduct') {
              return;
            }

            return (
              <Text style={[styles.label, {color: focused ? 'blue' : 'grey'}]}>
                {labels[route.name]}
              </Text>
            );
          },

          tabBarIcon: ({focused}) => {
            if (route.name === 'addProduct') {
              return (
                <View style={[styles.addProduct, {backgroundColor: focused ? 'blue' : 'white'}]}>
                  <Icon
                    size={30}
                    style={{color: focused ? 'white' : 'grey', fontWeight: 'bold'}}
                    name={icons[route.name]}
                  />
                </View>
              );
            }
            return (
              <Icon
                size={24}
                style={{color: focused ? 'blue' : 'grey'}}
                name={icons[route.name]}
              />
            );
          },

          tabBarActiveTintColor: 'blue',
          tabBarStyle: {
            paddingVertical: 5,
            borderTopWidth: 1.5,
            borderTopColor: 'blue'
          },
          headerShown: false,
        };
      }}>
      <Tab.Screen name="home" component={HomeStack} />
      <Tab.Screen
        name="products"
        component={ProductsStack}
        options={{
          tabBarBadge: producCartNumber,
          tabBarBadgeStyle: {color: 'white', fontSize: 13, fontWeight: 'bold'},
        }}
      />
      <Tab.Screen name="addProduct" component={AddProductStack}/>
      <Tab.Screen name="notifications" component={NotificationsStack} />
      <Tab.Screen name="account" component={AccountStack} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  addProduct: {
    width: 45,
    height: 45,
    position: 'absolute',
    top: -25,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'blue'
  }
});

export default HomeTabs;
