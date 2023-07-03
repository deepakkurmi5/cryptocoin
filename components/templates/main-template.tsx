import {View, StyleSheet} from 'react-native';
import React from 'react';

import Header from '../organisms/header';
import PriceAlert from '../atoms/price-alert';

export default function MainTemplate() {
  return (
    <View style={styles.rootContainer}>
      <Header />
      <PriceAlert />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingBottom: 130,
  },
});
