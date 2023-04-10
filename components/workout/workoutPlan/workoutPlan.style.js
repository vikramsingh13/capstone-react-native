import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container:{
        display:"flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    planName:{
        color: COLORS.onBackground,

    },
});

export default styles;