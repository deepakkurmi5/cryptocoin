import {Animated, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  VictoryChart,
  VictoryScatter,
  VictoryAxis,
  VictoryLine,
} from 'victory-native';

import {colors, sizes, fonts, material, metrics} from '../../theme';
import {utilsStyles} from '../../styles';
import CurrencyLabel from '../atoms/currency-label';
import {TrendingListProps} from '../../types/global';
import {ChartOptions} from '../../data';
import TextButton from '../atoms/text-button';

interface optionProps {
  id: number;
  label: string;
}

export default function ChartView({
  cryptoDetails,
}: {
  cryptoDetails: TrendingListProps;
}) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const dotPosition = useRef(
    Animated.divide(scrollX, metrics.screenWidth),
  ).current;
  const [numberOfCharts] = useState([1, 2, 3]);
  const [selectedOption, setSelectedOption] = useState(ChartOptions[0]);

  function handlerOption(option: optionProps) {
    setSelectedOption(option);
  }

  return (
    <ScrollView>
      <View style={{flex: 1, paddingBottom: sizes.padding}}>
        <View style={styles.chartStyle}>
          {/* header section */}
          <View style={styles.headerStyle}>
            <View style={{flex: 1}}>
              <CurrencyLabel
                icon={cryptoDetails.image}
                currency={cryptoDetails.currency}
                symbol={cryptoDetails.symbol}
              />
            </View>
            <View>
              <Text style={{...fonts.h3}}>${cryptoDetails.amount}</Text>
              <Text
                style={{
                  ...fonts.body3,
                  color: cryptoDetails.type === 'I' ? colors.green : colors.red,
                }}>
                {cryptoDetails?.changes}
              </Text>
            </View>
          </View>
          {/* chart section */}
          <Animated.ScrollView
            horizontal
            pagingEnabled
            scrollEventThrottle={16}
            snapToAlignment="center"
            snapToInterval={metrics.screenWidth - 40}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {x: scrollX},
                  },
                },
              ],
              {useNativeDriver: false},
            )}>
            {numberOfCharts.map((item, index) => (
              <View
                key={`chart-${index}`}
                style={{marginLeft: index === 0 ? sizes.base : 0}}>
                <View style={styles.chartSectionStyle}>
                  <VictoryChart
                    theme={material}
                    height={220}
                    width={metrics.screenWidth - 40}>
                    <VictoryLine
                      style={{
                        data: {
                          stroke: colors.secondary,
                        },
                        parent: {
                          border: '1px solid #ccc',
                        },
                      }}
                      data={cryptoDetails?.chartData}
                      categories={{
                        x: ['15 MIN', '30 MIN', '45 MIN', '60 MIN'],
                        y: ['15', '30', '45'],
                      }}
                    />
                    <VictoryScatter
                      data={cryptoDetails?.chartData}
                      size={7}
                      style={{
                        data: {
                          fill: colors.secondary,
                        },
                      }}
                    />
                    <VictoryAxis
                      style={{
                        grid: {
                          stroke: 'transparent',
                        },
                      }}
                    />
                    <VictoryAxis
                      dependentAxis
                      style={{
                        axis: {
                          stroke: 'transparent',
                        },
                        grid: {
                          stroke: 'gray',
                        },
                      }}
                    />
                  </VictoryChart>
                </View>
              </View>
            ))}
          </Animated.ScrollView>
          {/* option section */}
          <View style={styles.optionSectionStyle}>
            {ChartOptions.map(option => {
              return (
                <TextButton
                  key={`option-${option.id}`}
                  lable={option.label}
                  customContainerStyle={{
                    height: 30,
                    width: 60,
                    borderRadius: 15,
                    backgroundColor:
                      selectedOption.id === option.id
                        ? colors.primary
                        : colors.lightGray,
                  }}
                  customLableStyle={{
                    color:
                      selectedOption.id === option.id
                        ? colors.white
                        : colors.gray,
                    ...fonts.body5,
                  }}
                  onPress={() => handlerOption(option)}
                />
              );
            })}
          </View>
          {/* dots section  */}
          <View style={styles.dotSectionStyle}>
            <View style={styles.dotContainer}>
              {numberOfCharts.map((item, index) => {
                const opacity = dotPosition.interpolate({
                  inputRange: [index - 1, index, index + 1],
                  outputRange: [0.3, 1, 0.3],
                  extrapolate: 'clamp',
                });

                const dotSize = dotPosition.interpolate({
                  inputRange: [index - 1, index, index + 1],
                  outputRange: [sizes.base * 0.8, 10, sizes.base * 0.8],
                  extrapolate: 'clamp',
                });

                const dotColor = dotPosition.interpolate({
                  inputRange: [index - 1, index, index + 1],
                  outputRange: [colors.gray, colors.primary, colors.gray],
                  extrapolate: 'clamp',
                });

                return (
                  <Animated.View
                    key={`dot-${index}`}
                    opacity={opacity}
                    style={{
                      borderRadius: sizes.radius,
                      marginLeft: 6,
                      width: dotSize,
                      height: dotSize,
                      backgroundColor: dotColor,
                    }}
                  />
                );
              })}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  chartStyle: {
    marginTop: sizes.padding,
    marginHorizontal: sizes.radius,
    alignItems: 'center',
    borderRadius: sizes.radius,
    backgroundColor: colors.white,
    ...utilsStyles.baseShadow,
  },
  headerStyle: {
    flexDirection: 'row',
    marginTop: sizes.padding,
    paddingHorizontal: sizes.padding,
  },
  chartSectionStyle: {
    marginTop: -25,
  },
  optionSectionStyle: {
    width: '100%',
    paddingHorizontal: sizes.padding,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dotSectionStyle: {
    height: 30,
    marginTop: 15,
  },
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
