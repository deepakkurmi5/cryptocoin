import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import type {ImageSourcePropType} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';

import {HomeTabParamsList} from './types';
import Home from '../screens/home';
import Portfolio from '../screens/portfolio';
import Transactions from '../screens/transactions';
import Prices from '../screens/prices';
import Settings from '../screens/settings';

import {icons} from '../constants';
import {colors, fonts} from '../theme';

const Tab = createBottomTabNavigator<HomeTabParamsList>();

interface TabBarIconProps {
  source: ImageSourcePropType;
  focused: boolean;
  header: string;
}

function TabBarIcon({source, focused, header}: TabBarIconProps) {
  return (
    <View style={styles.iconContainer}>
      <Image
        resizeMode="contain"
        source={source}
        style={[
          styles.iconStyle,
          {
            tintColor: focused ? colors.primary : colors.black,
          },
        ]}
      />
      <Text
        style={{
          color: focused ? colors.primary : colors.black,
          ...fonts.body5,
        }}>
        {header}
      </Text>
    </View>
  );
}

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: 'white',
          borderTopColor: 'transparent',
          height: 100,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              focused={focused}
              source={icons.homeIcon}
              header="Home"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              focused={focused}
              source={icons.portfolioIcon}
              header="Portfolio"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={Transactions}
        options={{
          tabBarIcon: () => (
            <Image
              resizeMode="contain"
              source={icons.transitionIcon}
              style={[
                styles.iconStyle,
                {
                  tintColor: colors.white,
                },
              ]}
            />
          ),
          tabBarButton: props => (
            <TouchableOpacity style={styles.TransitionBtnStyle}>
              <LinearGradient
                colors={[colors.primary, colors.secondary]}
                style={styles.LinearStyle}>
                {props.children}
              </LinearGradient>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Prices"
        component={Prices}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              focused={focused}
              source={icons.lineChartIcon}
              header="Prices"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              focused={focused}
              source={icons.settingIcon}
              header="Settings"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    width: 28,
    height: 28,
  },
  TransitionBtnStyle: {
    top: -30,
    justifyContent: 'center',
    alignContent: 'center',
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {width: -2, height: 4},
  },
  LinearStyle: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});

export default Tabs;
