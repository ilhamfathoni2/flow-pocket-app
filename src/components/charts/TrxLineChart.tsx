import React, {useCallback, useState} from 'react';
import {Dimensions} from 'react-native';
import {LineChart} from 'react-native-gifted-charts';
import colors from '../../constants/colors';
import {Text, View} from 'tamagui';
import fonts from '../ui/fonts';
import {useFocusEffect} from '@react-navigation/native';
import {formatCurrency} from '../../utils/formatCurrency';

const TrxLineChart = (props: any) => {
  const width = Dimensions.get('window').width;
  const [key, setKey] = useState(0);

  useFocusEffect(
    useCallback(() => {
      setKey(prevKey => prevKey + 1); // Memicu re-render untuk restart animasi
    }, [props.tab]),
  );

  const data = [
    {value: 40000, label: 'Jan', dataPointText: '40', date: '12 January 2025'},
    {value: 55000, label: 'Feb', dataPointText: '55', date: '11 January 2025'},
    {value: 30000, label: 'Mar', dataPointText: '30', date: '10 January 2025'},
    {value: 75000, label: 'Apr', dataPointText: '75', date: '9 January 2025'},
    {value: 50000, label: 'May', dataPointText: '50', date: '8 January 2025'},
    {value: 90000, label: 'Jun', dataPointText: '90', date: '7 January 2025'},
    {value: 90000, label: 'Jul', dataPointText: '90', date: '7 January 2025'},
    {value: 74300, label: 'Aug', dataPointText: '90', date: '7 January 2025'},
    {value: 90000, label: 'Sep', dataPointText: '90', date: '7 January 2025'},
    {value: 20000, label: 'Oct', dataPointText: '90', date: '7 January 2025'},
    {value: 90000, label: 'Nov', dataPointText: '90', date: '7 January 2025'},
    {value: 10000, label: 'Dec', dataPointText: '90', date: '7 January 2025'},
  ];

  return (
    <View
      bg={colors.deepGray}
      p={16}
      rounded={15}
      justify="center"
      items="center">
      <LineChart
        data={data}
        key={key}
        areaChart
        width={width}
        height={150}
        isAnimated
        textColor1={colors.white}
        color={props.tab === 0 ? colors.softRed : colors.darkGreen} // Menggunakan warna yang sudah kamu buat
        thickness={3}
        // dataPointsColor={colors.teal}
        // dataPointsHeight={25}
        hideDataPoints
        yAxisLabelWidth={0}
        hideRules
        // curved
        showValuesAsDataPointsText // Memastikan teks dataPoint ditampilkan
        startFillColor={props.tab === 0 ? colors.darkRed : colors.darkGreen}
        startOpacity={0.8}
        endFillColor={props.tab === 0 ? colors.softRed : colors.teal}
        endOpacity={0.3}
        hideAxesAndRules
        spacing={25}
        xAxisLabelTextStyle={{color: colors.white, fontSize: 8}}
        pointerConfig={{
          pointerStripHeight: 160,
          pointerStripColor: props.tab === 0 ? colors.softRed : colors.teal,
          pointerStripWidth: 1.5,
          pointerColor: props.tab === 0 ? colors.softRed : colors.teal,
          radius: 6,
          autoAdjustPointerLabelPosition: true,
          pointerLabelComponent: (items: any) => {
            return (
              <View height={90} width={100} justify="center" mt={-20} ml={-40}>
                <View
                  py={6}
                  px={10}
                  rounded={16}
                  bg={colors.white}
                  style={fonts.poppinsMedium}>
                  <Text fontSize={9} text="center" style={fonts.poppinsBold}>
                    {formatCurrency(items[0].value)}
                  </Text>
                </View>
                <Text
                  mt={8}
                  color={colors.white}
                  fontSize={9}
                  text="center"
                  style={fonts.poppinsRegular}>
                  {items[0].date}
                </Text>
              </View>
            );
          },
        }}
      />
    </View>
  );
};

export default TrxLineChart;
