import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { styles } from "./Style";
import { JediLogo } from "../../components/JediLogo/JediLogo";
import { JediTextInput } from "../../components/JediTextInput/JediTextInput";
import { JediButton } from "../../components/JediButton/JediButton";

export default function Home() {
  return (
    <View style={styles.appContainer}>

      <View style={styles.logoContainer}>
        <JediLogo />
      </View>

      <View style={styles.inputContainer}>
        <JediButton/>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}