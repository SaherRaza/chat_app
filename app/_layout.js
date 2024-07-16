import { Slot, useRouter, useSegments } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
// Import your global CSS file
import "../global.css";

import React, { useEffect } from "react";
import { useAuth } from "../context/authContext";

const MainLayout = () => {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    console.log("SEGMENTS", segments);
    //check if user is authenticated or not
    if (typeof isAuthenticated == "undefined") return;
    const inApp = segments[0] == "(app)";
    if (isAuthenticated && inApp) {
      // redirect to home
      router.replace("home");
    } else if (isAuthenticated == false) {
      // redirect to login
      router.replace("signIn");
    }
  }, [isAuthenticated]);
};

const _layout = () => {
  return (
    <View className="flex-1">
      <Slot />
    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({});
