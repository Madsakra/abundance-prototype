import { FlashList } from "@shopify/flash-list";
import { Image, StyleSheet, Text, View } from "react-native";
import MealCard from "~/components/MealCard";

const meals = [
    {
        imageLink:require("assets/testImages/sandwich.jpg"),
        foodName:"Sandwich",
        nutritionValue:"340 kcal/ serving"
    },

    {
        imageLink:require("assets/testImages/greeksalad.jpg"),
        foodName:"Greek Salad",
        nutritionValue:"240 kcal/ serving"
    },

    {
        imageLink:require("assets/testImages/watermelon.jpg"),
        foodName:"Watermelon",
        nutritionValue:"140 kcal/ serving"
    }
]


export default function MealReccomen() {
  
        

  
  
    return (
    <View style={{marginLeft:5,marginBottom:25,gap:5}}>

    <Text style={{fontFamily:"Poppins-Black",marginTop:5,marginLeft:5}}>Lunch</Text>

        <FlashList
        data={meals}
        renderItem={({ item }) => <MealCard food={item}/>}
        estimatedItemSize={150}
        horizontal={true} 
        contentContainerStyle={styles.listContainer}
        />
    </View>
  )
}



const styles = StyleSheet.create({
    listContainer:{
        paddingHorizontal:5
    }
})