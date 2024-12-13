import { FontAwesome, FontAwesome5, FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import PressableTab from "~/components/PressableTab";
import ProfilePill from "~/components/ProfilePill";
import { toggleItemInList } from "~/util";

export default function profile() {



  const profile = [
    {text:"Mary Ann", svg:<FontAwesome name="user" size={20} color="#8797DA" />},
    {text:"222412412412415", svg:<FontAwesome6 name="id-card" size={20} color="#8797DA" />},
    {text:"18/09/1998", svg:<FontAwesome name="birthday-cake" size={20} color="#8797DA" />},
    {text:"F", svg:<MaterialCommunityIcons name="gender-male-female" size={20} color="#8797DA" />},
    {text:"maryAnn@gmail.com", svg:<MaterialCommunityIcons name="email" size={20} color="#8797DA" />},
    {text:"+65 8231 1234", svg:<FontAwesome name="phone" size={20} color="#8797DA" />},
    {text:78, svg:<FontAwesome5 name="dumbbell" size={20} color="#8797DA" />},
    {text:179, svg:<MaterialCommunityIcons name="human-male-height-variant" size={20} color="#8797DA" />},


  ]


const allDiets = ["Omnivore","Low Sugar","Low Fat",
    "Vegetarian","Ketosis","Pescatarian","Gluten-Free",
    "Dairy-Free","Nut-Free","Soy-Free","Halal","Kosher","Paleo"];



 const healthConditions = ["Type 2 Diabets","High Blood Pressure",
    "Type 1 Diabetes","High Cholesterol","Low Glucose Levels","Low Blood Pressure"];

 const [profileDiet,setProfileDiet] = useState<string[]>([allDiets[0],allDiets[1]]);

 const [profileHealthCondi,setProfileHealthCondi] = useState<string[]>([healthConditions[0],healthConditions[1]]);

 const handleDiet = (diet: string) => {
  toggleItemInList(diet,setProfileDiet)
};


const handleHealthCondi = (healthCondition: string) => {
  toggleItemInList(healthCondition,setProfileHealthCondi)
};






  return (
    <ScrollView>
            <Image 
            source={require("assets/profilePic.jpg")}
            style={{width:"100%",height:300}}/>
    
    <View style={styles.headerRow}>
      <Text style={{fontFamily:"Poppins-Bold",color:"#8797DA",fontSize:20}}>Personal information</Text>

      <Pressable style={{padding:12,backgroundColor:"#8797DA",borderRadius:5}}>
      <FontAwesome name="pencil" size={20} color="white" />
      </Pressable>
    </View>

    <View style={{padding:10,justifyContent:"center",height:"auto",marginTop:10,gap:10}}>

    {profile.map((item,index)=>(
      <ProfilePill text={item.text} svg={item.svg} key={index}/>
    ))}


    </View>


    <View style={styles.headerRow}>
      <Text style={{fontFamily:"Poppins-Bold",color:"#8797DA",fontSize:20}}>Health Profile</Text>

      <Pressable style={{padding:12,backgroundColor:"#8797DA",borderRadius:5}}>
      <FontAwesome name="pencil" size={20} color="white" />
      </Pressable>
    </View>

           {/* Dietary Restrictions Section */}
           <View style={{ height: 'auto' }}>
                <Text style={styles.listHeader}>Dietary Restrictions</Text>
                <FlashList
                    data={allDiets}
                    renderItem={({ item }) => (
                        <PressableTab
                            editable={false} // Allow interaction
                            tabBoxStyle={styles.tabBox}
                            tabTextStyle={styles.tabTextStyle}
                            tabValue={item}
                            isPressed={profileDiet.includes(item)} // Highlight if selected
                            handleInfo={handleDiet}
                        />
                    )}
                    keyExtractor={(item) => item}
                    estimatedItemSize={100}
                    numColumns={2}
                    contentContainerStyle={styles.listContainer}
                />
            </View>

            {/* Health Conditions Section */}
            <View style={{ height: 'auto', marginTop: 50 }}>
                <Text style={styles.listHeader}>Health Conditions</Text>
                <FlashList
                    data={healthConditions}
                    renderItem={({ item }) => (
                        <PressableTab
                            editable={false} // Allow interaction
                            tabBoxStyle={styles.tabBox}
                            tabTextStyle={styles.tabTextStyle}
                            tabValue={item}
                            isPressed={profileHealthCondi.includes(item)} // Highlight if selected
                            handleInfo={handleHealthCondi}
                        />
                    )}
                    keyExtractor={(item) => item}
                    estimatedItemSize={100}
                    numColumns={2}
                    contentContainerStyle={styles.listContainer}
                />
            </View>



    </ScrollView>
  )
}


const styles = StyleSheet.create({
  headerRow:{
    padding:10,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
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

})