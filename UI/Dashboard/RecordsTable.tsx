import {Pressable, StyleSheet, Text, View } from "react-native";
import RecordCard from "~/components/RecordCard";
import { RecordTableProps } from "~/app-env";
import { FlashList } from "@shopify/flash-list";
import { AntDesign } from "@expo/vector-icons";



export default function RecordsTable({image,tableHeader,tableData}:RecordTableProps) {

  const customMinusButton = ()=>{
    return (
      <Pressable 
      style={{  
        padding:5,
        backgroundColor:"#D9D9D9",
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center"}}>
        <AntDesign name="minus" size={24} color="black" />
      </Pressable>
    )
  }


  return (
    <View style={styles.recordContainer}>
      <View style={styles.headerContainer}>
      <Text style={styles.header}>{tableHeader}</Text>
      </View>



    {/* SINGLE ITEM COMPONENT -- TO USE FLASH LIST AND RENDER ALL*/}
    <FlashList
    data={tableData}
    estimatedItemSize={250}
    nestedScrollEnabled={true}
    renderItem={({item,index})=>
    <RecordCard
    id={item.id}
    key={item.id}
    image={image}
    itemDescription={item.itemDescription}
    itemSubheading={item.itemSubheading}
    customButton={customMinusButton()}
    />
    }
    
    />
  
  

  </View>
  )
}


const styles = StyleSheet.create({
    recordContainer:{
        width:"100%",
        padding:0,
        borderWidth:1,
        height:350,
        borderRadius:10,
        gap:5,
        borderColor:"#CFCFCF",
        marginBottom:25,
     
    },

    headerContainer:{
      padding:10

    },

    header:{
        fontFamily:"Poppins-Bold",
        fontSize:15,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderColor:"#CFCFCF",
        
    }
})