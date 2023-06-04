import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.primary,
        flexDirection: "row",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: 10,

    },
    refreshButton: {
        backgroundColor: COLORS.secondary,
        color: COLORS.onBackground,
        margin: 10,
        padding: 20,
    },
    calorieText:{
        color: COLORS.onBackground,
        fontSize: SIZES.large,
        margin: 5,
    }
});

export default styles;
