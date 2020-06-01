// this screen is the home screen which uses the KeyDisplay component as a child component
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import KeyDisplay from "../components/KeyDisplay";
import Constants from "expo-constants";
import * as Crypto from "expo-crypto";
const HomeScreen = () => {
  //useState react hook to manage the state of keys
  //initial value is an empty string => ""
  const [publicKey, setPublicKey] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  // UseEffect executes the below function upon initial app load
  useEffect(() => {
    getKey();
  }, []);

  async function getKey() {
    console.log("app started....");
    // get the unique device ID
    const deviceID = Constants.installationId.toString();
    //console.log(`DEVICE ID: ${deviceID}`);

    //has the deviceID with SHA256
    const digest = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      deviceID
    );

    setPublicKey(`0x ${digest}`);
    setPrivateKey(deviceID);
  }

  const generateKeyPair = () => {
    let newPubKey = "new public key";
    let newPrivKey = "new private key";
    setPublicKey(newPubKey);
    setPrivateKey(newPrivKey);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Ember Ethereum Wallet</Text>
      <View style={styles.keyContainer}>
        <KeyDisplay label={"Public Key: "} generatedKey={publicKey} />
        <KeyDisplay label={"Private Key: "} generatedKey={privateKey} />
      </View>

      <TouchableHighlight
        style={styles.button}
        onPress={() => generateKeyPair()}
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
