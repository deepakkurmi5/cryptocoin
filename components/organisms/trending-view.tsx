import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {colors, fonts, sizes} from '../../theme';

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
      {/* <FlatList /> */}
    </View>
  );
};

export default TrendingView;

const styles = StyleSheet.create({
  trendingRoot: {
    position: 'absolute',
    bottom: '-30%',
  },
});
