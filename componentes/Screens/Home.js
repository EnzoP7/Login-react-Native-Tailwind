import { StatusBar } from "expo-status-bar";
import { SafeAreaView,  StyleSheet, Switch, Text, View } from "react-native";
import { useColorScheme } from "nativewind";
import ProductsList from "../ProductsList";
import Header from "../ElHeader";

const Home = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <SafeAreaView className="flex-1  bg-gray-200 dark:bg-black mt-8">
       <Header/>
    <View className="flex-row w-full gap-5">
     
      <Text className="dark:text-white text-2xl font-semibold">
       {colorScheme === "dark" ?  "black" : "Light"}
      </Text>
      <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
    </View>
     <ProductsList /> 

    <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
  </SafeAreaView>
  )
}

export default Home