import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, Image, ImageSourcePropType,ScrollView, Dimensions } from 'react-native';
import { db } from '~/sqlDatabase';
import { useEffect, useState } from 'react';

type Article= {
    id:number;
    name:string;
    category:string;
    author:string;
    content:string;
}

 const { width, height } = Dimensions.get('window');

  // Calculate 90% of width and height
  const width90 = width * 0.9;
  const height90 = height * 1;


export default function ArticleDetailsScreen() {
  const { id } = useLocalSearchParams();

  const [article,setArticle] = useState<Article | null>(null);
  const [loading,setLoading] = useState(true);
  
  const [image, setImage] = useState<ImageSourcePropType | undefined>(undefined); // State for the image

  const imageHandler = (id: string | string[]) => {
    switch (id) {
      case "1":
        setImage(require("assets/testImages/calorieCut.jpg"));
        break;
      case "2":
        setImage(require("assets/testImages/exercise.jpg"));
        break;
      case "3":
        setImage(require("assets/testImages/sugar.jpg"));
        break;
      case "4":
        setImage(require("assets/testImages/burnFats.jpg"));
        break;
      default:
        setImage(undefined);
    }
  };



  const queryDB = async ()=>{
    if (typeof id === 'string') {
        
        const parsedId = Number(id);
     
        if (!isNaN(parsedId)) {
            
            const selectedArticle= await db.getAllAsync<Article>(
                `SELECT *
                FROM articles
                WHERE id = ?; 
                `
              ,[parsedId]);
              
              setArticle(selectedArticle[0]);
              console.log(article);
              setLoading(false);


        } else {
          console.error('Invalid ID: Not a number');
        }
    } 
      
}

useEffect(()=>{
  imageHandler(id);
  queryDB();
    
},[id])


  return (
    <View style={styles.container}>
    {loading?
        <Text>Loading...</Text>:
       

          <ScrollView>
          <Image source={image} style={styles.image} />
            <Text style={{fontFamily:"Poppins-Medium",fontSize:24}}>{article?.name}</Text>

            <View>
            <Text style={styles.headerText}>Category: {article?.category}</Text>
            <Text style={styles.headerText}>By {article?.author}</Text>
            </View>
    
            <Text style={styles.content}>{article?.content}</Text>



          </ScrollView>

       
    }



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    padding:10,
   
  },

  image:{
    width:"100%",
    borderRadius:5,
    height:250,
    marginBottom:20,
  },

  headerText:{
  fontFamily:"Poppins-Medium",
  color:"#929292"
  },


  content:{
    marginTop:15,
    fontSize:15,
    fontFamily:"Poppins-Regular",
    
  }
});

