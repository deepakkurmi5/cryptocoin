import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  VictoryChart,
  // VictoryScatter,
  // VictoryAxis,
  VictoryLine,
} from 'victory-native';

import {colors, sizes, fonts, material, metrics} from '../../theme';
import {utilsStyles} from '../../styles';
import CurrencyLabel from '../atoms/currency-label';
import {TrendingListProps} from '../../types/global';

export default function ChartView({
  cryptoDetails,
}: {
  cryptoDetails: TrendingListProps;
}) {
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
                data={cryptoDetails.chartData}
                categories={{
                  x: ['15 MIN', '30 MIN', '45 MIN', '60 MIN'],
                  y: ['15', '30', '45'],
                }}
              />
            </VictoryChart>
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
});
