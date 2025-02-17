import {
  Circle,
  Image,
  ScrollView,
  Square,
  Text,
  View,
  XStack,
  YStack,
} from 'tamagui';
import fonts from '../ui/fonts';
import colors from '../../constants/colors';

const ListTrx = (props: any) => {
  let category = props.tab === 0 ? 'expense' : 'income';

  const listData = [
    // Pengeluaran (Expense)
    {
      name: 'Nasi Padang',
      date: '1 February 2025',
      category: 'expense',
      amount: '40.000',
    },
    {
      name: 'Ayam Bakar',
      date: '3 February 2025',
      category: 'expense',
      amount: '35.000',
    },
    {
      name: 'Kopi Starbucks',
      date: '5 February 2025',
      category: 'expense',
      amount: '50.000',
    },
    {
      name: 'Belanja Bulanan',
      date: '7 February 2025',
      category: 'expense',
      amount: '500.000',
    },
    {
      name: 'Belanja Bulanan',
      date: '8 February 2025',
      category: 'expense',
      amount: '200.000',
    },

    // Pemasukan (Income)
    {
      name: 'Gaji',
      date: '2 February 2025',
      category: 'income',
      amount: '5.000.000',
    },
    {
      name: 'Bonus',
      date: '4 February 2025',
      category: 'income',
      amount: '500.000',
    },
    {
      name: 'Freelance Project',
      date: '6 February 2025',
      category: 'income',
      amount: '1.200.000',
    },
    {
      name: 'Investasi Saham',
      date: '8 February 2025',
      category: 'income',
      amount: '750.000',
    },
    {
      name: 'Investasi Saham',
      date: '9 February 2025',
      category: 'income',
      amount: '750.000',
    },
  ];

  const filteredData = listData.filter(item => item.category === category);

  return (
    <YStack>
      <ScrollView mb={480} showsVerticalScrollIndicator={false}>
        {filteredData.map((item, index) => (
          <XStack
            key={index}
            justify="space-between"
            items="center"
            bg={colors.almostBlack}
            px={24}
            py={20}
            rounded={24}
            mb={12}>
            <XStack width="40%" items="center" gap={16}>
              <View bg={colors.deepGray} rounded={50} p={9}>
                <Image
                  source={{
                    uri:
                      item.category === 'expense'
                        ? require('../../assets/images/arrowDown.png')
                        : require('../../assets/images/arrowUp.png'),
                    width: 14,
                    height: 14,
                  }}
                  objectFit="contain"
                />
              </View>
              <YStack>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  fontSize={16}
                  color="white"
                  style={fonts.poppinsMedium}>
                  {item.name}
                </Text>
                <Text
                  fontSize={12}
                  color={colors.gray}
                  style={fonts.poppinsRegular}>
                  {item.date}
                </Text>
              </YStack>
            </XStack>
            <Text
              fontSize={12}
              color={
                item.category === 'expense' ? colors.softRed : colors.mintGreen
              }
              style={fonts.poppinsMedium}>
              {item.category === 'expense'
                ? `-Rp${item.amount}`
                : `Rp${item.amount}`}
            </Text>
          </XStack>
        ))}
      </ScrollView>
    </YStack>
  );
};

export default ListTrx;
