import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin: 10,
    },
    name: {
        color: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    textInput:{
        backgroundColor: COLORS.gray,
        color: COLORS.onBackground,
        width: 100,
        margin: 10,
    },
    trackerContainer:{
        
    } 
});

export default styles;