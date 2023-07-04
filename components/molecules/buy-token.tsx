import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {colors, sizes, fonts} from '../../theme';
import {utilsStyles} from '../../styles';
import CurrencyLabel from '../atoms/currency-label';
import {TrendingListProps} from '../../types/global';
import {icons} from '../../constants';
import TextButton from '../atoms/text-button';
import {RootStackParamList} from '../../navigation/types';

export default function BuyToken({
  cryptoData,
}: {
  cryptoData: TrendingListProps;
}) {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'Transation'>
    >();

  return (
    <View style={styles.buyTokenStyle}>
      <View style={styles.buyContainerStyle}>
        <View style={{flex: 1}}>
          <CurrencyLabel
            icon={cryptoData.image}
            symbol={cryptoData.symbol}
            currency={`${cryptoData.currency} Wallet`}
          />
        </View>
        <View style={styles.buyBalanceStyle}>
          <View style={{marginRight: sizes.base}}>
            <Text style={{...fonts.h3}}>${cryptoData.wallet.value}</Text>
            <Text
              style={{textAlign: 'right', color: colors.gray, ...fonts.body4}}>
              ${cryptoData.wallet.crypto} {cryptoData.symbol}
            </Text>
          </View>
          <Image
            source={icons.rightaArrowIcon}
            resizeMode="contain"
            style={styles.iconStyle}
          />
        </View>
      </View>
      <TextButton
        lable="Buy"
        onPress={() =>
          navigation.navigate('Transation', {
            cryptoData,
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buyTokenStyle: {
    marginHorizontal: sizes.radius,
    padding: sizes.radius,
    borderRadius: sizes.radius,
    backgroundColor: colors.white,
    ...utilsStyles.baseShadow,
  },
  buyContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: sizes.radius,
  },
  buyBalanceStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    width: 20,
    height: 20,
    tintColor: colors.gray,
  },
});
