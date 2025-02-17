import {Image, ScrollView, Text, View, XStack, YStack} from 'tamagui';
import fonts from '../ui/fonts';
import colors from '../../constants/colors';

const ListTransaction = () => {
  const listData = [
    {
      name: 'Nasi Padang',
      date: '1 February 2025',
      category: 'expense',
      amount: '40.000',
    },
    {
      name: 'Bonus',
      date: '3 February 2025',
      category: 'income',
      amount: '300.000',
    },
    {
      name: 'Ayam',
      date: '4 February 2025',
      category: 'expense',
      amount: '30.000',
    },
    {
      name: 'Family Mart',
      date: '5 February 2025',
      category: 'expense',
      amount: '30.000',
    },
    {
      name: 'Piutang',
      date: '6 February 2025',
      category: 'income',
      amount: '230.000',
    },
    {
      name: 'Piutang',
      date: '7 February 2025',
      category: 'income',
      amount: '230.000',
    },
  ];

  return (
    <YStack px={16}>
      <Text
        my={16}
        fontSize={16}
        color={colors.black}
        style={fonts.poppinsMedium}>
        Total Transaction
      </Text>

      <ScrollView mb={500} showsVerticalScrollIndicator={false}>
        <XStack justify="space-between" items="center">
          <View
            bg="$lightRed"
            rounded={24}
            px={16}
            py={16}
            width={'48%'}
            style={{
              shadowColor: colors.black,
              shadowRadius: 8,
              shadowOpacity: 0.5,
              shadowOffset: {width: 0, height: 5},
              elevation: 0.8,
            }}>
            <XStack justify="space-between">
              <YStack>
                <Text
                  mb={16}
                  fontSize={12}
                  color="white"
                  style={fonts.poppinsRegular}>
                  Expense
                </Text>
                <Text fontSize={14} color="white" style={fonts.poppinsSemiBold}>
                  Rp100.000.000
                </Text>
              </YStack>
              <View
                px={10}
                height={25}
                bg={colors.darkRed}
                rounded="$9"
                justify="center"
                items="center">
                <Image
                  source={{
                    uri: require('../../assets/images/iconDown.png'),
                    width: 10,
                    height: 10,
                  }}
                  objectFit="contain"
                />
              </View>
            </XStack>
          </View>
          <View
            bg="$green"
            rounded={24}
            px={16}
            py={16}
            width={'48%'}
            style={{
              shadowColor: colors.black,
              shadowRadius: 8,
              shadowOpacity: 0.5,
              shadowOffset: {width: 0, height: 5},
              elevation: 0.8,
            }}>
            <XStack justify="space-between">
              <YStack>
                <Text
                  mb={16}
                  fontSize={12}
                  color="white"
                  style={fonts.poppinsRegular}>
                  Income
                </Text>
                <Text fontSize={14} color="white" style={fonts.poppinsSemiBold}>
                  Rp100.000.000
                </Text>
              </YStack>
              <View
                px={10}
                height={25}
                bg={colors.darkGreen}
                rounded="$9"
                justify="center"
                items="center">
                <Image
                  source={{
                    uri: require('../../assets/images/iconUp.png'),
                    width: 10,
                    height: 10,
                  }}
                  objectFit="contain"
                />
              </View>
            </XStack>
          </View>
        </XStack>

        <Text
          my={16}
          fontSize={16}
          color={colors.black}
          style={fonts.poppinsMedium}>
          Your Last Transaction
        </Text>

        {listData.map((item, index) => (
          <XStack
            key={index}
            justify="space-between"
            items="center"
            bg={colors.white}
            px={24}
            py={20}
            rounded={24}
            mb={12}
            style={{
              shadowColor: colors.black,
              shadowRadius: 8,
              shadowOpacity: 0.5,
              shadowOffset: {width: 0, height: 5},
              elevation: 0.8,
            }}>
            <XStack width="40%" items="center" gap={16}>
              <View
                bg={item.category === 'expense' ? '$lightRed' : '$greenLight'}
                rounded={50}
                p={9}>
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
                  fontSize={16}
                  color={colors.black}
                  style={fonts.poppinsSemiBold}>
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
              color={colors.black}
              style={fonts.poppinsSemiBold}>
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

export default ListTransaction;
