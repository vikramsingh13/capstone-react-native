import { View, Text } from "react-native";
import BoxCard from "../../common/cards/BoxCard/BoxCard";
import styles from "./homeBoxes.style";

const HomeBoxes = () => {
    return (
        <View style={styles.container}>
            <BoxCard
                icon="bolt"
                title="Wearables"
                subtitle="Pair with your device now"
                outlined
                btn
            />
            <BoxCard
                icon="running"
                title="Step Counter"
                subtitle="Start moving now!"
                btn
            />
        </View>
    );
};

export default HomeBoxes;
