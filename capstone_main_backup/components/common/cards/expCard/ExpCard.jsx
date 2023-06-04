import { View, Text, Pressable } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./expCard.style";
import { COLORS } from "../../../../constants";

const ExpCard = ({ exp=500, activity, handlePress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.starContainer}>
                <Icon name="star" size={80} color={COLORS.goldStar} />
                <Icon name="star" size={80} color={COLORS.goldStar} />
                <Icon name="star" size={80} color={COLORS.goldStar} />
            </View>
            <Text style={styles.title}>+{exp} EXP</Text>
            <Text style={styles.subtitle}>Congrats!</Text>
            <Pressable onPress={handlePress}>
                <Text style={styles.okButton}>OK</Text>
            </Pressable>
        </View>
    );
};

export default ExpCard;
