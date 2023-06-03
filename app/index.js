import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Redirect } from "expo-router";

export default function Index() {
    return <Redirect href="/home" />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
    },
});
