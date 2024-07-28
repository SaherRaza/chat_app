import { Slot, useRouter, useSegments } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
// Import your global CSS file
import "../global.css";

import React, { useEffect, useContext } from "react";
import { AuthContextProvider, useAuth } from "../context/authContext";

const MainLayout = () => {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    console.log("SEGMENTS", segments);
    //check if user is authenticated or not
    if (typeof isAuthenticated == "undefined") return;
    const inApp = segments[0] == "(app)";
    if (isAuthenticated && !inApp) {
      // redirect to home
      router.replace("home");
    } else if (isAuthenticated == false) {
      // redirect to login
      router.replace("signIn");
    }
  }, [isAuthenticated]);
  // Ensure Slot or a navigator is rendered
  return <Slot />;
};

export default function RooLayout() {
  return (
    <AuthContextProvider>
      <MainLayout />
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({});
