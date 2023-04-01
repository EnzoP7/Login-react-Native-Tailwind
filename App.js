import { NavigationContainer } from "@react-navigation/native";
import { Header, createStackNavigator } from "@react-navigation/stack";
import { onAuthStateChanged } from "firebase/auth";
import { View, ActivityIndicator } from "react-native";
import { MenuProvider } from "react-native-popup-menu";

import { async } from "@firebase/util";
import { auth } from "./Config/firebase";

import Login from "./componentes/Screens/Login";
import SingUp from "./componentes/Screens/Singup";
import Home from "./componentes/Screens/Home";

import { createContext, useContext, useEffect, useState } from "react";
import Perfil from "./componentes/Screens/Perfil";
const Stack = createStackNavigator(); //Creamos Contexto
const AuthenticatedUserContext = createContext({});

export default function App() {
  const LoginySingUp = () => {
    return (
      <Stack.Navigator
        defaultScreenOptions={Login}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SingUp" component={SingUp} />
      </Stack.Navigator>
    );
  };

  const Ingresado = () => {
    return (
      <Stack.Navigator
      initialRouteName= "Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Perfil" component={Perfil} />
       
       
      </Stack.Navigator>
    );
  };

  //Creamos la funcion del Contexto

  const AuthenticatedUserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
      <AuthenticatedUserContext.Provider value={{ user, setUser }}>
        {children}
      </AuthenticatedUserContext.Provider>
    );
  };

  const RootNavigator = () => {
    //Traemps el user y setuser del Contexto
    const { user, setUser } = useContext(AuthenticatedUserContext);
    //Creamos un Loading
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      //Creamos constante y llamamos a onAuthStateChanged que se le manda la Auth que es la data de el firebase
      const unsubscribe = onAuthStateChanged(
        auth,
        async (AuthenticatedUser) => {
          //si el  AuthenticatedUser existe entonces que lo guarde sino que lo marque nullo
          AuthenticatedUser ? setUser(AuthenticatedUser) : setUser(null);
          setLoading(false);
        }
      );

      return () => {
        //Esto es para que se quite este componente, tambien se quite el useeffect y no se corra de mas
        unsubscribe();
      };
    }, [user]);

    if (loading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <NavigationContainer>
        {user ? <Ingresado /> : <LoginySingUp />}
      </NavigationContainer>
    );
  };



 
  return (
    <AuthenticatedUserProvider>
      {/* Este Menu Provider es para el icono No es tan Importante */}
      <MenuProvider> 
        <RootNavigator />
      </MenuProvider>
    </AuthenticatedUserProvider>
  );
}
