import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import type {StyleProp, TextStyle} from 'react-native';
import React from 'react';
import {colors, sizes, fonts} from '../../theme';

export default function TextButton({
  lable,
  customContainerStyle,
  customLableStyle,
  onPress,
}: {
  lable?: string;
  customContainerStyle?: StyleProp<TextStyle>;
  customLableStyle?: any;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, customContainerStyle]}
      onPress={onPress}>
      <Text style={{color: colors.white, ...fonts.h3, ...customLableStyle}}>
        {lable}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.radius,
    backgroundColor: colors.green,
  },
});
