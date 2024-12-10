import { Image, StyleSheet, Text, View } from "react-native";

import { useEffect, useState } from "react";
import * as DB from '../../articleData'
import { FlashList } from "@shopify/flash-list";
import ArticleCard from "~/components/ArticleCard";



type ArticleDataType = {
    id:number;
    name:string;
    category:string;
    author:string;
    content:string;
}

// ONLY FOR PROTOTYPE TESTING
const images = [
    require("assets/testImages/calorieCut.jpg"),
    require("assets/testImages/exercise.jpg"),
    require("assets/testImages/sugar.jpg"),
    require("assets/testImages/burnFats.jpg")
]







export default function Articles() {

const [articles,setArticles] = useState<ArticleDataType[]>([]);
const [loading,setLoading] = useState(true);

const queryDB = async ()=>{
    const queryArticles = await DB.db.getAllAsync('SELECT * FROM Articles');
    let tempContainer:ArticleDataType[] = [];
    for (const article of queryArticles)
    {
        
         const typedArticle = article as ArticleDataType;
         tempContainer.push(typedArticle);
    }

    setArticles(tempContainer);
    setLoading(false);
}



useEffect(()=>{
    queryDB();
},[])

  return (
    <View style={styles.container}>
        
        <FlashList
        data={articles}
        renderItem={({item,index})=>
        <ArticleCard articleID={item.id} articleTitle={item.name} articleCategory={item.category} author={item.author} image={images[index]}/>
        }
        estimatedItemSize={200}
        
        />
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        marginLeft:5,
        marginBottom:"8%"
    },



})