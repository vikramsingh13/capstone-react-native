import styles from "./workoutBoxes.style";
import { Text, View, } from "react-native";
import React from 'react';
import BoxCard from "../../common/cards/BoxCard/BoxCard";
import WorkoutPlans from "../../../data/workoutPlans";

const WorkoutBoxes = ({plans}) => {
    //plans is an array of objects

    const boxes = plans.map((plan, index) => {
        return <BoxCard
        icon={plan.icon}
        title={plan.title}
        subtitle={plan.subtitle}
        handlePress={plan.handlePress}
        key={index} />
    });
  return (
    <View>
      {boxes}
    </View>
  )
}

export default WorkoutBoxes;