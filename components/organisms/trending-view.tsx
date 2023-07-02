import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

import {colors, fonts, sizes} from '../../theme';
import {TrendingCurrencies} from '../../data';
import TrandingList from './tranding-list';

const TrendingView = () => {
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
        renderItem={TrandingList}
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
