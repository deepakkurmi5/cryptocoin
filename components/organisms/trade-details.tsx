import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {TrendingListProps} from '../../types/global';
import {utilsStyles} from '../../styles';
import {colors, sizes, fonts} from '../../theme';
import CurrencyLabel from '../atoms/currency-label';
import TextButton from '../atoms/text-button';

const TradeDetails = ({cryptoData}: {cryptoData: TrendingListProps}) => {
  return (
    <View style={styles.tradeStyle}>
      <CurrencyLabel
        currency={cryptoData.currency}
        icon={cryptoData.image}
        symbol={cryptoData.symbol}
      />
      <View style={styles.tradeDetailStyle}>
        <Text style={{...fonts.h2}}>{cryptoData.wallet.crypto}</Text>
        <Text style={{...fonts.body4, color: colors.gray}}>
          ${cryptoData.wallet.value}
        </Text>
      </View>
      <TextButton lable="Trade" />
    </View>
  );
};

export default TradeDetails;

const styles = StyleSheet.create({
  tradeStyle: {
    marginTop: sizes.padding,
    marginHorizontal: sizes.padding,
    padding: sizes.radius,
    borderRadius: sizes.radius,
    backgroundColor: colors.white,
    ...utilsStyles.baseShadow,
  },
  tradeDetailStyle: {
    marginTop: sizes.padding,
    marginBottom: sizes.padding * 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
