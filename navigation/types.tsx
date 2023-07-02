import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  HomeScreen: NavigatorScreenParams<HomeTabParamsList>;
  CryptoDetails: undefined;
  Transations: undefined;
};

export type HomeTabParamsList = {
  Home: undefined;
  Portfolio: undefined;
  Transaction: undefined;
  Prices: undefined;
  Settings: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type HomeTabScreenProps<T extends keyof HomeTabParamsList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamsList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;
