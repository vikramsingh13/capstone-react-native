import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    wrapper:{
        justifyContent: "center",
        alignItems: "center",
        height: "30%",
        marginTop: 10,
        marginBottom: 10,
    },
    container: {
        backgroundColor: COLORS.tertiary,
        justifyContent: "center",
        alignItems: "center",
        padding: 50,
    },
});

export default styles;
