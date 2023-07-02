import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

import {icons, images} from '../../constants';
import {colors, fonts, sizes} from '../../theme';
import TrendingView from './trending-view';

const Header = () => {
  return (
    <View style={[styles.headerRoot, styles.shadow]}>
      <ImageBackground
        source={images.bannerImg}
        resizeMode="cover"
        style={styles.headerBg}>
        <View
          style={[
            styles.headerBar,
            {
              marginTop: sizes.padding * 2,
              paddingHorizontal: sizes.padding,
            },
          ]}>
          <TouchableOpacity style={styles.notifyStyle}>
            <Image
              source={icons.notificationIcon}
              resizeMode="contain"
              style={styles.notifyImg}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.balanceSection}>
          <Text
            style={{
              color: colors.white,
              ...fonts.h3,
            }}>
            Your Portfolio Balance
          </Text>
          <Text
            style={{
              marginTop: sizes.base,
              color: colors.white,
              ...fonts.h1,
            }}>
            $12,724.33
          </Text>
          <Text
            style={{
              color: colors.white,
              ...fonts.body5,
            }}>
            +2.36% Last 24 hours
          </Text>
        </View>
        <TrendingView />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  headerRoot: {
    height: 250,
    width: '100%',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 4,
    shadowOpacity: 0.4,
  },
  headerBg: {
    flex: 1,
    alignItems: 'center',
  },
  headerBar: {
    width: '100%',
    alignItems: 'flex-end',
  },
  notifyStyle: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notifyImg: {
    flex: 1,
  },
  balanceSection: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;
