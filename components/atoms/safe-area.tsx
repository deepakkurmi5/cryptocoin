import {View} from 'react-native';

import React, {PropsWithChildren} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const SafeArea = ({children}: PropsWithChildren) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      {children}
    </View>
  );
};

export default SafeArea;
