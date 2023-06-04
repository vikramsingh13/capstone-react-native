import React, { useState, useEffect } from "react";
import globalStyles from "../styles/globalStyles";
import {ScrollView, SafeAreaView, Pressable, StyleSheet, Dimensions} from "react-native";
import { Stack, useRouter, Link } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import { setCustomText } from "react-native-global-props";
import { customTextProps } from "../styles/customText";
import {
  Constants,
  Spacings,
  View,
  Text,
  Carousel,
  Image,
  Card,
  CardProps,
} from "react-native-ui-lib";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getExpWeeklyData } from "../api/expApi";
import { BarChart } from "react-native-chart-kit";

setCustomText(customTextProps);

const Home = () => {
  const router = useRouter();

  const handlePressed = () => {
    router.push("/");
  };

  const handleHeartPressed = () => {
    router.push("/");
  };

  const handleStepsPressed = () => {
    router.push("/steps");
  };

  const handleWorkoutPressed = () => {
    router.push("/workout");
  };

  const [expWeeklyData, setExpWeeklyData] = useState({});
  const data = [
    { icon: "run", value: "1000", pageName: "steps" },
    { icon: "fire", value: "1000", pageName: "calories" },
    { icon: "account-group", value: "Synced", pageName: "Workout Buddy" },
    {
      icon: "cards-heart-outline",
      value: "Coming Soon",
      pageName: "HeartRate",
    },
  ];

  const chartConfig = {
    backgroundColor: COLORS.grayDark,
    backgroundGradientFrom: COLORS.grayDark,
    backgroundGradientTo: COLORS.grayDark,
    decimalPlaces: 0,
    color: (opacity) => COLORS.lightWhite, // Default color everything in the chart
    style: {
      borderRadius: 16,
    },
    barRadius: 10,
    propsForLabels: {
      fontSize: 12,
      fontWeight: "bold",
    },
    propsForBackgroundLines: {
      strokeWidth: 0,
    },
    fillShadowGradient: COLORS.secondary, // Color for all bars
    fillShadowGradientOpacity: 1,
    barPercentage: 0.8, //change width of bars
  };

  //sends user id and gets back a json
  const fetchExpWeeklyData = () => {
    const _ = getExpWeeklyData();
    setExpWeeklyData(_);
  };

  useEffect(() => {
    fetchExpWeeklyData();
  }, []);

  return (
    <SafeAreaView style={globalStyles.SafeAreaViewStyle}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Carousel
          pageWidth={130}
          allowAccessibleLayout
          marginTop={20}
          marginBottom={10}
        >
          {data.map((item, index) => (
            <Card
              height={120}
              width={120}
              key={index}
              onPress={() => console.log(index)}
              center
              backgroundColor={COLORS.grayDark}
            >
              <View marginBottom={20}>
                <MaterialCommunityIcons
                  name={item.icon}
                  size={40}
                  color={COLORS.primary}
                />
              </View>
              <Text text80 center color={COLORS.lightWhite}>
                {item.value.toUpperCase()}
              </Text>
              <Text text100 center color={COLORS.gray}>
                {item.pageName.toUpperCase()}
              </Text>
            </Card>
          ))}
        </Carousel>

        <Card
          height={300}
          onPress={() => console.log(1)}
          center
          backgroundColor={COLORS.grayDark}
          style={{ marginLeft: 10, marginRight: 10, flexDirection: "column" }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              text60
              center
              color={COLORS.lightWhite}
              style={{
                flex: 1,
                justifyContent: "flex-start",
              }}
            >
              {expWeeklyData.title}
            </Text>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
              }}
            >
              <Text text80 center color={COLORS.lightWhite}>
                {expWeeklyData.subTitle}
              </Text>
              <Text text60 center color={COLORS.lightWhite}>
                {expWeeklyData.value}
              </Text>
            </View>
          </View>
          <BarChart
            height={200}
            width={Dimensions.get("window").width - 40}
            chartConfig={chartConfig}
            style={{ paddingRight: 0 }}
            data={
              expWeeklyData.data
                ? expWeeklyData.data
                : {
                    labels: [
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                    ],
                    datasets: [
                      {
                        data: [90, 45, 28, 80, 99, 43],
                      },
                    ],
                  }
            }
          />
        </Card>

        <View marginTop={10}>
          <Text text70 color={COLORS.lightWhite} marginLeft={15}>
            RECOMMENDED PLANS
          </Text>
          <Card
            height={200}
            onPress={() => console.log(2)}
            center
            backgroundColor={COLORS.grayDark}
            style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }}
          >
            <Text text60 center color={COLORS.lightWhite}>
              Workout card goes here...
            </Text>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
