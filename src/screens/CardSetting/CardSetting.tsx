import {Text, YStack} from 'tamagui';
import {RootStackParamList} from '../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import colors from '../../constants/colors';
import SwitchComp, { styleSw } from '../../components/cards/Switch';
import { useSharedValue } from 'react-native-reanimated';
import TabSwitch from '../../components/cards/Tab';

type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'CardSetting'
>;

const CardSetting = () => {
  const isOn = useSharedValue(false);

  const handlePress = () => {
    isOn.value = !isOn.value;
  };

  return (
    <YStack flex={1} bg={colors.black} justify="center" items="center">
      <TabSwitch />
    </YStack>
  );
};

export default CardSetting;
