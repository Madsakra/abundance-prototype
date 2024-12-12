import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type GlucoseDataRowProps = {
    date:string;
    time:string;
    reading:number;
    period:string;
}


export default function GlucoseDataRow({date,time,reading,period}:GlucoseDataRowProps) {
  return (
   <View style={styles.container}>
         <View style={{flex: 1,}}>
             <Text style={styles.textRow}>{date}</Text>
         </View>
         <View style={{flex: 1}}>
             <Text style={styles.textRow}>{time}</Text>
         </View>
         <View style={{flex: 1}}>
             <Text style={styles.textRow}>{reading}</Text>
         </View>
         <View style={{flex: 1}}>
             <Text style={styles.textRow}>{period}</Text>
         </View>
     </View>
  )
}
const styles = StyleSheet.create({

    container:{
        flexDirection: "row", 
        
        paddingVertical:15,
        borderBottomWidth:1,
        borderColor:"#DB8189"
    },

    textRow:{
        fontFamily:"Poppins-Medium",
        fontSize:13,
 
    }
})