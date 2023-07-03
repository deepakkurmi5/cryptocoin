import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {icons} from '../../constants';
import {colors, sizes, fonts} from '../../theme';
import i18n from '../../i18n';

export default function PriceAlert() {
  return (
    <TouchableOpacity style={styles.priceAlertStyle}>
      <Image source={icons.alertNotifyIcon} style={styles.notifyIconStyle} />
      <View style={styles.priceAlertDetails}>
        <Text style={{...fonts.h3}}>{i18n.Alert_Tiltle}</Text>
        <Text style={{...fonts.body4}}>{i18n.Alert_Decription}</Text>
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.6,
    elevation: 8,
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
