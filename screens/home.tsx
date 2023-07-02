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
});

export default Home;
