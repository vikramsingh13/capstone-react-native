import { View, Text, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./repTracker.style";

const RepTracker = ({ name, sets = 3 }) => {
    const [tracker, setTracker] = useState([]);

    //todo each input needs to be it's component with two way data binding
    //should be able to add or delete inputs
    //use this function to filter out non numerics in the new component
    /*const handleTextChange = (text) => {
        // Filter out non-numeric characters
        const filteredText = text.replace(/[^0-9]/g, '');
        setValue(filteredText);
      };*/

    useEffect(() => {
        const temp = Array.from({ length: sets }, (_, index) => (
            <TextInput key={index} style={styles.textInput}
            keyboardType="numeric"/>
        ));
        setTracker(temp);
    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name.toUpperCase()}</Text>
            <View style={styles.trackerContainer}>{tracker}</View>
        </View>
    );
};

export default RepTracker;
