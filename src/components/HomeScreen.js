import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import KeyDisplay from "./KeyDisplay";

const HomeScreen = () => {
  const text = "home screen";
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Ember Ethereum Wallet</Text>
      <View style={styles.keyContainer}>
        <KeyDisplay label={"Public Key: "} generatedKey={" public key here"} />
        <KeyDisplay label={"Private Key: "} generatedKey={" pvt key here"} />
      </View>

      <TouchableHighlight
        style={styles.button}
        onPress={() => console.log("generate a new key")}
        underlayColor="dimgray"
      >
        <Text style={styles.buttonText}>Generate a new one</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cornflowerblue",
  },
  titleText: {
    paddingLeft: 80,
    paddingVertical: 100,
    fontSize: 24,
  },
  keyContainer: {
    paddingLeft: 20,
    paddingVertical: 80,
  },
  button: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  buttonText: { color: "black", textAlign: "center" },
});

export default HomeScreen;
