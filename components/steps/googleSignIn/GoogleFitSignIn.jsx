import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import { makeRedirectUri } from 'expo-auth-session';
import {
    API_ANDROID_CLIENT_ID as androidClientId,
    API_EXPO_CLIENT_ID as expoClientId,
} from "@env";
import styles from "./googleFitSignIn.style";

const SCOPES = [
    "https://www.googleapis.com/auth/fitness.activity.read",
    "https://www.googleapis.com/auth/fitness.body.read",
];

const GoogleFitSignIn = () => {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState();

    const [req, res, promptAsync] = Google.useAuthRequest({
        androidClientId: androidClientId,
        expoClientId: expoClientId,
        redirectUri: makeRedirectUri({
            useProxy: true,
        })
    });

    useEffect(() => {
        if (res && res.type === "success") {
            setAccessToken(res.authentication.accessToken);
        }
    }, [res]);

    const getUserData = async () => {
        let userInfoRes = await fetch(
            "https://www.googleapis.com/userinfo/v2/me",
            {
                headers: { Authorization: `Bearer ${accessToken}` },
            }
        );

        userInfoRes.json().then((data) => {
            setUser(data);
        });
    };

    if (!user) {
        return (
            <View style={styles.container}>
                <Text styles={styles.text}>You are not signed in.</Text>
                <TouchableOpacity
                    title="Sign in with Google"
                    onPress={
                        accessToken
                            ? getUserData
                            : () => {                                
                                promptAsync({
                                    useProxy: true,
                                    showInRecents: true,
                                })
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
