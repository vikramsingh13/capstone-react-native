import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../../constants";
import globalStyles from "../../../../styles/globalStyles";

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.secondary,
        width: "100%",
        padding: 20,
        marginTop: 15,
        flexDirection: "row",
        display: "flex",

    },
    outlined: {
        borderWidth: 2,
        borderColor: COLORS.secondary,
        backgroundColor: COLORS.background,
    },
    textContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        display: "flex",
        flexGrow: 1,
    },
    title: {
        fontFamily: FONT.bold,
        fontSize: SIZES.large,
        margin: 15,
        textTransform: "capitalize",
    },
    subtitle: {
        fontFamily: FONT.regular,
        fontSize: SIZES.medium,
    },
    iconContainer: {
        margin: 10,
    },
    btnContainer: {
        marginLeft: "auto",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    }
});

export default styles;
