import React from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function caloriesLogging() {
  return (
    
    <ScrollView style={{padding:20}}>
        {/*Main Container*/}
        <Text style={{fontFamily:"Poppins-Bold",fontSize:20}}>Calories Logging</Text>


        {/* UI BEGINS HERE*/}
        {/* TOP BUTTON*/}
        <View style={{width:"100%",height:"auto",marginVertical:"8%"}}>
          <Pressable style={{backgroundColor:"#C68F5E",width:"45%",height:40,marginBottom:15,alignSelf:"flex-end",justifyContent:"center",alignItems:"center",borderRadius:5}}>
            <Text style={{textAlign:"center",fontFamily:"Poppins-Bold",fontSize:15,color:"white"}}>Add Meals</Text>
          </Pressable>


          {/*SUB COMPONENT HERE*/}
          {/*INSIDE BOX*/}
          <View style={{width:"100%",padding:10,borderWidth:1,height:250,borderRadius:10,gap:5,borderColor:"#CFCFCF"}}>
            <Text style={{fontFamily:"Poppins-Bold",fontSize:15,borderWidth:1,padding:10,borderTopLeftRadius:10,borderTopRightRadius:10,borderColor:"#CFCFCF"}}>Calorie Intake</Text>



            {/* SINGLE ITEM COMPONENT -- TO USE FLASH LIST AND RENDER ALL*/}
            <View style={{width:"100%",padding:15,borderWidth:1,height:"auto",borderRadius:5,gap:10,borderColor:"#CFCFCF",flexDirection:"row",alignItems:"center"}}>
              <Image source={require("assets/testImages/nasi1.jpg")} style={{width:60,height:60,borderRadius:5}} />
              
              <View style={{justifyContent:"space-between",flexDirection:"row",flex:1,alignItems:"center"}}>
              <View style={{maxWidth:150}}>
                <Text style={{fontFamily:"Poppins-Bold"}}>Nasi Lemak</Text>
                <Text style={{fontFamily:"Poppins-Medium",color:"#484848"}}>364 kcal/ serving</Text>
              </View>

              <Pressable style={{width:24,height:24,backgroundColor:"#D9D9D9",borderRadius:5,justifyContent:"center",alignItems:"center"}}>
              <AntDesign name="minus" size={20} color="black" />
              </Pressable>
              </View>
            </View>
          
          
      
          </View>

      
        </View>

    </ScrollView>
  )
}
