import React, { useState, useEffect } from "react";
import globalStyles from "../styles/globalStyles";
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
import { StepsIos } from "../components";

const Steps = () => {
    const [appPlatform, setAppPlatform] = useState("");

    //figure out the platform the user is using
    useEffect(() => {
        setAppPlatform(Platform.OS);
    }, [])

    return (
        <SafeAreaView style={globalStyles.SafeAreaViewStyle}>
            <Stack.Screen
                options={{
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
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={globalStyles.ScrollViewStyle}>
                    <StepsIos />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Steps;
