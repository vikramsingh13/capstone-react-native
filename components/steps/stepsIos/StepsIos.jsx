import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
} from "react-native";
import { Pedometer } from "expo-sensors";
import { Stack, useRouter, Link } from "expo-router";
import { LocationPerms } from "../../index";
import styles from "./stepsIos.style";
import { images, COLORS, FONT, SIZES } from "../../../constants";
import CircularProgress from "react-native-circular-progress-indicator";

const StepsIos = () => {
    const [isPedometerAvailable, setIsPedometerAvailable] =
        useState("checking");
    const [currentStepCount, setCurrentStepCount] = useState(0);
    const [goalStepCount, setGoalStepCount] = useState(1000);

    const subscribe = async () => {
        const isAvailable = await Pedometer.isAvailableAsync();
        setIsPedometerAvailable(String(isAvailable));
        try {
            const subscription = await Pedometer.watchStepCount((result) => {
                console.log("steps" + result.steps);
                setCurrentStepCount(result.steps);
            })();
        } catch {
            console.log("steps didn't work");
        }

        subscription();
    };

    useEffect(() => {
        subscribe();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.header} >
                Step Counter
            </Text>
            <LocationPerms />
            <View style={styles.imageContainer}>
                    <CircularProgress
                        value={currentStepCount}
                        radius={100}
                        duration={1000}
                        progressValueColor={COLORS.primary}
                        maxValue={goalStepCount}
                        title={"Steps"}
                        titleColor={COLORS.onBackground}
                        titleStyle={{fontWeight: FONT.bold, fontSize: SIZES.large}}
                        circleBackgroundColor={COLORS.primaryVariant}
                        inActiveStrokeColor={COLORS.onBackground}
                    />
            </View>
            <Text style={styles.text}>Goal Steps: {goalStepCount}</Text>
            <Text style={styles.text}>Current Steps: {currentStepCount}</Text>
        </View>
    );
};

export default StepsIos;
