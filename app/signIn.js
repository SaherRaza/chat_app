import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { Octicons } from "@expo/vector-icons";

const SignIn = () => {
  return (
    <View onPress={Keyboard.dismiss} className="flex-1">
      <StatusBar style="dark" />
      <View
        style={{ paddingTop: hp(8), paddingHorizontal: wp(5) }}
        className="flex-1 gap-12"
      >
        {/* signIn Image */}
        <View className="items-center">
          <Image
            style={{ height: hp(25) }}
            resizeMode="contain"
            source={require("../assets/images/login.png")}
          />
        </View>
        <View className="gap-10">
          <Text
            style={{ fontSize: hp(4) }}
            className="font-bold tracking-wider text-center text-neutral-800"
          >
            SignIn
          </Text>
          {/* inputs */}
          <View className="gap-3">
            <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl"
            >
              <Octicons name="mail" size={hp(2.7)} color="gray" />
              <TextInput
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700 "
                placeholder="Email Address"
                placeholderTextColor={"gray"}
              />
            </View>
            <View className="gap-3">
              <View
                style={{ height: hp(7) }}
                className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl"
              >
                <Octicons name="lock" size={hp(2.7)} color="gray" />
                <TextInput
                  style={{ fontSize: hp(2) }}
                  className="flex-1 font-semibold text-neutral-700 "
                  placeholder="Password"
                  placeholderTextColor={"gray"}
                />
              </View>
              <Text
                style={{ fontSize: hp(1.8) }}
                className="font-semibold text-right text-neutral-500"
              >
                Forgot Password
              </Text>
            </View>
            {/* submit button */}
            <TouchableOpacity
              // className="justify-center items-center bg-slate-600 rounded-xl"
              style={{
                height: hp(6.5),
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 15,
                backgroundColor: "#6366F1",
              }}
            >
              <Text
                style={{ fontSize: hp(2.7) }}
                className="text-white font-bold tracking-wide"
              >
                Sign In
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              // className="justify-center items-center bg-indigo-500 rounded-xl"
              style={{
                height: hp(6.5),
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 15,
                backgroundColor: "#6366F1",
              }}
            >
              <Text
                style={{ fontSize: hp(2.7) }}
                className="text-white font-bold tracking-wide"
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
