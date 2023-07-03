import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import type {NavigationProp} from '@react-navigation/native';

import {TrendingListProps} from '../../types/global';
import {colors, sizes, fonts} from '../../theme';

const TrandingList = ({
  item,
  index,
  navigation,
}: {
  item: TrendingListProps;
  index: number;
  navigation: NavigationProp<any, any>;
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.trandingListContainer,
        {
          paddingVertical: sizes.padding,
          paddingHorizontal: sizes.padding,
          marginLeft: index === 0 ? sizes.padding : 0,
          marginRight: sizes.radius,
          backgroundColor: colors.white,
        },
      ]}
      onPress={() =>
        navigation.navigate('CryptoDetails', {
          cryptoData: item,
        })
      }>
      <View style={styles.currencyStyle}>
        <View>
          <Image
            source={item.image}
            resizeMode="cover"
            style={styles.currencyImg}
          />
        </View>
        <View style={{marginLeft: sizes.base}}>
          <Text style={{...fonts.h2}}>{item.currency}</Text>
          <Text style={{color: colors.gray, ...fonts.body3}}>
            {item.symbol}
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: sizes.radius,
        }}>
        <Text style={{...fonts.h2}}>${item.amount}</Text>
        <Text
          style={{
            color: item.type === 'I' ? colors.green : colors.red,
            ...fonts.h3,
          }}>
          {item.changes}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TrandingList;

const styles = StyleSheet.create({
  trandingListContainer: {
    width: 180,
    borderRadius: 10,
  },
  currencyStyle: {
    flexDirection: 'row',
  },
  currencyImg: {
    marginTop: 5,
    width: 40,
    height: 40,
  },
});
