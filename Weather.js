import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
  Thunderstorm: {
    colors: ["#00ECBC", "#007ADF"],
    title: "Thunderstorm in the house",
    subtitles: "Actually, outside of the house",
    icon: "weather-lightning"
  },
  Drizzle: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitles: "Is like rain, but different",
    icon: "weather-rainy"
  },
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title: "Raining like a poet",
    subtitles: "For more info look outside",
    icon: "weather-pouring"
  },
  Snow: {
    colors: ["#7DE2FC", "#B9B6E5"],
    title: "Cold as icecream",
    subtitles: "Do you want to build a snowman",
    icon: "weather-snowy"
  },
  Clear: {
    colors: ["#FEF253", "#FF7300"],
    title: "Sunny as hell",
    subtitles: "Go get some Vitamin D",
    icon: "weather-sunny"
  },
  Clouds: {
    colors: ["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitles: "I know, it is boring",
    icon: "weather-cloudy"
  },
  Haze: {
    colors: ["#D7D2CC", "#304352"],
    title: "Haze",
    subtitles: "Watch out when you driving!",
    icon: "weather-fog"
  },
  Mist: {
    colors: ["#D7D2CC", "#304352"],
    title: "Mist",
    subtitles: "Watch out when you driving!",
    icon: "weather-fogy"
  }
};

function Weather({ weatherName, temp }) {
  return (
    <LinearGradient
      colors={weatherCases[weatherName].colors}
      style={styles.container}
    >
      <View style={styles.upper}>
        <MaterialCommunityIcons
          color="white"
          size={144}
          name={weatherCases[weatherName].icon}
        />
        <Text style={styles.temp}>{temp}˚</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>
          {weatherCases[weatherName].subtitles}
        </Text>
      </View>
    </LinearGradient>
  );
}

// what is this? is this necessary?
Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  temp: {
    fontSize: 48,
    backgroundColor: "transparent",
    color: "white",
    fontWeight: "200",
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  title: {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 10,
    fontWeight: "100"
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24,
    fontWeight: "100"
  }
});
