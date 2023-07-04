import {NavigatorScreenParams} from '@react-navigation/native';

import {TrendingListProps} from '../types/global';

export type RootStackParamList = {
  HomeScreen: NavigatorScreenParams<HomeTabParamsList>;
  CryptoDetails: {cryptoData: TrendingListProps};
  Transation: {cryptoData: TrendingListProps};
};

export type HomeTabParamsList = {
  Home: undefined;
  Portfolio: undefined;
  Transactions: undefined;
  Prices: undefined;
  Settings: undefined;
};
