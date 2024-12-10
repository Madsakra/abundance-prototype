
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import KeyMetrics from '~/UI/Dashboard/KeyMetrics';

import GoalsTracking from '~/UI/Dashboard/GoalsTracking';
import MealReccomen from '~/UI/Dashboard/MealReccomen';
import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import Articles from '~/UI/Dashboard/Articles';
import * as DB from '../../articleData';
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";



export default function Home() {

  const [activeTab, setActiveTab] = useState<'calories' | 'glucose'>('calories'); 

 
  useDrizzleStudio(DB.db);
  





  useFocusEffect(
    useCallback(() => {
      // Reload or refresh logic here
      setActiveTab('calories');
    
      // Fetch data or reset state
    }, [])
  );





  return (
    <View style={{flex:1}}>
    

      <ScrollView style={{padding:15,backgroundColor:"white"}}>
    
      
      {/* KEY METRICS */}
      <Text style={styles.header}>Key Metrics</Text>
      <KeyMetrics activeTab={activeTab} setActiveTab={setActiveTab}/>

      <Text style={styles.header}>Goals</Text>

      <GoalsTracking/>

      <Text style={styles.header}>Meal Plan Recommendation</Text>
      <Text style={{fontFamily:"Poppins-Light",marginLeft:5,marginBottom:5}}>Based the nutritionist recommendations and the time of the day, here is the following meal recommendation:</Text>

      <MealReccomen/>

      <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:25}}>
      <Text style={styles.header}>Articles for you</Text>
      <Text style={styles.seeAll}>SEE ALL</Text>
      </View>

        <Articles/>

      </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
    header:{
      fontFamily:"Poppins-Bold",
      fontSize:25,
      color:"#00ACAC",
      marginLeft:5
      
    },
    seeAll:{
      fontFamily:"Poppins-Bold",
      fontSize:14,
      color:"#515151",
      alignSelf:"flex-end"
      
  }

})