import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { makeRedirectUri } from "expo-auth-session";
import {
    API_ANDROID_CLIENT_ID as androidClientId,
    API_EXPO_CLIENT_ID as expoClientId,
} from "@env";
import styles from "./googleFitSignIn.style";

const SCOPES = [
    "https://www.googleapis.com/auth/fitness.activity.read",
    "https://www.googleapis.com/auth/fitness.body.read",
];

//to dismiss popup after authentication
WebBrowser.maybeCompleteAuthSession();

const GoogleFitSignIn = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [accessToken, setAccessToken] = useState();

    const [req, res, promptAsync] = Google.useAuthRequest({
        androidClientId: androidClientId,
        expoClientId: expoClientId,
        redirectUri: makeRedirectUri({ scheme: "capstone-expo-app" }),
    });

    useEffect(() => {
        if (res && res.type === "success") {
            setAccessToken(res.authentication.accessToken);
            getUserInfo();
        }
    }, [res, accessToken]);

    const getUserInfo = async () => {
        try {
            const response = await fetch(
                "https://www.googleapis.com/userinfo/v2/me",
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            const user = await response.json();
            setUserInfo(user);
        } catch (error) {
            // Add your own error handler here
        }
    };

    if (!userInfo) {
        return (
            <View style={styles.container}>
                <Text styles={styles.text}>You are not signed in.</Text>
                <TouchableOpacity
                    title="Sign in with Google"
                    onPress={
                        accessToken
                            ? getUserInfo
                            : () => {
                                  promptAsync({
                                      useProxy: true,
                                      showInRecents: true,
                                  });
                              }
                    }
                >
                    <Text styles={styles.text}>Sign in with Google</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text styles={styles.text}>Signed in as {user}</Text>
            <TouchableOpacity title="Sign out" onPress={""} />
        </View>
    );
};

export default GoogleFitSignIn;
