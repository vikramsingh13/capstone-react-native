import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { COLORS } from "../../../../constants";
import styles from "./boxcard.style";

const BoxCard = ({ outlined, title, subtitle, icon, btn, handlePress }) => {
    const iconColor = outlined ? COLORS.secondary : COLORS.onSecondary;
    const titleColor = outlined ? COLORS.onBackground : COLORS.onSecondary;
    const subColor = outlined ? COLORS.gray2 : COLORS.grayDark;

    return (
        <TouchableOpacity onPress={() => handlePress(title)}>
            <View
                style={
                    outlined
                        ? [styles.container, styles.outlined]
                        : styles.container
                }
            >
                <View style={styles.iconContainer}>
                    <Icon
                        name={icon ? icon : "info-circle"}
                        size={50}
                        color={iconColor}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={[{ color: titleColor }, styles.title]}>
                        {title ? title : "Title is missing."}
                    </Text>
                    <Text style={[{ color: subColor }, styles.subtitle]}>
                        {subtitle}
                    </Text>
                </View>
                {btn && (
                    <View style={styles.btnContainer}>
                        <Icon
                            name="caret-right"
                            size={50}
                            color={iconColor}
                            style={styles.btn}
                        />
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
};

export default BoxCard;
