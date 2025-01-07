import React from "react";
import { View, StyleSheet, ViewStyle, Text } from "react-native";
import { DimensionValue } from "react-native";


interface CustomViewProps {
    children:React.ReactNode;
    width: DimensionValue;
    inputLabel:string;
}



export default function InputContainer({children,width,inputLabel}:CustomViewProps) {
  return (
    <View style={[styles.container,{width:width}]}>
        <Text style={styles.label}>{inputLabel}</Text>
        {children}
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#F0F0F0",
        paddingVertical:12,
        paddingHorizontal:25,
        borderRadius:50
    },
    label:{
        fontFamily:"Poppins-Medium",
        color:"#838383"
    }
})
