import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin: 10,
    },
    textInput:{
        backgroundColor: COLORS.gray,
        color: COLORS.onBackground,
        width: 100,
        margin: 10,
    },
});

export default styles;