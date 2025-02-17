import {Button, Text, View, XStack, YStack} from 'tamagui';
import {useState} from 'react';
import {RootStackParamList} from '../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import colors from '../../constants/colors';
import TrxLineChart from '../../components/charts/TrxLineChart';
import fonts from '../../components/ui/fonts';
import ListTrx from '../../components/listTrx/ListTrx';

type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'TrxHistory'
>;

const TrxHistory = () => {
  const [tab, setTab] = useState(0);

  return (
    <YStack flex={1} bg={colors.black} px={16}>
      <Text
        fontSize={24}
        text="left"
        mt={28}
        mb={15}
        color={colors.white}
        style={fonts.poppinsMedium}>
        Transaction History
      </Text>

      <XStack justify="space-between" items="center" mb={20}>
        <Button
          onPress={() => setTab(0)}
          width="45%"
          bg={tab === 0 ? colors.lightRed : colors.almostBlack}>
          <Text
            fontSize={16}
            color={colors.white}
            style={fonts.poppinsSemiBold}>
            Expense
          </Text>
        </Button>
        <Button
          onPress={() => setTab(1)}
          width="45%"
          fontSize={16}
          bg={tab === 1 ? colors.green : colors.almostBlack}
          color={colors.white}
          style={fonts.poppinsSemiBold}>
          <Text
            fontSize={16}
            color={colors.white}
            style={fonts.poppinsSemiBold}>
            Income
          </Text>
        </Button>
      </XStack>

      <TrxLineChart tab={tab} />
      <View my={16} />
      <ListTrx tab={tab} />
    </YStack>
  );
};

export default TrxHistory;
