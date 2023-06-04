import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
    },
    text: {
        fontSize: SIZES.medium,
        textAlign: "center",
        margin: 10,
        color: COLORS.onBackground,
    },
    header: {
        fontSize: SIZES.xLarge,
        textAlign: "center",
        margin: 10,
        color: COLORS.onBackground,
    },
    image: {
        height: 100,
        width: 100,
        resizeMode: "contain",
        borderRadius: 100,
        
    },
    imageContainer: {
        marginTop: 50,
        marginBottom: 50,
    },
    calorieText: {
        margin: 10,
    }
});

export default styles;