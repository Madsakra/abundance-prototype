import { Entypo } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Pressable, ScrollView } from 'react-native-gesture-handler';
import { RecordCardProps } from '~/app-env';
import CustomTextInput from '~/components/CustomTextInput';
import { db } from '~/sqlDatabase';

export default function foodInformation() {

    const { foodID } = useLocalSearchParams();
    const foodIDNumber = Number(foodID)
    const calorieOptionsImages = [
      require("assets/calorieImages/applePie.jpg"),
      require("assets/calorieImages/burrito.jpg"),
      require("assets/calorieImages/coke.jpg"),
      require("assets/calorieImages/dumplings.jpg"),
      require("assets/calorieImages/eggplantParm.jpg"),
      require("assets/calorieImages/fettu.jpg"),
      require("assets/testImages/placeholder.jpg")
    ]

    
    const [foodOption,setFoodOption] = useState<RecordCardProps |null>(null)
    const [loading,setLoading] = useState(true);
    const [portion,setPortion] = useState<number|null>(null);
    const [measurementUnit,setMeasurementUnit] = useState<string>("");
    const [timeConsumed,setTimeConsumed] = useState<string>("");


 const queryDB = async ()=>{
    if (typeof foodID === 'string') {
        
        const parsedId = Number(foodID);
     
        if (!isNaN(parsedId)) {
            
            const selectedArticle= await db.getAllAsync<RecordCardProps>(
                `SELECT *
                FROM FoodOptions
                WHERE id = ?; 
                `
              ,[parsedId]);
              
              setFoodOption(selectedArticle[0]);
              setLoading(false);


        } else {
          console.error('Invalid ID: Not a number');
        }
    }      
}


  const addFood = ()=>{
    // CALL API HERE TO ADD ON FOOD TO THE BACKEND
    try{

      if (!portion || portion <0)
      {
        alert("Please enter the portion size to your meal!")
      }

      else{
        router.replace("/(app)/(caloriesAndGlucose)/calories/caloriesInput");
      }

    }

    catch(err)
    {
      console.log(err)
    }
  }

  const goBack = ()=>{
    router.replace("/(app)/(caloriesAndGlucose)/calories/addMeals");
  }


  useEffect(()=>{
    queryDB();

  },[])

    if (loading && foodOption === null)
    {
      return <Text>Loading...</Text>
    }

    if (foodOption && !loading)
    {

      return (
        <View style={{flex:1,padding:5}}>

          <Pressable style={styles.backButton} onPress={goBack}>
          <Entypo name="chevron-left" size={35} color="black" />
          </Pressable>

          <Image source={calorieOptionsImages[foodIDNumber-1]} style={{width:"100%",height:350}}/>
          <ScrollView style={{padding:15}}>
              <Text style={{fontFamily:"Poppins-Bold",fontSize:27}}>{foodOption.foodName}</Text>
    
         
                <View style={{width:"100%",marginVertical:15}}>
                  <Text style={[styles.textFont,{color:"#A5A5A5",fontSize:18}]}>Total Calories</Text>
                  <Text style={[styles.textFont,{fontSize:18}]}>{foodOption.calories} {foodOption.unitMeasurement}</Text>
                </View>
    
       
            
    
    
              {/* More nutritional values*/}
              <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:"center",marginVertical:15}}>
                <View>
                  <Text style={[styles.textFont,{color:"#A5A5A5"}]}>Carbs</Text>
                  <Text style={styles.textFont}>{foodOption.carbs}g</Text>
                </View>
    
                <View>
                  <Text style={[styles.textFont,{color:"#A5A5A5"}]}>Fats</Text>
                  <Text style={styles.textFont}>{foodOption.fats}g</Text>
                </View>
    
                <View>
                  <Text style={[styles.textFont,{color:"#A5A5A5"}]}>Protein</Text>
                  <Text style={styles.textFont}>{foodOption.protein}g</Text>
                </View>
              </View>
              
              {/* Calculation*/}
              <Text style={{fontFamily:"Poppins-Bold",fontSize:24,marginTop:15,marginBottom:2,color:"#C68F5E"}}>Calories Calculation</Text>
    
                  <CustomTextInput 
                  label='Portion Consumed'
                  inputValue={portion}
                  setInputValue={setPortion}
                  placeHolder='Enter your portion Here'
                  keyboardType='numeric'
                  inputContainerStyle={styles.inputStyle}
                  labelStyle={styles.inputLabelStyle}
                  />
    
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
    
                  
                <View style={{width:"45%"}}>
                <Text style={styles.inputLabelStyle}>Measurement Unit</Text>
                <View style={{    
                  borderWidth:1,
                  borderRadius:5,
                  borderColor:"#BEBEBE",
                  width:"100%",
                  marginBottom:20,}}>
                <Picker
                selectedValue={measurementUnit}
                onValueChange={(itemValue, itemIndex) =>
                  setMeasurementUnit(itemValue)
                }>
                <Picker.Item label="Grams (g)" value="grams" />
                <Picker.Item label="Cups" value="cups" />
              </Picker>
                </View>
                </View>
    
                <View style={{width:"50%"}}>
                    <Text style={styles.inputLabelStyle}>Time Consumed</Text>
                    <View style={{    
                      borderWidth:1,
                      borderRadius:5,
                      borderColor:"#BEBEBE",
                      width:"100%",
                      marginBottom:20,}}>
                    <Picker
                    selectedValue={timeConsumed}
                    onValueChange={(itemValue, itemIndex) =>
                      setTimeConsumed(itemValue)
                    }>
                    <Picker.Item label="Breakfast" value="BreakFast" />
                    <Picker.Item label="Lunch" value="Lunch" />
                    <Picker.Item label="Dinner" value="Dinner" />
        
                  </Picker>
                    </View>
                </View> 
           
                </View>
                
                
                <View style={styles.calculationCircle}>
                    <Text style={styles.calculationCircleText}>Calories Consumed</Text>
                    <Text style={styles.calculationCircleText}>210 Kcal</Text>
                </View>
          
                    
                    <Pressable style={styles.button} onPress={addFood}>
                      <Text style={styles.buttonText}>Add Meal</Text>
                    </Pressable>
          
          
          </ScrollView>
    
          
            

        </View>
      )
    

    }

}


const styles = StyleSheet.create({
  backButton:{
    position:"absolute",zIndex:10,padding:10,backgroundColor:"white",opacity:0.8,borderRadius:50,margin:10
  },

  textFont:{
    fontFamily:"Poppins-Bold",
  },

  inputLabelStyle:{
    fontFamily:"Poppins-Regular",
    fontSize:14,
    color:"#727272"
  },

  inputStyle:{
    borderWidth:1,
    borderRadius:5,
    paddingHorizontal:10,
    paddingVertical:15,
    borderColor:"#BEBEBE",
    width:"100%",
    marginBottom:30,
  },
  
  calculationCircle:{
    width:200,
    height:200,
    borderRadius:100,
    borderWidth:1,
    borderColor:"#C68F5E",
    marginVertical:40,
    alignSelf:"center",
    justifyContent:"center",
    gap:10,
    alignItems:"center",
    padding:5,
  },

  calculationCircleText:{
    fontFamily:"Poppins-Bold",
    color:"#C68F5E",
    fontSize:20,
    textAlign:"center"
  },

  button:{
  paddingVertical:18,
  backgroundColor:"#C68F5E", 
  borderRadius:10,
  marginBottom:30
  },

  buttonText:{
  textAlign:"center",
  fontFamily:"Poppins-Bold",
  fontSize:15,
  color:"white"
  }
  
  
})