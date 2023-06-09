import React, { useState, useEffect } from "react";
import globalStyles from "../styles/globalStyles";
import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import { COLORS, icons, images, SIZES } from "../constants";
import { Stack, useRouter, Link } from "expo-router";
import { ScreenHeaderBtn, WorkoutBoxes, WorkoutPlan } from "../components";

const Workout = () => {
    const [planName, setPlanName] = useState(null);



    //handles press from workout plans boxes
    const handlePress = (title) => {
        setPlanName(title);
    };


    //curated plans for the workout page
    const plans = [
        {
            title: "push",
            icon: "dumbbell",
            subtitle: "Chest, triceps, shoulders",
            handlePress: handlePress,
        },
        {
            title: "pull",
            icon: "dumbbell",
            subtitle: "Big biceps",
            handlePress: handlePress,
        },
        {
            title: "legs",
            icon: "dumbbell",
            subtitle: "Not feeling it today",
            handlePress: handlePress,
        },
    ];
    return (
        <SafeAreaView style={globalStyles.SafeAreaViewStyle}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={globalStyles.ScrollViewStyle}>
                    {!planName && <WorkoutBoxes plans={plans} />}
                    {planName && <WorkoutPlan planName={planName} />}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Workout;
