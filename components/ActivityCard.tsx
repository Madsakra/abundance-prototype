import React, { useState } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

type ActivityCardProps = {
    
    activityHeader:string,
    dateTime:string,
    timeTaken:string,
    caloriesConsumed:string,


}


export default function ActivityCard({activityHeader,dateTime,timeTaken,caloriesConsumed}:ActivityCardProps) {
  
    const [selected,setSelected] = useState(false);
    


    return (
    <Pressable onPress={()=>setSelected(!selected)}
    style={[styles.container,selected?{backgroundColor:"#C68F5E"}:{backgroundColor:"#ACACAC"}]}  >
            <Text style={styles.activityHeader}>{activityHeader}</Text>
            <Text style={styles.textFont}>{dateTime}</Text>
            <Text style={styles.textFont}>{timeTaken}</Text>
            <Text style={styles.textFont}>{caloriesConsumed}</Text>
        </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
    paddingVertical:20,
    paddingHorizontal:15,
    borderRadius:20,
    marginTop:15
    },

    activityHeader:{
        fontFamily:"Poppins-Bold",
        color:"white",
        fontSize:25,
    },

    textFont:{
        fontFamily:"Poppins-Bold",
        color:"white",
        fontSize:15,

    }
})