import {
  Outfit_400Regular,
  Outfit_600SemiBold,
  Outfit_700Bold,
  Outfit_900Black,
  useFonts,
} from "@expo-google-fonts/outfit";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const index = () => {
  let [fontsLoaded] = useFonts({
    Outfit_400Regular,
    Outfit_700Bold,
    Outfit_900Black,
    Outfit_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.headingcontainer}>
        <Text style={styles.heading}>Get it done. </Text>
        <Text style={styles.heading2}>
          Become{" "}
          <Text style={{ color: "#EC6A3A", fontFamily: "Outfit_700Bold" }}>
            100x
          </Text>{" "}
          more productive.
        </Text>
      </View>
      <Image
        source={require("@/assets/images/rocket.png")}
        style={styles.rocketImage}
      />
      <Image
        source={require("@/assets/images/man.png")}
        style={styles.manImage}
      />
      <Image
        source={require("@/assets/images/coffee.png")}
        style={styles.coffeeImage}
      />
      <Image
        source={require("@/assets/images/glass.png")}
        style={styles.glassImage}
      />

      <View style={styles.buttonContainer}>
        <Text style={styles.loginButton}>Login</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    flex: 1,
    position: "relative",
    backgroundColor: "#eeebd9",
  },
  headingcontainer: {
    padding: 30,
    paddingTop: 80,
  },
  heading: {
    fontFamily: "Outfit_900Black",
    fontSize: 68,
  },
  heading2: {
    fontFamily: "Outfit_400Regular",
    fontSize: 22,
    paddingLeft: 8,
  },

  manImage: {
    width: "85%",
    height: "85%",
    objectFit: "contain",
    position: "absolute",
    bottom: 0,
    right: "-10%",
  },
  rocketImage: {
    width: "20%",
    height: "20%",
    objectFit: "contain",
    position: "absolute",
    top: "18%",
    right: 50,
  },
  coffeeImage: {
    width: "22%",
    height: "22%",
    objectFit: "contain",
    position: "absolute",
    top: "30%",
    left: "5%",
  },
  glassImage: {
    width: "20%",
    height: "20%",
    objectFit: "contain",
    position: "absolute",
    top: "60%",
    left: "15%",
  },

  buttonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
  },

  loginButton: {
    backgroundColor: "#EC6A3A",
    color: "white",
    padding: 15,
    borderRadius: 10,
    textAlign: "center",
    fontFamily: "Outfit_600SemiBold",
    fontSize: 25,
    width: "80%",
    lineHeight: 30,
  },
});

export default index;
