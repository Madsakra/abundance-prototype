import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import RecordsTable from '~/UI/Dashboard/RecordsTable';
import {  router } from 'expo-router';
import RecordTopButton from '~/components/RecordTopButton';
import FunctionTiedButton from '~/components/FunctionTiedButton';
import * as DB from '../../../../sqlDatabase'
import { RecordCardProps } from '~/app-env';




export default function caloriesLogging() {

  
  // HARDCODED DATA FOR PROTOTYPE
  // SUPPOSED TO MAKE API CALL HERE

  const [records,setRecords] = useState<RecordCardProps[]>([]);
  const [loading,setLoading] = useState(true);

  const queryDB = async ()=>{
      const queryRecord = await DB.db.getAllAsync('SELECT * FROM CaloriesIntake');
      let tempContainer:RecordCardProps[] = [];
      for (const record of queryRecord)
      {
          
          const typedArticle = record as RecordCardProps;
          tempContainer.push(typedArticle);
      }

      setRecords(tempContainer);
      setLoading(false);
  }


  const calorieIntakeImages = require("assets/testImages/placeholder.jpg");
   
  


  

    const redirectToAddMeals = ()=>{
      router.push('/calories/addMeals')
    }

    const redirectToLogOutput = ()=>{
      router.push('/calories/caloriesOutput')
    }
    
  useEffect(()=>{
    queryDB();
  },[])

  if (loading)
  {
    return <Text>Loading...</Text>
  }



  if (!loading)
  {
  return (
    
    <ScrollView style={{padding:20}}>
        {/*Main Container*/}
        <Text style={{fontFamily:"Poppins-Bold",fontSize:20}}>Net Calories Intake</Text>


        {/* CALORIE INTAKE SECTION*/}
        {/* TOP BUTTON*/}
        <View style={{flex:1,marginVertical:"8%"}}>

          <RecordTopButton buttonText="Add Meals" bgColor='#C68F5E' redirect={redirectToAddMeals}/>
          {/*SUB COMPONENT HERE UNDER UI FOLDER*/}
          <RecordsTable 
          tableHeader="Calories Intake"
          tableData={records}
          image={calorieIntakeImages}
          totalCalories={450}
          finalTabName="Total Calories Intake"
          editable={true}
          />
      
          <FunctionTiedButton onPress={redirectToLogOutput} 
          title="Next" 
          buttonStyle={styles.buttonContainer}
          textStyle={styles.textStyle}/>


        </View>

    </ScrollView>
  )
}}

const styles = StyleSheet.create({
  buttonContainer:{
    marginTop:5,
    padding:15,
    backgroundColor:"#C68F5E",
    borderRadius:10,
  },

  textStyle:{
    textAlign:"center",
    fontFamily:"Poppins-Bold",
    color:"white",
    fontSize:15,
  }
})