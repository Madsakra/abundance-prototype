import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

type GoalsCardProps = {
    goals:{
        goalText:string,
        goalValue:number,
        currentProgress:number,
        goalCategory:string
    },

    color:string
}


export default function GoalsCard({goals,color}:GoalsCardProps) {

  const progress = goals.currentProgress / goals.goalValue
  const [glucoseColor,setGlucoseColor] = useState<string>("");
  const [glucoseWarning,setGlucoseWarning] = useState<string>("")

  const containerWidth = 250; // Width of the outer progress bar container
const progressBarWidth = Math.min(progress * containerWidth, containerWidth-2); // Cap the width at containerWidth
  const colorDecider = () => {
    if (progress < 0.9)
    {
        setGlucoseColor("#FFBF00");
        setGlucoseWarning("⚠️ ⚠️ Dangerously Low! Try to consume some sugar but don't go overboard")
    }

    else if (progress >= 0.95 && progress <= 1.2)
    {
        setGlucoseColor("#238823");
        setGlucoseWarning("😊 Just Right! 👍")
    }

    else{
        setGlucoseColor("#D2222D");
        setGlucoseWarning("🚨 🚨 Dangerously High! Please Monitor Closely!")
    }
};



useEffect(()=>{
    colorDecider();
},[progress]);

  return (
    <View style={styles.container}>
    <Text style={styles.goalHeader}>{goals.goalText}</Text>
    <Text style={styles.progressTrackerText}>Latest Measurement: {goals.currentProgress} / {goals.goalValue}</Text>
    <View style={[styles.progressBarContainer,{width:containerWidth}]}>
        {
            goals.goalCategory === 'glucose'?
            <View style={{height:"100%",width:progressBarWidth,backgroundColor:glucoseColor,borderRadius:20}}></View>
            :
            <View style={{height:"100%",width:progressBarWidth,backgroundColor:color,borderRadius:20}}></View>
        }
    </View>

    {goals.goalCategory === 'glucose' && 
    
    <Text style={[styles.glucoseWarning,{color:glucoseColor}]}>{glucoseWarning}</Text>
    }

 </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        width:"100%",
        height:"auto",
        borderWidth:2,
        marginBottom:20,
        borderRadius:10,
        borderColor:"#ECE9E9",
        gap:10
    },

    goalHeader:{
        fontFamily:"Poppins-Bold",
        fontSize:18
    },

    progressTrackerText:{
        fontFamily:"Poppins-Regular",
        color:"#3C3C3C",
    },


    progressBarContainer:{
        borderRadius:20,
        height:20
    },

    glucoseWarning:{
        fontFamily:"Poppins-Bold",
        fontSize:15,
        marginTop:10
    }

})