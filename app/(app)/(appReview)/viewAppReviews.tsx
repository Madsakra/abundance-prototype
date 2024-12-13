import { Link } from "expo-router";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";


const initialReviews = [
  {
    id: 12515,
    score: 4,
    reviewText: ["Friendly User Experience"],
  },
  {
    id: 28245,
    score: 3.5,
    reviewText: ["Good looking UI design", "App helps me cut down calories"],  },
  {
    id: 35262,
    score: 4.5,
    reviewText: [
      "App helps me cut down calories",
      "My insulin levels are back to normal",
      "Friendly User Experience",
      "Good looking UI design",
    ],
  },
];



export default function viewAppReviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const renderStars = (score: number) => {
    const fullStars = Math.floor(score);
    const halfStar = score % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <View style={{ flexDirection: "row",width:30 }}>
        {Array.from({ length: fullStars }, (_, i) => (
          <FontAwesome key={`full-${i}`} name="star" size={24} color="#8797DA" />
        ))}
        {halfStar && (
          <FontAwesome name="star-half" size={24} color="#8797DA" />
        )}
        {Array.from({ length: emptyStars }, (_, i) => (
          <FontAwesome key={`empty-${i}`} name="star-o" size={24} color="#8797DA" />
        ))}
      </View>
    );
  };

const removeReview = (id: number) => {
    Alert.alert(
      "Remove Review",
      "Are you sure you want to remove this review?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Yes",
          onPress: () => setReviews(reviews.filter((review) => review.id !== id)),
        },
      ]
    );
  };



  return (
    <ScrollView>
        
        <View style={{height:70,backgroundColor:"#8797DA",padding:20}}>
            <Text style={{fontFamily:"Poppins-Bold",fontSize:18,color:"white"}}>All Reviews</Text>
        </View>

    <Link href="/addReview" style={{marginTop:20,alignSelf:"flex-end",padding:10}}>
    <View style={{padding:14,backgroundColor:"#8797DA",borderRadius:5}}>
    <Text style={{color:"white",fontFamily:"Poppins-Bold"}}> Add Reviews</Text>
    </View>    
    </Link>


     {/* Reviews */}
     {reviews.map((review) => (
        <View
          key={review.id}
          style={{
            borderColor: "#8797DA",
            borderWidth: 1,
            height: "auto",
            width: "90%",
            alignSelf: "center",
            marginVertical: 20,
            borderRadius: 15,
            padding: 20,
          }}
        >
          <View style={{flexDirection:"row",justifyContent:"space-between",width:"95%"}}>
              <Text style={{ fontFamily: "Poppins-Bold", fontSize: 18 }}>
                Rating {review.id} 
              </Text>
            
              {/* Remove Button */}
              <TouchableOpacity onPress={() => removeReview(review.id)}>
              <FontAwesome name="trash" size={24} color="#8797DA" />
            </TouchableOpacity>
          </View>
  
          {/* Stars */}
          {renderStars(review.score)}
          {/* Review Text */}
          <View style={{ marginTop: 10 }}>
            {review.reviewText.map((text, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: "#8797DA",
                  padding: 10,
                  borderRadius: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  
                }}
              >
                <FontAwesome
                  name="circle"
                  size={16}
                  color="white"
                  style={{ marginRight: 10 }}
                />
                <Text style={{ color: "white", fontFamily: "Poppins-Regular",flexShrink:1 }}>
                  {text}
                </Text>
              </View>
            ))}
          </View>
          {/* Edit Review Button */}
          <Link
            // will send the id of the user to the parameters, then call api on the edit review page to get the info
            href={{
                pathname: "/(app)/(appReview)/[reviewID]",
                params: { reviewID: review.id },
              }}
            style={{
              alignSelf: "flex-end",
              marginTop: 20,
              padding: 10,
              borderColor: "#8797DA",
              borderWidth: 1,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "#8797DA", fontFamily: "Poppins-Bold" }}>Edit Review</Text>
          </Link>
        </View>
      ))}




    </ScrollView>
  )
}
