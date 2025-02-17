import { useEffect } from 'react';
import { Image } from 'react-native';
import { Text, YStack } from 'tamagui';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import fonts from '../../components/ui/fonts';
import colors from '../../constants/colors';
import Animated, { useSharedValue, withTiming, useAnimatedStyle, Easing } from 'react-native-reanimated';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Splash'>;

const SplashScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  // Animasi Fade-In & Scale-In
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.8);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 1000, easing: Easing.ease });
    scale.value = withTiming(1, { duration: 1000, easing: Easing.out(Easing.exp) });

    setTimeout(() => {
      opacity.value = withTiming(0, { duration: 500 });
      scale.value = withTiming(1.5, { duration: 500 });

      setTimeout(() => {
        navigation.replace('Main');
      }, 500);
    }, 2000);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  return (
    <YStack flex={1} bg={colors.white} justify="center" items="center">
      <Animated.View style={animatedStyle}>
        <Image
          source={require('../../assets/images/moneyPeople.png')}
          style={{ width: 217, height: 246, resizeMode: 'contain' }}
        />
      </Animated.View>

      <Animated.View style={animatedStyle}>
        <Text fontSize={48} color={colors.blue} mt={10} mb={0} style={fonts.poppinsBold}>
          Flow Pocket
        </Text>
      </Animated.View>

      <Animated.View style={animatedStyle}>
        <Text fontSize={18} mt={-8} color={colors.black} style={fonts.poppinsRegular}>
          Manage Money, Control Life
        </Text>
      </Animated.View>
    </YStack>
  );
};

export default SplashScreen;
