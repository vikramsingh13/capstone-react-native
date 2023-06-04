import { View, Text } from "react-native";
import BoxCard from "../../common/cards/BoxCard/BoxCard";
import styles from "./homeBoxes.style";

const HomeBoxes = ({handleHeartPressed, handleStepsPressed, handleWorkoutPressed}) => {
    return (
        <View style={styles.container}>
            <BoxCard
                icon="heartbeat"
                title="Heart Rate"
                subtitle="Can you feel it?"
                outlined
                btn
                handlePress={handleHeartPressed}
            />
            <BoxCard
                icon="running"
                title="Step Counter"
                subtitle="Start moving now!"
                btn
                handlePress={handleStepsPressed}
            />
            <BoxCard
                icon="dumbbell"
                title="Workout"
                subtitle="Gains Time!"
                btn
                handlePress={handleWorkoutPressed}
            />
        </View>
    );
};

export default HomeBoxes;
