import {ScrollView, LogBox} from 'react-native';
import React, {useEffect} from 'react';

import MainTemplate from '../components/templates/main-template';

const Home = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <ScrollView>
      <MainTemplate />
    </ScrollView>
  );
};

export default Home;
