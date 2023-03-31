import React,{useState} from 'react'
import { View,Text,TextInput,TouchableOpacity,StatusBar } from 'react-native'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ImageBackground } from 'react-native';
import {auth} from "../../Config/firebase"
const backImage = require("../../assets/backImage.png");

const SingUp = ({navigation}) => {
 //Creamos estados para el email y la password
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 //Creamos Funcion que si no es null los campos llamamos al metodo de firebase para crear el usuario y eso noma xd
const onHandleSignup = () => {
   if (email !== '' && password !== '') {
 createUserWithEmailAndPassword(auth, email, password)
       .then(() => console.log('Signup success'))
       .catch((err) => Alert.alert("Login error", err.message));
   }
 };


  return (
    <ImageBackground source={backImage} style={{ flex: 1 }} className="bg-cover">
        
        <View className="flex-1 bg-white/80 mt-24 mx-5  rounded-lg mb-10">

            <View className="mt-11">

            <View className=" text-center "> 
            
            <Text className="text-center text-6xl mt-5 p-5 font-bold">
               SingUp
            </Text>


            <TextInput className=" flex rounded-lg w-10/12 self-center bg-gray-400 p-5 text-xl"
               placeholder='Ingresa tu Email'
               autoCapitalize="none"
               keyboardType="email-address"
               textContentType="emailAddress"
               value={email}
               onChangeText={(text) => setEmail(text)}
               >
                
            </TextInput>



            <TextInput className="mt-10 flex rounded-lg w-10/12 self-center bg-gray-400 p-5 text-xl"
               placeholder='Ingresa tu Password'
               autoCapitalize="none"
               autoCorrect={false}
               secureTextEntry={true}
               textContentType="password"
               value={password}
               onChangeText={(text) => setPassword(text)}
               >
                
            </TextInput>


            <TouchableOpacity className="flex mt-10  bg-slate-900/80 self-center items-center p-5 w-10/12 rounded-lg" onPress={onHandleSignup}>

                <Text className="font-bold text-white text-lg">Sing Up</Text>

            </TouchableOpacity>

           <View className="mt-5 items-center self-center flex-row">
            <Text>No tienes una Cuenta?

            </Text>
            <TouchableOpacity  onPress={() => navigation.navigate("Login")}>
                <Text className="font-bold text-orange-500"> LogIn</Text>
            </TouchableOpacity>

           </View>

            </View>
            </View>
        </View>
        <StatusBar barStyle="light-content" />
  </ImageBackground>
  )
}

export default SingUp