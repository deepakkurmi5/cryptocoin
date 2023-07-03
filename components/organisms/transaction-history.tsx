import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {TransactionHistoryApi} from '../../data';
import {colors, sizes, fonts} from '../../theme';
import {utilsStyles} from '../../styles';
import i18n from '../../i18n';
import TransactionHistoryList from './transaction-history-list';

export default function TransactionHistory() {
  return (
    <View style={styles.TransactionHistoryStyle}>
      <Text style={{...fonts.h2}}>{i18n.TransactionHistoryTitle}</Text>
      <FlatList
        scrollEnabled={false}
        contentContainerStyle={{marginTop: sizes.radius}}
        data={TransactionHistoryApi}
        keyExtractor={item => item.id}
        renderItem={TransactionHistoryList}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => {
          return <View style={styles.SeparatorStyle} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  TransactionHistoryStyle: {
    marginTop: sizes.padding,
    marginHorizontal: sizes.padding,
    padding: 20,
    borderRadius: sizes.radius,
    backgroundColor: colors.white,
    ...utilsStyles.baseShadow,
  },
  SeparatorStyle: {
    width: '100%',
    height: 1,
    backgroundColor: colors.lightGray,
  },
});
