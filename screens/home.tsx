import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

import Header from '../components/organisms/header';

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Header />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingBottom: 130,
  },
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

export default Home;
