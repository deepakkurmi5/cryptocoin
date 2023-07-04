import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {colors, sizes, fonts} from '../../theme';
import {utilsStyles} from '../../styles';

export default function AboutToken({
  currency,
  description,
}: {
  currency: string;
  description: string;
}) {
  return (
    <View style={styles.aboutContainer}>
      <Text style={{...fonts.h3}}>About {currency}</Text>
      <Text style={{marginTop: sizes.base, ...fonts.body3}}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  aboutContainer: {
    marginTop: sizes.padding,
    marginHorizontal: sizes.radius,
    padding: sizes.radius,
    borderRadius: sizes.radius,
    backgroundColor: colors.white,
    ...utilsStyles.baseShadow,
  },
});
