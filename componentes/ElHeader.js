import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  Menu,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from "react-native-popup-menu";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";

const ElHeader = () => {
  const navigation = useNavigation();

  
  return (
    <SafeAreaView className="bg-blue-700">
      <View className="m-6 flex-row justify-between">
        <Text className="text-3xl font-bold">EcoVentas</Text>
        <Menu>
          <MenuTrigger>
            <Icon name="menu" size={40} color="#000" />
          </MenuTrigger>
          <MenuOptions>
            <MenuOption className="" onSelect={() => navigation.navigate("Perfil")}>
              <Text>Perfil</Text>
            </MenuOption>
            <MenuOption onSelect={() =>navigation.navigate("Home")}>
              <Text>Home</Text>
            </MenuOption>
            <MenuOption >
              <Text>Cerrar Sesión</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
    </SafeAreaView>
  );
};

export default ElHeader;
