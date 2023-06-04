import { View, Text, Pressable } from "react-native";
import { useState } from "react";
import styles from "./workoutPlan.style";
import workoutPlans from "../../../data/workoutPlans";
import RepTracker from "../repTracker/RepTracker";
import ExpCard from "../../common/cards/expCard/ExpCard";

const WorkoutPlan = ({ planName }) => {
    const [isFinished, setIsFinished] = useState(false);
    const plan = workoutPlans[planName]["exercises"].map((exercise, index) => {
        return <RepTracker name={exercise} />;
    });

    return (
        <View style={styles.container}>
            <Text style={styles.planName}>{planName.toUpperCase()}</Text>
            {plan}

            {isFinished && <ExpCard exp="500" activity="workout" handlePress={() => setIsFinished(false)}/>}

            <Pressable onPress={() => setIsFinished(!isFinished)}>
                <Text style={styles.finishButton}>Finish Workout</Text>
            </Pressable>
        </View>
    );
};

export default WorkoutPlan;
