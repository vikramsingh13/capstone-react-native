import { useState } from "react";
import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import { Stack, useRouter, Link } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import { CarouselScreen, ScreenHeaderBtn, Welcome, HomeBoxes } from "../components";
import { setCustomText } from "react-native-global-props";
import { customTextProps } from "../styles/text";

setCustomText(customTextProps);

const Home = () => {
    const router = useRouter();

    const handlePressed = () => {
        router.push("/");
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.primary },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={images.profile}
                            dimension="100%"
                        />
                    ),
                    headerTitle: "",
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Welcome />
                    <CarouselScreen />
                    <HomeBoxes />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
