import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import type {StyleProp, TextStyle} from 'react-native';

import {icons} from '../../constants';
import {colors, sizes, fonts} from '../../theme';
import i18n from '../../i18n';
import {utilsStyles} from '../../styles';

export default function PriceAlert({
  customContainerStyle,
}: {
  customContainerStyle?: StyleProp<TextStyle>;
}) {
  return (
    <TouchableOpacity style={[styles.priceAlertStyle, customContainerStyle]}>
      <Image source={icons.alertNotifyIcon} style={styles.notifyIconStyle} />
      <View style={styles.priceAlertDetails}>
        <Text style={{...fonts.h3}}>{i18n.AlertTitle}</Text>
        <Text style={{...fonts.body4}}>{i18n.AlertDecription}</Text>
      </View>
      <Image source={icons.rightaArrowIcon} style={styles.arrowIconStyle} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  priceAlertStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizes.padding * 6,
    marginHorizontal: sizes.padding,
    paddingVertical: sizes.padding,
    paddingHorizontal: sizes.padding - 10,
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
    ...utilsStyles.baseShadow,
  },
  notifyIconStyle: {
    width: 30,
    height: 30,
  },
  priceAlertDetails: {
    flex: 1,
    marginLeft: sizes.radius,
  },
  arrowIconStyle: {
    width: 20,
    height: 20,
  },
});
