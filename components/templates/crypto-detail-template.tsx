import {ScrollView, View} from 'react-native';
import React from 'react';

import HeaderBar from '../atoms/header-bar';
import ChartView from '../organisms/chart-view';
import {TrendingListProps} from '../../types/global';
import BuyToken from '../molecules/buy-token';
import AboutToken from '../atoms/about-token';
import PriceAlert from '../atoms/price-alert';
import {sizes} from '../../theme';

export default function CryptoDetailTemplate({
  cryptoData,
}: {
  cryptoData: TrendingListProps;
}) {
  return (
    <View>
      <HeaderBar right={true} />
      <ScrollView>
        <View style={{marginBottom: sizes.padding * 2}}>
          <ChartView cryptoDetails={cryptoData} />
          <BuyToken cryptoData={cryptoData} />
          <AboutToken
            currency={cryptoData.currency}
            description={cryptoData.description}
          />
          <PriceAlert
            customContainerStyle={{
              marginTop: sizes.padding,
              marginHorizontal: sizes.radius,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
