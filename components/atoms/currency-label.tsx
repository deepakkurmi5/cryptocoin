import {View, Text, StyleSheet, Image} from 'react-native';
import type {ImageSourcePropType} from 'react-native';
import React from 'react';
import {colors, fonts, sizes} from '../../theme';

export default function CurrencyLabel({
  icon,
  currency,
  symbol,
}: {
  icon: ImageSourcePropType;
  currency: string;
  symbol: string;
}) {
  return (
    <View style={styles.rootLabelStyle}>
      <Image source={icon} resizeMode="contain" style={styles.iconStyle} />
      <View style={{marginLeft: sizes.base}}>
        <Text style={{...fonts.h3}}>{currency}</Text>
        <Text style={{...fonts.body4, color: colors.gray}}>{symbol}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootLabelStyle: {
    flexDirection: 'row',
  },
  iconStyle: {
    width: 35,
    height: 35,
    marginTop: 5,
  },
});
