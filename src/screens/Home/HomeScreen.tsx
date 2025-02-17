import React from 'react';
import {Button, Image, Text, View, XStack, YStack} from 'tamagui';
import CardSlider from '../../components/cards/CardSlider';
import fonts from '../../components/ui/fonts';
import ListTransaction from '../../components/listTrx/ListTransaction';
import colors from '../../constants/colors';
import { configApi } from '../../../env/api';

const HomeScreen = () => {
  return (
    <YStack flex={1} bg={colors.whiteBg}>
      <XStack
        paddingInline={16}
        paddingBlock={16}
        justify={'space-between'}
        items={'center'}>
        <YStack>
          <Text fontSize={24} color={colors.black} style={fonts.poppinsMedium}>
            Flow Pocket
          </Text>
          <Text fontSize={12} color={colors.black} style={fonts.poppinsMedium}>
            Manage Money, Control Life
          </Text>
        </YStack>
        <Button
          paddingBlock={13}
          paddingInline={13}
          rounded={16}
          bg={colors.darkGray}>
          <Image
            source={{
              uri: require('../../assets/images/plus.png'),
              width: 20,
              height: 20,
            }}
          />
        </Button>
      </XStack>

      <XStack justify={'center'} mt={16}>
        <CardSlider />
      </XStack>

      <ListTransaction />
    </YStack>
  );
};

export default HomeScreen;
