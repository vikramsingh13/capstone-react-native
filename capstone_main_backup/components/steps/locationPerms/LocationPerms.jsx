import React, { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";
import styles from "./locationPerms.style";
import { Pedometer } from "expo-sensors";

const LocationPerms = () => {
    const [locationPermission, setLocationPermission] = useState(false);

    useEffect(() => {
        const checkLocationPermission = async () => {
            const { status } = await Pedometer.requestPermissionsAsync();

            if (status === "granted") {
                setLocationPermission(true);
            } else {
                setLocationPermission(false);
            }
        };

        checkLocationPermission();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Location permission: {locationPermission ? "granted" : "denied"}
            </Text>
            {!locationPermission && (
                <Button
                    title="Request location permission"
                    onPress={() =>
                        Pedometer.requestPermissionsAsync().then(({ status }) =>
                            setLocationPermission(status === "granted")
                        )
                    }
                />
            )}
        </View>
    );
};

export default LocationPerms;
