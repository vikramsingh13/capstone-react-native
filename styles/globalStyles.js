import { StyleSheet } from "react-native";
import { COLORS, icons, images, SIZES } from "../constants";

const globalStyles = StyleSheet.create({
    SafeAreaViewStyle: {
        flex: 1,
        backgroundColor: COLORS.background
    },

    ScrollViewStyle: {
        flex: 1,
        padding: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    },

    
});

export default globalStyles; 
