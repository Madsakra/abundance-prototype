import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Image, ImageProps, Pressable, StyleSheet, Text, View } from 'react-native'
import { RecordCardProps } from '~/app-env'


export default function RecordCard({image,itemDescription,itemSubheading,editable,operation}:RecordCardProps) {
  return (
    <View style={styles.container}>
    <Image source={image} style={styles.image} />
    
    <View style={styles.textContainer}>
    <View style={{maxWidth:150}}>
      <Text style={{fontFamily:"Poppins-Bold"}}>{itemDescription}</Text>
      <Text style={{fontFamily:"Poppins-Medium",color:"#484848"}}>{itemSubheading}</Text>
    </View>

    {editable &&
    <Pressable style={styles.removeButton}>
     {operation==='minus'?
    <AntDesign name="minus" size={20} color="black" />:
      <AntDesign name="plus" size={18} color="black" />
    } 
    </Pressable>    
    }
    

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
        width:24,
        height:24,
        backgroundColor:"#D9D9D9",
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center"
    },



})