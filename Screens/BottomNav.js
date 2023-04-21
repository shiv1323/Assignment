import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Designicon from "../component/Designicon";
import Home from "./Home";


function Consult() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Consult</Text>
    </View>
  );
}

function Orders() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Orders</Text>
    </View>
  );
}

function Store() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Store</Text>
    </View>
  );
}

function Bulletin() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Bulletin</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();
const BottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#3a643b",
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#fff",
          borderRadius: 15,
          height: 60,
          ...styles.shadow,
        },
        tabBarLabelStyle: {
          bottom: 5,
          fontSize: 15,
        },
        headerShown:false
      }}
      
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
              <Designicon
                name="sunny-outline"
                color={color}
                size={35}
                type="ionicon"
              />
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          tabBarLabel: "Store",
          tabBarIcon: ({ color }) => <Designicon name="store" color={color} />,
        }}
      />
      <Tab.Screen
        name="Order"
        component={Orders}
        options={{
          tabBarLabel: "Orders",
          tabBarIcon: ({ color }) => (
            <Designicon name="list-alt" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Consult"
        component={Consult}
        options={{
          tabBarLabel: "Consult",
          tabBarIcon: ({ color }) => <Designicon name="leaf" color={color} />,
        }}
      />
      <Tab.Screen
        name="Bulletin"
        component={Bulletin}
        options={{
          tabBarLabel: "Bulletin",
          tabBarIcon: ({ color }) => <Designicon name="spa" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#bec7d5",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  line:{
    width:50,
    height:5,
    backgroundColor:"#3a643b",
    marginTop:40
  }
});
