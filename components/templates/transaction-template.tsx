import {View, ScrollView} from 'react-native';
import React from 'react';

import {sizes} from '../../theme';
import SafeArea from '../atoms/safe-area';
import {TrendingListProps} from '../../types/global';
import HeaderBar from '../atoms/header-bar';
import TradeDetails from '../organisms/trade-details';
import TransactionHistory from '../organisms/transaction-history';

const TransactionTemplate = ({cryptoData}: {cryptoData: TrendingListProps}) => {
  return (
    <SafeArea>
      <HeaderBar right={false} />
      <ScrollView>
        <View style={{flex: 1, paddingBottom: sizes.padding}}>
          <TradeDetails cryptoData={cryptoData} />
          <TransactionHistory />
        </View>
      </ScrollView>
    </SafeArea>
  );
};

export default TransactionTemplate;
