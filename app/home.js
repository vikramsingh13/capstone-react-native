import { useState, useEffect } from "react";
import globalStyles from "../styles/globalStyles";
import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import { Stack, useRouter, Link } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import {
    ScreenHeaderBtn,
    Welcome,
    HomeBoxes,
} from "../components";
import { setCustomText } from "react-native-global-props";
import { customTextProps } from "../styles/text";

setCustomText(customTextProps);

const Home = () => {

    const router = useRouter();

    const handlePressed = () => {
        router.push("/");
    };

    const handleHeartPressed = () => {
        router.push("/");
    };

    const handleStepsPressed = () => {
        router.push("/steps");
    };

    const handleWorkoutPressed = () => {
        router.push("/workout");
    };

    return (
        <SafeAreaView style={globalStyles.SafeAreaViewStyle}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={globalStyles.ScrollViewStyle}>
                    <Welcome />
                    <HomeBoxes handleHeartPressed={handleHeartPressed} handleStepsPressed={handleStepsPressed}
                        handleWorkoutPressed={handleWorkoutPressed} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
