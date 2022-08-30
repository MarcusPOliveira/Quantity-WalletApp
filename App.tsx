import 'react-native-gesture-handler';
import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold
} from '@expo-google-fonts/poppins';

import { Home } from './src/screens/Home';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          DMSans_400Regular,
          DMSerifDisplay_400Regular,
          Poppins_300Light,
          Poppins_400Regular,
          Poppins_500Medium,
          Poppins_700Bold,
          Poppins_800ExtraBold
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar backgroundColor='transparent' barStyle='light-content' translucent />
      <Home />
    </View>
  );
}
