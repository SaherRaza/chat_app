import { Slot } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
// Import your global CSS file
import "../global.css";

import React from "react";

const _layout = () => {
  return (
    <View>
      <Slot />
    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({});
