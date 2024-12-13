import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { Pressable, ScrollView } from "react-native-gesture-handler";
import TopDateSelector from "~/components/TopDateSelector";
import GoalsTracking from "~/UI/Dashboard/GoalsTracking";


export default function viewGoals() {
  return (
    <View style={{flex:1}}>
    <TopDateSelector themeColor="#8797DA"/>

    <ScrollView style={{padding:15}}>
      <GoalsTracking color="#8797DA"/>

     

    <Link href="/editGoals" 
    style={{borderWidth:2,borderColor:"#8797DA",padding:20,marginBottom:30,borderRadius:5}}>
    <View style={{gap:5}}>
    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
    <Text style={{fontFamily:"Poppins-Bold",fontSize:20,color:"#8797DA"}}>Edit Goals</Text>
    <FontAwesome name="book" size={24} color="#8797DA" style={{marginBottom:10}}/>
    </View>
    <Text style={{fontFamily:"Poppins-Medium", fontSize:15,color:"#8797DA"}}>Feeling discoraged? Don’t be ashamed to scale down and change your goals</Text>


    </View>
    </Link>





    </ScrollView>

    </View>
  )
}
