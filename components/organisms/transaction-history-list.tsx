import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {colors, sizes, fonts} from '../../theme';
import {icons} from '../../constants';

interface HistoryListProps {
  id: string;
  description: string;
  amount: number;
  currency: string;
  type: string;
  date: string;
}

export default function TransactionHistoryList({
  item,
}: {
  item: HistoryListProps;
}) {
  return (
    <TouchableOpacity style={styles.TransactionsStyle}>
      <Image source={icons.transitionIcon} style={styles.TransactionsImg} />
      <View style={styles.transactionDetials}>
        <Text style={{...fonts.h3}}>{item.description}</Text>
        <Text style={{...fonts.body4, color: colors.gray}}>{item.date}</Text>
      </View>
      <View style={styles.rightDetails}>
        <Text
          style={{
            color: item.type === 'B' ? colors.green : colors.black,
            ...fonts.h3,
          }}>
          {item.amount} {item.currency}
        </Text>
        <Image source={icons.rightaArrowIcon} style={styles.arrowStyle} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  TransactionsStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: sizes.base,
  },
  TransactionsImg: {
    height: 28,
    width: 28,
    tintColor: colors.primary,
  },
  transactionDetials: {
    flex: 1,
    marginLeft: sizes.radius,
  },
  rightDetails: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
  },
  arrowStyle: {
    width: 20,
    height: 20,
    tintColor: colors.gray,
  },
});
