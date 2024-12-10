import { Link } from "expo-router";
import { Image, ImageProps, StyleSheet, Text, View } from "react-native";

type ArticleCard = {
    articleID:number;
    articleTitle:string;
    articleCategory:string;
    author:string;
    image:ImageProps;
}




export default function ArticleCard({articleID,articleTitle,articleCategory,author,image}:ArticleCard) {
  return (
    <Link
    
    href={{
        pathname: "/(app)/(articles)/[id]",
        params: { id: articleID },
      }}

      style={{ marginVertical:15}}
    
    >
        <View style={styles.container}>

        <View style={styles.textContainer}>
            <Text style={{fontFamily:"Poppins-Bold",fontSize:15}}>{articleTitle}</Text>
            <Text style={{fontFamily:"Poppins-Regular",color:"#929292"}}>{articleCategory}</Text>
            <Text style={{fontFamily:"Poppins-Medium",color:"#929292"}}>{author}</Text>
        </View>

        <Image source={image} style={styles.image}/>
        </View>
    </Link>
  )
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"auto",
        borderRadius:5,
        flexDirection:"row",
        gap:20,
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:5,
       
    },


    textContainer:{
        maxWidth:"60%",
        height:"auto",
        gap:2
    },

    image:{
        width:70,
        height:70,
        borderRadius:5
    }

})