import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    wrapper:{
        marginTop: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        backgroundColor: COLORS.tertiary,
        justifyContent: "center",
        alignItems: "center",
        padding: 50,
        borderRadius: 10,
    },
});

export default styles;
