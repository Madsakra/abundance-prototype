import { Picker } from '@react-native-picker/picker';
import { useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import CustomTextInput from '~/components/CustomTextInput';

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
  
    const [portion,setPortion] = useState<number|null>(null);
    const [measurementUnit,setMeasurementUnit] = useState<string>("");
    const [timeConsumed,setTimeConsumed] = useState<string>("");

    return (
    <View style={{flex:1,padding:5}}>
      
      <Image source={calorieOptionsImages[foodIDNumber-1]} style={{width:"100%",height:350}}/>
      <ScrollView style={{padding:15}}>
          <Text style={{fontFamily:"Poppins-Bold",fontSize:25}}>Food Name</Text>

          <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:"center",marginVertical:15}}>
            <View>
              <Text style={[styles.textFont,{color:"#A5A5A5"}]}>Total Calories</Text>
              <Text style={styles.textFont}>494 kcal</Text>
            </View>

            <View>
              <Text style={[styles.textFont,{color:"#A5A5A5"}]}>Unit Measurement</Text>
              <Text style={styles.textFont}>210g/serving</Text>
            </View>
          </View>


          {/* More nutritional values*/}
          <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:"center",marginVertical:15}}>
            <View>
              <Text style={[styles.textFont,{color:"#A5A5A5"}]}>Carbs</Text>
              <Text style={styles.textFont}>67g</Text>
            </View>

            <View>
              <Text style={[styles.textFont,{color:"#A5A5A5"}]}>Fats</Text>
              <Text style={styles.textFont}>25g</Text>
            </View>

            <View>
              <Text style={[styles.textFont,{color:"#A5A5A5"}]}>Protein</Text>
              <Text style={styles.textFont}>15g</Text>
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
              marginBottom:50,}}>
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
              marginBottom:50,}}>
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
 
  
  

      </ScrollView>

    </View>
  )
}


const styles = StyleSheet.create({
  textFont:{
    fontFamily:"Poppins-Bold",
    fontSize:16,
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
  
  
  
})