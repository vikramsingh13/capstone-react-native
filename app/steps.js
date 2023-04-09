import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    Platform
} from "react-native";
import { COLORS, icons, images, SIZES } from "../constants";
import { Stack, useRouter, Link } from "expo-router";
import { LocationPerms, ScreenHeaderBtn } from "../components";
import StepsIos from "../components/steps/stepsIos/StepsIos";

const Steps = () => {
    const [appPlatform, setAppPlatform] = useState("");

    //figure out the platform the user is using
    useEffect(() => {
        setAppPlatform(Platform.OS);
    },[])

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
                    <StepsIos />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Steps;
