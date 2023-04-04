import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { Pedometer } from "expo-sensors";
import { COLORS, icons, images, SIZES } from "../constants";
import { Stack, useRouter, Link } from "expo-router";
import { LocationPerms, ScreenHeaderBtn } from "../components";

const Steps = () => {
    const [isPedometerAvailable, setIsPedometerAvailable] =
        useState("checking");
    const [currentStepCount, setCurrentStepCount] = useState(0);

    const subscribe = async () => {
        

        const isAvailable = await Pedometer.isAvailableAsync();
        setIsPedometerAvailable(String(isAvailable));
        try{

            const subscription = await Pedometer.watchStepCount((result) => {
                console.log("steps" + result.steps)
                setCurrentStepCount(result.steps);
            })();
        }catch {
            console.log("steps didn't work");
        }

        subscription();
    };

    useEffect(() => {
        subscribe();
    }, []);

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
                    <View style={styles.container}>
                        <LocationPerms />
                        <Text style={styles.text}>
                            Pedometer.isAvailableAsync(): {isPedometerAvailable}
                        </Text>
                        <Text>
                            Walk! And watch this go up: {currentStepCount}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
    },
    text: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        color: COLORS.primary,
    },
});

export default Steps;
