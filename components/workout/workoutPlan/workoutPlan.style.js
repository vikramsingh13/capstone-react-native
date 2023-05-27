import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";
import globalStyles from "../../../styles/globalStyles";

const styles = StyleSheet.create({
    container: globalStyles.styles.ContainerFlexCol,
    planName: {
        color: COLORS.onBackground,
    },
    finishButton: {
        padding: 20,
        backgroundColor: COLORS.secondary,
        color: COLORS.onBackground,
    }
});

export default styles;