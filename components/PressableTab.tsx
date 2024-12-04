import React, { useState } from 'react'
import { Pressable, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'


type PressableTabProps = {
    tabBoxStyle:StyleProp<ViewStyle>;
    innerCircleStyle?:StyleProp<ViewStyle>;
    tabTextStyle:StyleProp<TextStyle>;
    tabValue:string;

  
}


export default function PressableTab({tabBoxStyle,innerCircleStyle,tabTextStyle,tabValue}:PressableTabProps) {

  const [pressed,setPressed] = useState(false);

  const pressedStyle = [tabBoxStyle,{backgroundColor:'#8797DA'}]
  const unpressedStyle = [tabBoxStyle,{backgroundColor:'#949494'}]

  const handlePress = ()=>{
    setPressed(true);
  }



  return (
    <TouchableOpacity style={pressed?pressedStyle:unpressedStyle} onPress={handlePress}>
        <View style={innerCircleStyle}></View>
        <Text style={tabTextStyle}>{tabValue}</Text>
    </TouchableOpacity>
  )
}


