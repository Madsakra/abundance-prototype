import React from 'react'
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import RecordsTable from '~/UI/Dashboard/RecordsTable';
import { Link, router } from 'expo-router';
import RecordTopButton from '~/components/RecordTopButton';
import FunctionTiedButton from '~/components/FunctionTiedButton';




export default function caloriesLogging() {

  // HARDCODED DATA FOR PROTOTYPE
  // SUPPOSED TO MAKE API CALL HERE

  const caloriesIntakeData = 
    {
      tableHeader:"Calories Intake",
      tableData:[
        {
          image:require("assets/testImages/nasi1.jpg"),
          itemDescription:"Nasi Lemak",
          itemSubheading:"364 kcal/serving",
          editable:true,
          operation:'minus'
        },
        {
          image:require("assets/testImages/nasi2.jpg"),
          itemDescription:"Nasi Lemak 2",
          itemSubheading:"364 kcal/serving",
          editable:true,
          operation:'minus'
        },
        {
          image:require("assets/testImages/nasi1.jpg"),
          itemDescription:"Nasi Lemak",
          itemSubheading:"364 kcal/serving",
          editable:true,
          operation:'minus'
        },

        
        
      ],
      topButtonRef:"/"
    }
  

    const redirectToAddMeals = ()=>{
      router.replace('/calories/addMeals')
    }

    const redirectToLogOutput = ()=>{
      router.replace('/')
    }
    

  return (
    
    <ScrollView style={{padding:20}}>
        {/*Main Container*/}
        <Text style={{fontFamily:"Poppins-Bold",fontSize:20}}>Calories Logging</Text>


        {/* CALORIE INTAKE SECTION*/}
        {/* TOP BUTTON*/}
        <View style={{flex:1,marginVertical:"8%"}}>

          <RecordTopButton buttonText="Add Meals" bgColor='#C68F5E' redirect={redirectToAddMeals}/>
          {/*SUB COMPONENT HERE UNDER UI FOLDER*/}
          <RecordsTable 
          tableHeader={caloriesIntakeData.tableHeader}
          tableData={caloriesIntakeData.tableData}
          />
      
          <FunctionTiedButton onPress={redirectToLogOutput} 
          title="Log Output" 
          buttonStyle={styles.buttonContainer}
          textStyle={styles.textStyle}/>


        </View>

    </ScrollView>
  )
}

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