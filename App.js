import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MenuProvider} from 'react-native-popup-menu';
import {NavigationScreens} from './src/routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {LoadingSheet} from './src/components/loadingSheet';
import Door from './src/components/Door';
import FlashMessage from 'react-native-flash-message';
import {Colors} from './src/utils/colors';

const App = () => {
  try {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('black');
    }
  } catch (e) {}
  const CoingrigTheme = {
    colors: {
      background: Colors.background,
    },
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={CoingrigTheme}>
        <MenuProvider>
          <NavigationScreens />
        </MenuProvider>
        <FlashMessage position="top" />
        <LoadingSheet />
        <Door />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default React.memo(App);
