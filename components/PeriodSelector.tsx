import React, { useState } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

type PeriodSelectorProps = {
    
    periodText:string,
    periodSvg:React.ReactNode
    handleSelectPeriod:(period:string)=>void;
    loggedPeriod:string;

}


export default function PeriodSelector({periodText,periodSvg,handleSelectPeriod,loggedPeriod}:PeriodSelectorProps) {





  return (
     <Pressable style={[styles.container,periodText===loggedPeriod?{backgroundColor:"#FFF0F7"}:{}]} onPress={()=>handleSelectPeriod(periodText)}>
        {periodSvg}
        <Text>{periodText}</Text>
    </Pressable>
  )
}


const styles = StyleSheet.create({
    container:{
        width:"45%",
        height:80,
        justifyContent:"center",
        alignItems:"center",
        gap:5,
        borderRadius:5
    }
})