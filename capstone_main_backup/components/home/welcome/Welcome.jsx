import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
} from "react-native";
import styles from "./welcome.style";
import { useRouter } from "expo-router";
import { icons, SIZES } from "../../../constants";

const Welcome = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.userName}>Hello, User!</Text>
            <Text style={styles.welcomeMessage}>Let's get fit!</Text>
        </View>
    );
};

export default Welcome;
