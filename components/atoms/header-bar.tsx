import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import {colors, sizes, fonts} from '../../theme';
import {RootStackParamList} from '../../navigation/types';
import {icons} from '../../constants';

export default function HeaderBar({right}: {right?: boolean}) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.headerBarRoot}>
      <View style={styles.leftHeaderBar}>
        <TouchableOpacity
          style={styles.imgGroup}
          onPress={() => navigation.goBack()}>
          <Image
            source={icons.backArrowIcon}
            resizeMode="contain"
            style={styles.iconStyle}
          />
          <Text style={{marginLeft: sizes.base, ...fonts.h2}}>Back</Text>
        </TouchableOpacity>
      </View>
      {right && (
        <View style={styles.rightHeaderBar}>
          <TouchableOpacity>
            <Image
              source={icons.starIcon}
              resizeMode="contain"
              style={styles.startIconStyle}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerBarRoot: {
    paddingHorizontal: sizes.padding,
    flexDirection: 'row',
  },
  leftHeaderBar: {
    flex: 1,
    alignItems: 'flex-start',
  },
  imgGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    width: 25,
    height: 25,
    tintColor: colors.gray,
  },
  startIconStyle: {
    width: 30,
    height: 30,
  },
  rightHeaderBar: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
