import { View, ScrollView, SafeAreaView } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { useState } from "react";

import { COLORS, icons, images, SIZE } from "../components"
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components"

export default function Home() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor: "#FAFAFC"  }}>

      <Stack.Screen options={{ 
        headerStyle: { backgroundColor: "#FAFAFC" },
        headerShadowVisible: false,
        headerLeft: () => (
          <ScreenHeaderBtn dimension="60%" />
        ),
        headerRight: () => (
          <ScreenHeaderBtn dimension="100%" />
        ),
        headerTitle:"hi "
       }} />
       <ScrollView>
        <View
        style={{flex: 1, padding: 10,
        }}>
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />

        </View>
       </ScrollView>

    </SafeAreaView>
  );
}