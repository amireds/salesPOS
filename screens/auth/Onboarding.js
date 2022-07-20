import React, { useLayoutEffect } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

import AuthStyles from "./authStyles";
import colors from "../../utils/colors";
import { WIDTH } from "../../utils/lib";
import { Ionicons } from "@expo/vector-icons";

function Onboard({ navigation }) {
  const gotoLogin = () => navigation.replace("baseAuth");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "",
      headerShadowVisible: false,
      headerTransparent: true,
      headerBackVisible: false,
      headerRight: () => (
        <TouchableOpacity
          style={AuthStyles.onboarding.skipBtnContainer}
          onPress={gotoLogin}
        >
          <Text style={AuthStyles.onboarding.skipBtnText}>Skip</Text>
        </TouchableOpacity>
      ),
    });
  }, []);
  const slides = [
    {
      backgroundColor: colors.white,
      image: require("../../assets/auth/imgOne.png"),
      title: "Easy to use mobile pos",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit mauris.",
    },
    {
      backgroundColor: "#fff",
      image: require("../../assets/auth/imgTwo.png"),
      title: "Choose your features",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit mauris.",
    },
    {
      backgroundColor: "#fff",
      image: require("../../assets/auth/imgThree.png"),
      title: "All business solutions",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit mauris.",
    },
  ];

  function renderItem({ item, index }) {
    return (
      <SafeAreaView
        key={item.title}
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          width: WIDTH,
        }}
      >
        <View style={AuthStyles.onboarding.container}>
          <View
            style={[
              AuthStyles.onboarding.imgContainer,
              {
                height: index === 0 ? 288 : index === 1 ? 320 : 314,
                width: index === 0 ? 326 : index === 1 ? 315 : 306,
              },
            ]}
          >
            <Image source={item.image} style={AuthStyles.onboarding.image} />
          </View>
          <Text style={AuthStyles.onboarding.title}>{item.title}</Text>
          <Text style={AuthStyles.onboarding.subtitle}>{item.subtitle}</Text>
        </View>
      </SafeAreaView>
    );
  }

  function nextBtn() {
    return (
      <View style={AuthStyles.onboarding.nextBtnContainer}>
        <Text style={[AuthStyles.onboarding.nextBtnText, { marginRight: 8 }]}>
          Next
        </Text>
        <Ionicons name="ios-arrow-forward" size={24} color={colors.white} />
      </View>
    );
  }

  function doneBtn() {
    return (
      <TouchableOpacity
        onPress={gotoLogin}
        style={AuthStyles.onboarding.nextBtnContainer}
      >
        <Text style={AuthStyles.onboarding.nextBtnText}>Get Started</Text>
      </TouchableOpacity>
    );
  }

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      bottomButton={true}
      dotStyle={{
        borderColor: colors.primary,
        borderWidth: 1,
        width: 6,
        height: 6,
        marginBottom: 200,
      }}
      activeDotStyle={{
        backgroundColor: colors.primary,
        height: 6,
        marginBottom: 200,
        width: 20,
      }}
      renderNextButton={nextBtn}
      renderDoneButton={doneBtn}
      showSkipButton={false}
    />
  );
}

export default Onboard;
