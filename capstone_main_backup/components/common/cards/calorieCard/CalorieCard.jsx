import { View, Text } from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { COLORS } from "../../../../constants";
import styles from "./calorieCard.style";

const CalorieCard = ({ steps }) => {
    return (
        <View style={styles.container}>
            <Icon name="fire-alt" size={25} color={COLORS.secondary} />
            <Text style={styles.calorieText}>
                Calories burnt: {steps && (steps / 1000) * 35}
            </Text>
        </View>
    );
};

export default CalorieCard;
