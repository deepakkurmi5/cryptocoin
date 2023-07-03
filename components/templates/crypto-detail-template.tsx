import {View} from 'react-native';
import React from 'react';

import HeaderBar from '../atoms/header-bar';
import ChartView from '../organisms/chart-view';
import {TrendingListProps} from '../../types/global';

export default function CryptoDetailTemplate({
  cryptoData,
}: {
  cryptoData: TrendingListProps;
}) {
  return (
    <View>
      <HeaderBar right={true} />
      <ChartView cryptoDetails={cryptoData} />
    </View>
  );
}
