import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import { Stack, useRouter, Link } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import * as Google from "expo-auth-session/providers/google";
import * as AppAuth from "expo-app-auth";
import { API_ANDROID_CLIENT_ID as androidClientId} from "@env";
import { GoogleFitSignIn, ScreenHeaderBtn } from "../components";

const SCOPES = [
    "https://www.googleapis.com/auth/fitness.activity.read",
    "https://www.googleapis.com/auth/fitness.body.read",
];

const Steps = () => {
    const [steps, setSteps] = useState(null);
    
    const getSteps = async () => {
        try {
            const isSignedIn = await Google.isSignedInAsync();
            if (!isSignedIn) {
                await signInWithGoogleAsync();
            }
            const result = await fetch(
                `https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${await getGoogleFitToken()}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        aggregateBy: [
                            {
                                dataTypeName: "com.google.step_count.delta",
                                dataSourceId:
                                    "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps",
                            },
                        ],
                        bucketByTime: { durationMillis: 86400000 },
                        startTimeMillis: Date.now() - 7 * 86400000,
                        endTimeMillis: Date.now(),
                    }),
                }
            );
            const json = await result.json();
            setSteps(json.bucket[0].dataset[0].point[0].value[0].intVal);
        } catch (error) {
            console.log("error:", error);
        }
    };

    const getGoogleFitToken = async () => {
        const authState = await AppAuth.authAsync({
            issuer: "https://accounts.google.com",
            scopes: SCOPES,
            clientId: Platform.OS === "android" ? androidClientId : iosClientId,
        });
        return authState.accessToken;
    };

    const signInWithGoogleAsync = async () => {
        try {
            const { type, accessToken, user } = await Google.logInAsync({
                androidClientId: androidClientId,
                iosClientId: iosClientId,
                scopes: SCOPES,
            });
            if (type === "success") {
                // Get access token
                return accessToken;
            } else {
                return { cancelled: true };
            }
        } catch (error) {
            console.log("Error with Google sign in:", error);
            return { error: true };
        }
    };

    useEffect(() => {
        getSteps();
    }, []);

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
                    <GoogleFitSignIn />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Steps;
