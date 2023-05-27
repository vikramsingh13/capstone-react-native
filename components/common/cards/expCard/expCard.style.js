import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../../constants";
import globalStyles from "../../../../styles/globalStyles";

const styles = StyleSheet.create({
    container: globalStyles.generateGlobalStyle("ContainerFlexCol",
        {
            backgroundColor: COLORS.primary,
            zIndex: 1000,
            position: "absolute",
            bottom: 0,
            width: "100%",
        }),
    starContainer: {
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
