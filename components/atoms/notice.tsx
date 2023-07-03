import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {colors, sizes, fonts} from '../../theme';
import {utilsStyles} from '../../styles';
import i18n from '../../i18n';

export default function Notice() {
  return (
    <View style={styles.noticeRootStyle}>
      <Text style={styles.noticeTitleStyle}>{i18n.NoticeTitle}</Text>
      <Text style={styles.noticeDecStyle}>{i18n.NoticeDecription}</Text>
      <TouchableOpacity style={{marginTop: sizes.base}}>
        <Text style={styles.lernMoreBtn}>Learn More</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  noticeRootStyle: {
    marginTop: sizes.padding,
    marginHorizontal: sizes.padding,
    padding: 20,
    borderRadius: sizes.radius,
    backgroundColor: colors.secondary,
    ...utilsStyles.baseShadow,
  },
  noticeTitleStyle: {
    color: colors.white,
    ...fonts.h3,
  },
  noticeDecStyle: {
    marginTop: sizes.base,
    color: colors.white,
    ...fonts.body4,
    lineHeight: 18,
  },
  lernMoreBtn: {
    textDecorationLine: 'underline',
    color: colors.green,
    ...fonts.h3,
  },
});
