import { View, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import {useState, useEffect} from "react";
import { COLORS } from "../../../constants";
import styles from "./repCard.style";

const RepCard = () => {
    const [isComplete, setIsComplete] = useState(false);
    return (
        <View style={styles.container}>
            <TextInput keyboard="numeric" style={styles.textInput}/>
            <Icon
                name="check-circle"
                size={25}
                color={!isComplete ? COLORS.gray : COLORS.secondary}
                onPress={() => setIsComplete(!isComplete)}
            />
        </View>
    );
};

export default RepCard;
