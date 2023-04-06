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
import { Pedometer } from 'expo-sensors';

export  function Steps() {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
  const [pastStepCount, setPastStepCount] = useState(0);
  const [currentStepCount, setCurrentStepCount] = useState(0);

  const subscribe = async () => {
    const isAvailable = await Pedometer.isAvailableAsync();
    setIsPedometerAvailable(String(isAvailable));

    if (isAvailable) {
      const end = new Date();
      const start = new Date();
      start.setDate(end.getDate() - 1);

      const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
      if (pastStepCountResult) {
        setPastStepCount(pastStepCountResult.steps);
      }

      return Pedometer.watchStepCount(result => {
        setCurrentStepCount(result.steps);
      });
    }
  };

  useEffect(() => {
    const subscription = subscribe();
    return () => subscription && subscription.remove();
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
                    <View style>
      <Text>Pedometer.isAvailableAsync(): {isPedometerAvailable}</Text>
      <Text>Steps taken in the last 24 hours: {pastStepCount}</Text>
      <Text>Walk! And watch this go up: {currentStepCount}</Text>
    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Steps;
