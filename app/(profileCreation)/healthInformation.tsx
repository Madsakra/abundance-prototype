import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import PressableTab from "~/components/PressableTab";
import { FlashList } from "@shopify/flash-list";
import { MasonryFlashList } from "@shopify/flash-list";


export default function healthInformation() {

 const healthValues = ["Omnivore","Low Sugar","Low Fat",
    "Vegetarian","Ketosis","Pescatarian","Gluten-Free",
    "Dairy-Free"]



  return (
    <View style={{flex:1}}>
        
        <Link href="/(profileCreation)/bmrInformation" style={{padding:25}}>
            <Entypo name="chevron-thin-left" size={24} color="black" />
        </Link>

        <Text style={styles.header}>Health Profile</Text>

        
        <Text style={{paddingLeft:25,fontFamily:'Poppins-SemiBold',fontSize:20,marginBottom:2}}>Dietary Restrictions</Text>
        {<View style={
            {height:"20%",padding:20,borderWidth:0.5,paddingVertical:5,marginBottom:35, 
            width:"90%",alignSelf:"center",borderRadius:10}}>

        <FlashList
        data={healthValues}        
        renderItem={({ item }) =>         
        <PressableTab 
        tabBoxStyle={styles.tabBox}
        tabTextStyle={styles.tabTextStyle}
        innerCircleStyle={styles.innerCircleStyle}
        tabValue={item}/>}
        keyExtractor={(item) => item}
        estimatedItemSize={100}
        />

        </View>}

   
        <Text style={{paddingLeft:25,fontFamily:'Poppins-SemiBold',fontSize:20,marginBottom:2}}>Dietary Restrictions</Text>
        {<View style={
            {height:"25%",padding:20,borderWidth:0.5,paddingVertical:5,marginBottom:10, 
            width:"90%",alignSelf:"center",borderRadius:10}}>

        <FlashList
        data={healthValues}        
        renderItem={({ item }) =>         
        <PressableTab 
        tabBoxStyle={styles.tabBox}
        tabTextStyle={styles.tabTextStyle}
        innerCircleStyle={styles.innerCircleStyle}
        tabValue={item}/>}
        keyExtractor={(item) => item}
        estimatedItemSize={100}
        />

        </View>}



    </View>
  )
}


const styles = StyleSheet.create({
    header:{
        fontFamily:"Poppins-Bold",
        fontSize:35, 
        textAlign:"center",
        paddingVertical:10,
        paddingTop:15
    },


    listContainer: {
        flexGrow: 1,
        flexDirection: 'row', 
        flexWrap: 'wrap', 
      },

    tabBox:{
        width:"100%",
        marginVertical:10,
        flexDirection:"row",
        borderRadius:5,
        alignItems:"center",
        padding:10,
        gap:20,
    },

    innerCircleStyle:{
        width:30,
        height:30,
        borderRadius:50,
        backgroundColor:"white"
    },

    tabTextStyle:{
        fontFamily:"Poppins-SemiBold",
        fontSize:15, 
        color:"white",
        flexShrink:1
    },


    
    
})