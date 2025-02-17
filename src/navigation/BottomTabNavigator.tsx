import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Dimensions } from 'react-native';
import { View } from 'tamagui';
import { RootStackParamList } from './types';
import colors from '../constants/colors';
import Animated, { useSharedValue, useDerivedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useIsFocused } from '@react-navigation/native';

// Import Screens
import HomeScreen from '../screens/Home/HomeScreen';
import TrxHistory from '../screens/TrxHistory/TrxHistory';
import Menu from '../screens/Menu/Menu';
import CardSetting from '../screens/CardSetting/CardSetting';

// Import Aset Ikon
const HomeIcon = require('../assets/images/home.png');
const HomeIconActive = require('../assets/images/home-active.png');
const IconTrxHistory = require('../assets/images/chart.png');
const IconTrxHistoryActive = require('../assets/images/chart-active.png');
const MenuIcon = require('../assets/images/menu.png');
const MenuIconActive = require('../assets/images/menu-active.png');
const CardIcon = require('../assets/images/card.png');
const CardIconActive = require('../assets/images/card-active.png');

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomTabNavigator = () => {
  const tabWidth = Dimensions.get('window').width / 4; // 4 tab
  const activeIndex = useSharedValue(0);

  // Gunakan derived value agar animasi mengikuti perubahan state
  const translateX = useDerivedValue(() => withTiming(activeIndex.value * tabWidth, { duration: 300 }));

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: colors.white,
            borderTopWidth: 0,
            height: 86,
            paddingTop: 25,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            position: 'absolute',
            bottom: 0,
          },
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            let iconSource;
            let tabIndex = 0;

            if (route.name === 'Home') {
              iconSource = focused ? HomeIconActive : HomeIcon;
              tabIndex = 0;
            } else if (route.name === 'TrxHistory') {
              iconSource = focused ? IconTrxHistoryActive : IconTrxHistory;
              tabIndex = 1;
            } else if (route.name === 'CardSetting') {
              iconSource = focused ? CardIconActive : CardIcon;
              tabIndex = 2;
            } else if (route.name === 'Menu') {
              iconSource = focused ? MenuIconActive : MenuIcon;
              tabIndex = 3;
            }

            // Update index aktif saat tab berubah
            const isFocused = useIsFocused();
            if (isFocused) {
              activeIndex.value = tabIndex;
            }

            return (
              <View>
                <Image source={iconSource} style={{ width: 24, height: 24, objectFit: 'contain' }} />
              </View>
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="TrxHistory" component={TrxHistory} />
        <Tab.Screen name="CardSetting" component={CardSetting} />
        <Tab.Screen name="Menu" component={Menu} />
      </Tab.Navigator>

      {/* Garis Animasi di Bawah Icon */}
      <View position="absolute" b={20} width="100%" items="center">
        <Animated.View
          style={[
            {
              width: 40,
              height: 4,
              backgroundColor: colors.blue,
              borderRadius: 2,
              position: 'absolute',
            },
            useAnimatedStyle(() => ({
              transform: [{ translateX: translateX.value }],
              left: (tabWidth - 40) / 2, // Pusatkan garis ke tengah tab
            })),
          ]}
        />
      </View>
    </View>
  );
};

export default BottomTabNavigator;
