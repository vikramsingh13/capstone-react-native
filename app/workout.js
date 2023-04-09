import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import { COLORS, icons, images, SIZES } from "../constants";
import { Stack, useRouter, Link } from "expo-router";
import { ScreenHeaderBtn } from "../components";

const Workout = () => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
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
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    Workout plans here
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Workout;