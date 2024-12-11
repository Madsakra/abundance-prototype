import {StyleSheet, Text, View } from "react-native";
import RecordCard from "~/components/RecordCard";
import { RecordTableProps } from "~/app-env";
import { FlashList } from "@shopify/flash-list";



export default function RecordsTable({tableHeader,tableData}:RecordTableProps) {
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
    key={index}
    image={item.image}
    itemDescription={item.itemDescription}
    itemSubheading={item.itemSubheading}
    editable={item.editable}
    operation={item.operation}
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