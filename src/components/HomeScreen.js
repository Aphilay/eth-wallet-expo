import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  const text = "home screen";
  return (
    <View style={styles.center}>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
});

export default HomeScreen;
