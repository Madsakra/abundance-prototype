import { AntDesign } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React from 'react'
import { Image, ImageProps, Pressable, StyleSheet, Text, View } from 'react-native'
import { RecordCardProps } from '~/app-env'


export default function RecordCard({image,itemDescription,itemSubheading,customButton}:RecordCardProps) {
  return (
    <View style={styles.container}>
    {
      image &&
      <Image source={image} style={styles.image} /> 
    }
    
    <View style={styles.textContainer}>
    <View style={{maxWidth:150}}>
      <Text style={{fontFamily:"Poppins-Bold"}}>{itemDescription}</Text>
      <Text style={{fontFamily:"Poppins-Medium",color:"#484848"}}>{itemSubheading}</Text>
    </View>

    {customButton}
 
    
    

    </View>
  </View>
  )
}


const styles = StyleSheet.create({
    container:{
    width:"100%",
    padding:15,
    borderTopWidth:1,
    height:"auto",
    gap:10,
    borderColor:"#CFCFCF",
    flexDirection:"row",
    alignItems:"center"
    },

    image:{
        width:60,
        height:60,
        borderRadius:5
    },

    textContainer:{
        justifyContent:"space-between",
        flexDirection:"row",
        flex:1,
        alignItems:"center"
    },

    removeButton:{
        padding:5,
        backgroundColor:"#D9D9D9",
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center"
    },



})