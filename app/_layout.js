import { Stack } from "expo-router";

import { useCallback } from "react";

import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";

import { COLORS, icons, images, SIZES } from "../constants";

import { ScreenHeaderBtn, Welcome, HomeBoxes } from "../components";



SplashScreen.preventAutoHideAsync();



const Layout = ({ children }) => {

    const [fontsLoaded] = useFonts({

        DMBold: require("../assets/fonts/DMSans-Bold.ttf"),

        DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),

        DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),

    });



    const onLayoutRootView = useCallback(async () => {

        if (fontsLoaded) {

            await SplashScreen.hideAsync();

        }

    }, [fontsLoaded]);



    if (!fontsLoaded) return null;



    return (

        <Stack

            onLayout={onLayoutRootView}

            screenOptions={{

                headerStyle: { backgroundColor: COLORS.primary },

                headerShadowVisible: false,

                headerRight: () => (

                    <ScreenHeaderBtn

                        iconUrl={images.profile}

                        dimension="100%"

                    />

                ),

                headerTitle: "",

            }}

        />

    );

};



export default Layout;