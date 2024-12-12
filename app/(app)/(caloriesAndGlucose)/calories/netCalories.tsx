import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { RecordCardProps } from '~/app-env';
import CustomModal from '~/components/CustomModal';
import FunctionTiedButton from '~/components/FunctionTiedButton';
import RecordsTable from '~/UI/Dashboard/RecordsTable';

export default function netCalories() {

    const calorieIntakeImages = [
        require("assets/testImages/burnFats.jpg"),
        require("assets/testImages/burnFats.jpg"),

    ];



 
  const records:RecordCardProps[] = [
    {
        id:1,
        foodName:"Total Intake",
        unitMeasurement:"Kcal",
        calories:450,
    },
    {
        id:2,
        foodName:"Total Output",
        unitMeasurement:"Kcal",
        calories:295,
    },


  ]


    const goBack = ()=>{
        router.replace('/(app)/(caloriesAndGlucose)/calories/caloriesOutput')

    }

    
    const [showModal,setShowModal] = useState(false);


    const handleSave = ()=>{
        setShowModal(false);
        router.replace('/(app)/(caloriesAndGlucose)/calories/caloriesGraph')
    }

    const handleClose = ()=>{
        setShowModal(false);
    }


  return (
    <ScrollView style={{padding:20}}>
        {/*Main Container*/}
        <Text style={{fontFamily:"Poppins-Bold",fontSize:20}}>Calories Ouput</Text>


        {/* CALORIE INTAKE SECTION*/}
        {/* TOP BUTTON*/}
        <View style={{flex:1,marginVertical:"8%"}}>

          {/*SUB COMPONENT HERE UNDER UI FOLDER*/}
          <RecordsTable 
          tableHeader="Net Calorie Intake"
          tableData={records}
          totalCalories={295}
          finalTabName="Net Calories Intake"
          />
      
        <View style={{flexDirection:'row',justifyContent:"space-between"}}>
        
        <FunctionTiedButton onPress={goBack} 
          title="Go Back" 
          buttonStyle={[styles.buttonContainer,{backgroundColor:"#969696",width:"35%"}]}
          textStyle={styles.textStyle}/>
        
        <FunctionTiedButton onPress={()=>setShowModal(true)} 
          title="Log Calories" 
          buttonStyle={[styles.buttonContainer,{width:"60%",backgroundColor:"#C68F5E"}]}
          textStyle={styles.textStyle}/>
        </View>

    
        </View>


        {showModal && 
        <CustomModal 
        showModal={showModal} 
        handleSave={handleSave} 
        handleClose={handleClose}
        themeColor="#C38154"
        successMessage="Logging successful"
        message='Log Information'
        icon={<FontAwesome name="book" size={50} color="#C38154" />}/>}

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  buttonContainer:{
    marginTop:5,
    padding:15,
    borderRadius:10,
  
  },

  textStyle:{
    textAlign:"center",
    fontFamily:"Poppins-Bold",
    color:"white",
    fontSize:15,
  }
})