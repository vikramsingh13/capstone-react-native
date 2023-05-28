import React, { useCallback } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { COLORS, icons, images, SIZES } from "../constants";


const Layout = ({ children }) => {
  const [fontsLoaded] = useFonts({
      DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
      DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
      DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async() => {
      if (fontsLoaded) {
          await SplashScreen.hideAsync();
      }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerShadowVisible: false,
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: '',
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}

export default Layout;