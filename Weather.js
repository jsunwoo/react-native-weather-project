import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title: "Raining like a poet",
    subtitles: "For more info look outside",
    icon: "ios-rainy"
  },
  Clear: {
    colors: ["#FEF253", "#FF7300"],
    title: "Sunny as hell",
    subtitles: "Go get some Vitamin D",
    icon: "ios-sunny"
  },
  Clouds: {
    colors: ["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitles: "I know, it is boring",
    icon: "ios-cloudy"
  }
};

// export default class Weather extends Component {
//     render() {
//         return (
//             <LinearGradient
//                 colors={['#00C6FB', '#005BEA']}
//                 style={styles.container}>

//                 <View style={styles.upper}>
//                     <Ionicons color='white' size={144} name='ios-rainy'/>
//                     <Text style={styles.temp}>35˚</Text>
//                 </View>
//                 <View style={styles.lower}>
//                     <Text style={styles.title}>Raining like a poet</Text>
//                     <Text style={styles.subtitle}>For more info look outside</Text>
//                 </View>
//             </LinearGradient>
//         )

//     }
// }

function Weather({ temp }) {
  return (
    <LinearGradient colors={weatherCases["Snow"].colors} style={styles.container}>
      <View style={styles.upper}>
        <Ionicons color="white" size={144} name={weatherCases["Snow"].icon} />
        <Text style={styles.temp}>{temp}˚</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases["Snow"].title}</Text>
        <Text style={styles.subtitle}>{weatherCases["Snow"].subtitles}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired
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
