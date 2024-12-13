import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Stars from "~/components/Stars";
import ReviewTabs from "~/components/ReviewTabs";
import FunctionTiedButton from "~/components/FunctionTiedButton";
import { router, useLocalSearchParams } from "expo-router";
import CustomModal from "~/components/CustomModal";
import { Entypo } from "@expo/vector-icons";

// Define the Review type
type Review = {
  name: string;
  score: number;
};

// Sample reviews data
const reviews: Review[] = [
  { name: "Friendly User Experience", score: 4 },
  { name: "Good looking UI design", score: 5 },
  { name: "App helps me cut down calories", score: 3 },
  { name: "My insulin levels are back to normal", score: 4.5 },
];


  const goBack = ()=>{
    router.replace('/(app)/(appReview)/viewAppReviews')

}








 
 export default function editReview() {
  const [userReviews, setUserReviews] = useState<Review[]>([]);
  const [showModal,setShowModal] = useState(false);


   const { reviewID } = useLocalSearchParams();

  const handleSave = ()=>{
      setShowModal(false);
      router.replace('/(app)/(appReview)/viewAppReviews')
  }

  const handleClose = ()=>{
      setShowModal(false);
  }


  const toggleReview = (review: Review): void => {
    setUserReviews((prev) => {
      const exists = prev.find((r) => r.name === review.name);
      if (exists) {
        return prev.filter((r) => r.name !== review.name);
      }
      // Limit selection to 4
      if (prev.length >= 4) return prev;
      return [...prev, review];
    });
  };

  const calculateAverage = (): number => {
    if (userReviews.length === 0) return 0;
    const total = userReviews.reduce((sum, review) => sum + review.score, 0);
    return total / userReviews.length;
  };

  const averageScore = calculateAverage();

   return (
    <ScrollView style={{padding:10}}>

      <View style={{flexDirection:"row",alignItems:"center",gap:20,justifyContent:"center",marginVertical:20}}>
      <Image source={require("assets/icon.png")} style={{width:70,height:70}}/>

      <View>
      <Text style={{fontFamily:"Poppins-Bold",fontSize:20,color:"#00ACAC"}}>Abundance</Text>
      <Text style={{fontFamily:"Poppins-Regular",fontSize:12,color:"#00ACAC",textAlign:"center"}}>Eat Well Live Well</Text>
      </View>

      </View>


      <Text style={styles.ratingHeader}>Edit Review {reviewID}</Text>
      <View style={styles.ratingContainer}>
      <View style={styles.starRow}>
          <Text style={styles.heading}>Review Score</Text>
          <View>
            <Stars rating={averageScore} />
          </View>
      </View>
          <Text style={styles.subMessage}>* Please do not tap here as this is just to display average score awarded based on the tabs you have selected below.</Text>
      </View>


      <Text style={styles.ratingHeader}>Review Tabs</Text>
      <View style={styles.ratingContainer}>
      <Text style={styles.subHeading}>
        Tap on the tabs below to change your review of our application. Your feedback is much appreciated!
      </Text>


      <ReviewTabs
        reviews={reviews}
        selectedReviews={userReviews}
        toggleReview={toggleReview}
        maxSelectable={4}
      />
  
  
      </View>

      <View style={{flexDirection:'row',justifyContent:"space-between",padding:10,marginVertical:25}}>
                
                <FunctionTiedButton onPress={goBack} 
                  title="Go Back" 
                  buttonStyle={[styles.buttonContainer,{backgroundColor:"#969696",width:"35%"}]}
                  textStyle={styles.textStyle}/>
                
                <FunctionTiedButton onPress={()=>setShowModal(true)} 
                  title="Save Information" 
                  buttonStyle={[styles.buttonContainer,{width:"60%",backgroundColor:"#8797DA"}]}
                  textStyle={styles.textStyle}/>
                </View>


                {showModal && 
                <CustomModal 
                showModal={showModal} 
                handleSave={handleSave} 
                handleClose={handleClose}
                themeColor="#8797DA"
                successMessage="Edit saved"
                message='Save Edit?'
                icon={<Entypo name="save" size={50} color="#8797DA" />}/>}




  
    </ScrollView>
   )
 }
 


 const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20 ,
    alignItems:"center"
  },

  heading: {
    fontSize: 17,
    marginVertical: 10,
    fontFamily: "Poppins-Regular",
  },

  ratingHeader:{
    backgroundColor:"#D9D9D9",width:"90%",alignSelf:"center",padding:10,fontFamily:"Poppins-Bold",marginTop:15
  },

  subHeading: { 
    fontSize: 14, 
    marginBottom: 20,
    fontFamily:"Poppins-Bold",
    color:"#8797DA" 
  },
  starsContainer: { 
    flexDirection: "row", 
    marginBottom: 20 
  },

  ratingContainer:{
    borderWidth:1,width:"90%",alignSelf:"center",borderColor:"#D9D9D9",padding:10
  },

  starRow:{
    flexDirection:"row",justifyContent:"space-between",alignItems:"center"
  },

  subMessage:{
    fontFamily:"Poppins-Medium",
    fontSize:12,
    marginTop:5
  },

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

});