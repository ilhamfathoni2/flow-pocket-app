import {Text, YStack} from 'tamagui';
import {RootStackParamList} from '../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import colors from '../../constants/colors';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Menu'>;

const Menu = () => {
  return (
    <YStack flex={1} bg={colors.black}>
      <Text fontSize={20} text="center" color={colors.white}>
        Menu
      </Text>
    </YStack>
  );
};

export default Menu;
