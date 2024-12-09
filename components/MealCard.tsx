import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";

type MealCardProps = {

    food:{
        imageLink:ImageSourcePropType;
        foodName:string;
        nutritionValue:string;
    }

}

export default function MealCard({food}:MealCardProps) {


  return (
    <View style={styles.container}>
      <Image source={food.imageLink} style={styles.image} />
      
      <View style={styles.textContainer}>
        <Text style={{fontFamily:"Poppins-Bold", fontSize:15}}>{food.foodName}</Text>
        <Text style={{fontFamily:"Poppins-Regular"}}>{food.nutritionValue}</Text>
      </View>

    </View>



  )
}


const styles = StyleSheet.create({
    container:{
    width:250,
    height:95,
    
  
    borderRadius:10,
    flexDirection:"row",
    gap:20,
    justifyContent:"center",
    alignItems:"center",
    marginRight:10,
    borderWidth:1,
    borderColor:"#D9D9D9",
    },


    image:{
        borderRadius:5,
        width:70,
        height:70
    },


    textContainer:{
        maxWidth:"50%",
        height:"auto"
    }
    
})

