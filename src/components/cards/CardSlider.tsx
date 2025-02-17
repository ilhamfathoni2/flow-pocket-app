import React, {useState} from 'react';
import {Dimensions, Image, TouchableOpacity} from 'react-native';
import {Text, XStack, View} from 'tamagui';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import {styled} from 'tamagui';
import fonts from '../ui/fonts';
import colors from '../../constants/colors';

type CardData = {
  id: number;
  name: string;
  cardName: string;
  balance: number;
  cardNumber: string;
  expiry: string;
};

const cardData: CardData[] = [
  {
    id: 1,
    name: 'Ilham Fathoni',
    cardName: 'Glassdoor',
    balance: 230000000,
    cardNumber: '1232 82781 9938',
    expiry: '05/26',
  },
  {
    id: 2,
    name: 'John Doe',
    cardName: 'Dana',
    balance: 125000000,
    cardNumber: '5678 91011 1213',
    expiry: '11/27',
  },
  {
    id: 3,
    name: 'Jane Smith',
    cardName: 'Gopay',
    balance: 89000000,
    cardNumber: '1415 1617 1819',
    expiry: '07/25',
  },
  {
    id: 3,
    name: 'Jane Smith',
    cardName: 'ShopeePay',
    balance: 89000000,
    cardNumber: '1415 1617 1819',
    expiry: '07/25',
  },
];

const cardColors = [colors.blue, colors.orange, colors.purple];

const CardContainer = styled(View, {
  width: '96%',
  rounded: 20,
  paddingInline: 25,
  paddingBlock: 25,
  shadowOpacity: 0.2,
  shadowRadius: 4,
  height: 230,
});

const CardComponent: React.FC<{
  data: CardData;
  isBalanceVisible: boolean;
  onToggleVisibility: () => void;
  bgColor: string;
}> = ({data, isBalanceVisible, onToggleVisibility, bgColor}) => {
  return (
    <CardContainer style={{backgroundColor: bgColor}}>
      {/* Header */}
      <XStack justify="space-between" items="center">
        <Text color={colors.white} fontSize={18} style={fonts.poppinsMedium}>
          Glassdoor
        </Text>
        <Text color={colors.white} fontSize={16} style={fonts.poppinsRegular}>
          {data.name}
        </Text>
      </XStack>

      {/* Expiry Date */}
      <Text
        color={colors.white}
        fontSize={14}
        text="right"
        style={fonts.poppinsRegular}>
        {data.expiry}
      </Text>

      {/* Balance */}
      <Text
        color={colors.white}
        fontSize={14}
        mt={10}
        style={fonts.poppinsRegular}>
        Balance
      </Text>
      <XStack items="center">
        <Text
          color={colors.white}
          fontSize={isBalanceVisible ? 24 : 15}
          style={fonts.poppinsBold}>
          {isBalanceVisible
            ? `Rp${data.balance.toLocaleString()}`
            : '---------'}
        </Text>
        <TouchableOpacity onPress={onToggleVisibility}>
          <Image
            source={
              isBalanceVisible
                ? require('../../assets/images/eyehide.png')
                : require('../../assets/images/eye.png')
            }
            style={{
              width: 20,
              height: 20,
              objectFit: 'contain',
              marginLeft: 15,
            }}
          />
        </TouchableOpacity>
      </XStack>

      <View mt={20} style={{position: 'absolute', bottom: 15, left: 25}}>
        <Text
          color={colors.white}
          fontSize={18}
          letterSpacing={2}
          style={fonts.poppinsLight}>
          {data.cardNumber}
        </Text>
      </View>
      <View mt={20} style={{position: 'absolute', bottom: 25, right: 25}}>
        <Image
          source={require('../../assets/images/chip.png')}
          style={{width: 24, height: 20, objectFit: 'contain'}}
        />
      </View>
    </CardContainer>
  );
};

const CardSlider = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const screenWidth = Dimensions.get('window').width;
  const ref = React.useRef<ICarouselInstance>(null);

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Carousel
        loop={false}
        ref={ref}
        data={cardData}
        height={240}
        pagingEnabled={true}
        snapEnabled={true}
        width={screenWidth * 0.9}
        mode={'horizontal-stack'}
        modeConfig={{
          snapDirection: 'left',
          stackInterval: 18,
        }}
        onSnapToItem={index => setActiveIndex(index)}
        customConfig={() => ({type: 'positive', viewCount: 5})}
        renderItem={({item, index}) => (
          <CardComponent
            data={item}
            isBalanceVisible={isBalanceVisible}
            onToggleVisibility={() => setIsBalanceVisible(!isBalanceVisible)}
            bgColor={cardColors[index % cardColors.length]}
          />
        )}
      />

      {/* Indikator kartu aktif */}
      {/* <View style={{flexDirection: 'row', marginTop: 2}}>
        {cardData.map((_, index) => (
          <View
            key={index}
            style={{
              width: 7,
              height: 7,
              borderRadius: 5,
              backgroundColor: index === activeIndex ? 'white' : 'gray',
              marginHorizontal: 5,
            }}
          />
        ))}
      </View> */}
    </View>
  );
};

export default CardSlider;
