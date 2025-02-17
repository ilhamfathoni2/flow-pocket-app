import React, { useState } from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import colors from '../../constants/colors';

const TabSwitch = () => {
  const [activeTab, setActiveTab] = useState(0);
  const indicatorPosition = useSharedValue(0);

  const handleTabPress = (index: number) => {
    setActiveTab(index);
    indicatorPosition.value = withTiming(index * 100, { duration: 300 });
  };

  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: indicatorPosition.value }],
  }));

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <Pressable style={styles.tab} onPress={() => handleTabPress(0)}>
          <Text style={[styles.tabText, activeTab === 0 && styles.activeText]}>Tab 1</Text>
        </Pressable>
        <Pressable style={styles.tab} onPress={() => handleTabPress(1)}>
          <Text style={[styles.tabText, activeTab === 1 && styles.activeText]}>Tab 2</Text>
        </Pressable>
      </View>
      <Animated.View style={[styles.indicator, animatedIndicatorStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    alignSelf: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 16,
    color: '#FFF',
  },
  activeText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  indicator: {
    width: 100, // Lebar sesuai jumlah tab
    height: 4,
    backgroundColor: colors.softRed,
    borderRadius: 10,
    marginTop: 5,
  },
});

export default TabSwitch;
