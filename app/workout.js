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
                    {!planName && <WorkoutBoxes plans={plans}/>}
                    {planName && <WorkoutPlan planName={planName}/>}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Workout;
