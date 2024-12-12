import { FlashList } from "@shopify/flash-list";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Platform } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ActivityCard from "~/components/ActivityCard";

export default function addActivity() {


    const activities = [
        {
            activityHeader:"Running",
            dateTime:"12 December, 5:05-5:35am",
            timeTaken:"30mins",
            caloriesConsumed:"152 Kcal burnt",
        },
        {
            activityHeader:"Swimming",
            dateTime:"12 December, 9:00-9:35am",
            timeTaken:"35mins",
            caloriesConsumed:"210 Kcal burnt",
        },
        {
            activityHeader:"Diving",
            dateTime:"12 December, 4:05-5:00pm",
            timeTaken:"45mins",
            caloriesConsumed:"240 Kcal burnt",
        },
    ]

   const redirectNext = ()=>{
      alert("Activities Added !");
      router.replace('/(app)/(caloriesAndGlucose)/calories/caloriesOutput')
    }

    const goBack = ()=>{
    
        router.replace('/(app)/(caloriesAndGlucose)/calories/caloriesOutput')
      }


  return (
    <View style={{flex:1,padding:14}}>
        
        <ScrollView>
        <Text style={{fontFamily:"Poppins-Bold",fontSize:20}}>Calories Ouput</Text>

        {
            Platform.OS === "ios"?
            <Text style={{fontFamily:"Poppins-Regular",fontSize:16}}>From your Apple Health, we discover the following activities. Tap on the activity to select  </Text>:
            <Text style={{fontFamily:"Poppins-Regular",fontSize:16}}>From your Google Fit, we discover the following activities. Tap on the activity to select. </Text>
        }




        {activities.map((item,index)=>(
                       <ActivityCard 
                       key={index}
                       activityHeader={item.activityHeader}
                       dateTime={item.dateTime}
                       timeTaken={item.timeTaken}
                       caloriesConsumed={item.caloriesConsumed}
                       />
        ))}
        
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <Pressable style={[styles.buttonContainer,{width:"35%",backgroundColor:"#D9D9D9",}]} onPress={goBack}>
            <Text style={styles.buttonText}>Go Back</Text>
        </Pressable>

        <Pressable style={[styles.buttonContainer,{width:"55%",backgroundColor:"#C68F5E",}]} onPress={redirectNext}>
            <Text style={[styles.buttonText,{color:"white"}]}>Add Activities</Text>
        </Pressable>

        </View>



        </ScrollView>
    

    </View>
  )
}


const styles = StyleSheet.create({
    container:{
    paddingVertical:18,
    paddingHorizontal:15,
    borderRadius:20,
    marginTop:15
    },

    activityHeader:{
        fontFamily:"Poppins-Bold",
        color:"white",
        fontSize:25,
    },

    textFont:{
        fontFamily:"Poppins-Bold",
        color:"white",
        fontSize:15,

    },

    buttonContainer:{
        borderRadius:5,
        paddingVertical:14,
        marginTop:20,
        
    },

    buttonText:{
        textAlign:"center",
        fontFamily:"Poppins-SemiBold",
        fontSize:15
    }
})