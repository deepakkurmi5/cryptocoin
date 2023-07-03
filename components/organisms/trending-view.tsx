import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import {colors, fonts, sizes} from '../../theme';
import {TrendingCurrencies} from '../../data';
import TrandingList from './tranding-list';
import {RootStackParamList} from '../../navigation/types';

const TrendingView = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'CryptoDetails'>
    >();

  return (
    <View style={styles.trendingRoot}>
      <Text
        style={{
          marginLeft: sizes.padding,
          color: colors.white,
          ...fonts.h2,
        }}>
        Trending
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{marginTop: sizes.base}}
        data={TrendingCurrencies}
        renderItem={({item, index}) => (
          <TrandingList item={item} index={index} navigation={navigation} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TrendingView;

const styles = StyleSheet.create({
  trendingRoot: {
    position: 'absolute',
    bottom: '-50%',
  },
});
