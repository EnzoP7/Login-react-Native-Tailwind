import React from 'react'
import { View,Text,SafeAreaView } from 'react-native'
import ElHeader from '../ElHeader'

const Perfil = ({navigate}) => {
  return (
   <SafeAreaView>
    <ElHeader/>
    <Text>Estas En El Perfil Gato</Text>
   </SafeAreaView>
  )
}

export default Perfil