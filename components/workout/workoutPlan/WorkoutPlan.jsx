import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./workoutPlan.style";
import workoutPlans from "../../../data/workoutPlans";
import RepTracker from "../repTracker/RepTracker";

const WorkoutPlan = ({ planName }) => {
    const plan = workoutPlans[planName]["exercises"].map((exercise, index) => {
        return <RepTracker name={exercise} />
    });

    return (
        <View style={styles.container}>
            <Text style={styles.planName}>{planName.toUpperCase()}</Text>
            {plan}

            <Pressable><Text>
                Finish Workout
                </Text>
                </Pressable>
        </View>
    );
};

export default WorkoutPlan;
