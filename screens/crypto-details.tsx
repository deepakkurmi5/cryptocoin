import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import SafeArea from '../components/atoms/safe-area';
import CryptoDetailTemplate from '../components/templates/crypto-detail-template';
import {RootStackParamList} from '../navigation/types';

type CryptoDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'CryptoDetails'
>;

const CryptoDetails = ({route}: CryptoDetailsScreenProps) => {
  const {cryptoData} = route.params;

  return (
    <SafeArea>
      <CryptoDetailTemplate cryptoData={cryptoData} />
    </SafeArea>
  );
};

export default CryptoDetails;
