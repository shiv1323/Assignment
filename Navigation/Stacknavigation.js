import { StyleSheet,View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomNav from "../Screens/BottomNav";
import Home from "../Screens/Home";
import Detail from "../component/Detail";
import { Avatar} from "react-native-elements";
import Designicon from "../component/Designicon";
import { TouchableOpacity } from "react-native";

const Stack = createStackNavigator();

const Stacknavigation = () => {
  const globalScreenOptions = {
    headerStyle: { backgroundColor: "#fff" },
    headerTitleStyle: { color: "#3a643b" },
    headerTintColor: "#000",
  };

  return (
    <Stack.Navigator
      initialRouteName="Bottom"
      screenOptions={globalScreenOptions}
    >
      <Stack.Screen
        name="Bottom"
        component={BottomNav}
        options={{
          headerTitle: "Amrutam Blog",
          headerLeft: () => (
            <Designicon
              name="chevron-back-circle-outline"
              type="ionicon"
              color="#3a643b"
            />
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: 80,
                marginRight: 55,
              }}
            >
              <TouchableOpacity activeOpacity={0.5}>
                <Designicon name="search" color="grey" />
              </TouchableOpacity>
              <View style={{ width: 20 }} />
              <TouchableOpacity activeOpacity={0.5}>
                <Designicon name="shopping-bag" color="grey" />
              </TouchableOpacity>
              <View style={{ width: 20 }} />
              <TouchableOpacity activeOpacity={0.5}>
                <Avatar
                  rounded
                  source={{
                    uri: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1682071541~exp=1682072141~hmac=57766525024f5add88dab6715a9fb1b0712368496b4c5e1bd02c8222dfd7c826",
                  }}
                  containerStyle={styles.avatarContainer}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Amrutam Blog"
        component={Detail}
        options={{
          headerBackImage: () => (
            <Designicon
              name="chevron-back-circle-outline"
              type="ionicon"
              color="#3a643b"
            />
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: 80,
                marginRight: 55,
              }}
            >
              <TouchableOpacity activeOpacity={0.5}>
                <Designicon name="search" color="grey" />
              </TouchableOpacity>
              <View style={{ width: 20 }} />
              <TouchableOpacity activeOpacity={0.5}>
                <Designicon name="shopping-bag" color="grey" />
              </TouchableOpacity>
              <View style={{ width: 20 }} />
              <TouchableOpacity activeOpacity={0.5}>
                <Avatar
                  rounded
                  source={{
                    uri: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1682071541~exp=1682072141~hmac=57766525024f5add88dab6715a9fb1b0712368496b4c5e1bd02c8222dfd7c826",
                  }}
                  containerStyle={styles.avatarContainer}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default Stacknavigation;

const styles = StyleSheet.create({
  avatarContainer: {
    marginRight: 16,
  },
});
