import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import {Root} from './navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
