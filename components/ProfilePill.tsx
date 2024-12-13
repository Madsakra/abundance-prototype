import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type ProfilePillProps = {
    svg:React.ReactNode,
    text:string | number;
}


export default function ProfilePill({svg,text}:ProfilePillProps) {
  return (
    <View style={styles.container}>
        {svg}
      <Text style={{fontFamily:"Poppins-Medium",fontSize:15,}}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        paddingVertical:7,
        paddingHorizontal:25,
        borderWidth:1,
        borderColor:"#8797DA",
        borderRadius:30,
        flexDirection:"row",
        gap:14,alignItems:"center"
    }

})