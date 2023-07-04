import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import TransactionTemplate from '../components/templates/transaction-template';
import {RootStackParamList} from '../navigation/types';

type CryptoDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Transation'
>;

const Transaction = ({route}: CryptoDetailsScreenProps) => {
  const {cryptoData} = route.params;

  return <TransactionTemplate cryptoData={cryptoData} />;
};

export default Transaction;
