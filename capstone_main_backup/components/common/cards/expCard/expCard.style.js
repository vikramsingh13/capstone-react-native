import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.primary,
        width: "100%",
        flexDirection: "column",
        display: "flex",
        zIndex: 1000,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "absolute",
        bottom: 0,

    },
    starContainer:{
        flexDirection: "row",
        margin: 20,
    },
    title: {
        color: COLORS.goldStar,
        fontSize: SIZES.xxLarge,
        margin: 20,
    },
    subtitle: {
        color: COLORS.onBackground,
        fontSize: SIZES.xLarge,
        margin: 20,
    },
    okButton: {
        backgroundColor: COLORS.secondary,
        color: COLORS.onBackground,
        margin: 20,
        padding: 20,
    }
});

export default styles;
