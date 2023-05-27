import { StyleSheet } from "react-native";
import { COLORS, icons, images, SIZES } from "../constants";

const globalStyles = {
    // A helper function to add extra styles to an already-existing global style
    generateGlobalStyle: function (styleName, extraData) {
        const style = globalStyles.styles[styleName];
        if (style == null) {
            console.log("Style template could not be found, aborting.");
            return;
        };

        var styleToReturn = {};
        for (var key in style) {
            styleToReturn[key] = style[key];
        };

        for (var key in extraData) {
            styleToReturn[key] = extraData[key];
        };

        return styleToReturn;
    },

    // The global styles
    styles: StyleSheet.create({
        SafeAreaViewStyle: {
            flex: 1,
            backgroundColor: COLORS.background
        },

        ScrollViewStyle: {
            flex: 1,
            padding: SIZES.medium,
            justifyContent: "center",
            alignItems: "center",
        },

        ContainerFlexRow: {
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            flexDirection: "row"
        },

        ContainerFlexCol: {
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            flexDirection: "column"
        },
    })
};

export default globalStyles; 
