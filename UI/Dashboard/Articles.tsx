import { Image, StyleSheet, Text, View } from "react-native";

import { useEffect, useState } from "react";
import * as DB from '../../articleData'



type ArticleDataType = {
    id:number;
    name:string;
    category:string;
    author:string;
    content:string;
    linkUrl:string;
}










export default function Articles() {

const [articles,setArticles] = useState<ArticleDataType[]>([]);


const queryDB = async ()=>{
    const queryArticles = await DB.db.getAllAsync('SELECT * FROM Articles');
    let tempContainer:ArticleDataType[] = [];
    for (const article of queryArticles)
    {
        
         const typedArticle = article as ArticleDataType;
         tempContainer.push(typedArticle);
    }

    setArticles(tempContainer);
}



useEffect(()=>{
    queryDB();
    console.log(articles);
},[])

  return (
    <View style={styles.container}>
        
        <View style={{width:"100%",height:"auto",
            borderRadius:5,flexDirection:"row",gap:20,
            justifyContent:"space-between",alignItems:"center",
            paddingHorizontal:5
            }}>

            <View style={{maxWidth:"60%",height:"auto",gap:2}}>
                <Text style={{fontFamily:"Poppins-Bold",fontSize:15}}>Tips to cut calories</Text>
                <Text style={{fontFamily:"Poppins-Regular",color:"#929292"}}>Calorie Cutting</Text>
                <Text style={{fontFamily:"Poppins-Medium",color:"#929292"}}>By Dr Johnny Sins</Text>
            </View>

            <Image source={require("assets/testImages/calorieCut.jpg")} style={{width:70,height:70,borderRadius:5}}/>

        </View>



    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        marginLeft:5,
        marginBottom:"8%"
    },



})