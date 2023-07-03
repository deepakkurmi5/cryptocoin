import {View} from 'react-native';

import React, {PropsWithChildren} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../../theme';

export default function SafeArea({children}: PropsWithChildren) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        backgroundColor: colors.lightGrayHelper,
        flex: 1,
      }}>
      {children}
    </View>
  );
}
