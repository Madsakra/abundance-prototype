import { Link, router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import PressableTab from "~/components/PressableTab";
import { FlashList } from "@shopify/flash-list";
import { useEffect, useState } from "react";
import FunctionTiedButton from "~/components/FunctionTiedButton";
import { toggleItemInList } from "~/util";

export default function healthInformation() {

 const allDiets = ["Omnivore","Low Sugar","Low Fat",
    "Vegetarian","Ketosis","Pescatarian","Gluten-Free",
    "Dairy-Free","Nut-Free","Soy-Free","Halal","Kosher","Paleo"];



 const healthConditions = ["Type 2 Diabets","High Blood Pressure",
    "Type 1 Diabetes","High Cholesterol","Low Glucose Levels","Low Blood Pressure"];

 const [profileDiet,setProfileDiet] = useState<string[]>([]);

 const [profileHealthCondi,setProfileHealthCondi] = useState<string[]>([]);

 const handleDiet = (diet: string) => {
  toggleItemInList(diet,setProfileDiet)
};


const handleHealthCondi = (healthCondition: string) => {
  toggleItemInList(healthCondition,setProfileHealthCondi)
};





  const nextSection = ()=>{
    // SEND DATA TO SQL LITE FIRST

    // NAVIGATE TO GOAL SETTING PAGE
    router.replace("/(profileCreation)/goalSetting")
  }


  return (
    <View style={{flex:1}}>
        
        <Link href="/(profileCreation)/bmrInformation" style={{padding:25}}>
            <Entypo name="chevron-thin-left" size={24} color="black" />
        </Link>

        <Text style={styles.header}>Health Profile</Text>

        {/*Dietary restriction section*/}
        <View style={{height:"30%"}}>
        <Text style={styles.listHeader}>Dietary Restrictions</Text>
        <FlashList
        data={allDiets}        
        renderItem={({ item }) =>         
        <PressableTab
        editable={true} 
        isPressed={profileDiet.includes(item)} // Highlight if selected
        tabBoxStyle={styles.tabBox}
        handleInfo={handleDiet}
        tabTextStyle={styles.tabTextStyle}
        tabValue={item}/>}
        keyExtractor={(item) => item}
        estimatedItemSize={100}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        />
        </View>
        

        {/* Health Conditions */}
        <View style={{height:"20%",marginTop:50}}>
        <Text style={styles.listHeader}>Health Conditions</Text>
        <FlashList
        data={healthConditions}        
        renderItem={({ item }) =>         
        <PressableTab
        editable={true} 
        isPressed={profileHealthCondi.includes(item)} // Highlight if selected
        tabBoxStyle={styles.tabBox}
        handleInfo={handleHealthCondi}
        tabTextStyle={styles.tabTextStyle}
        tabValue={item}/>}
        keyExtractor={(item) => item}
        estimatedItemSize={100}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        />
        </View>


        <FunctionTiedButton
            buttonStyle={styles.buttonBox}
            onPress={nextSection}
            textStyle={styles.buttonText}
            title="Next"
        />

    </View>
  )
}


const styles = StyleSheet.create({
    header:{
        fontFamily:"Poppins-Bold",
        fontSize:40, 
        textAlign:"center",
        paddingVertical:10,

    },


    listContainer: {
        padding:20,
        
      },

    tabBox:{
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginHorizontal: 4,
        marginVertical:5,
         flexGrow:1
    },

  

    tabTextStyle:{
        fontFamily:"Poppins-SemiBold",
        fontSize:14, 
        color:"white",
     
    },

    listHeader:{
        paddingLeft:25,
        fontFamily:'Poppins-SemiBold',
        fontSize:20
    },

    listWarning:{
    color:"red",
    fontFamily:"Poppins-SemiBold",
    paddingLeft:30,
    fontSize:15
    },

    buttonBox:{
        backgroundColor:"#8797DA",
        borderRadius:5,
        marginTop:"20%",
        width:"90%",
        alignSelf:"center"
    },
     
    buttonText:{
        fontFamily:"Poppins-Bold",
        fontSize:20,color:"white",
        padding:10,
        textAlign:"center"
    }
    
    
})