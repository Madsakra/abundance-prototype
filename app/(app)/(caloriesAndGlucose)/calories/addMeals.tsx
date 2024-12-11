import { Pressable, StyleSheet, Text, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';
import CustomTextInput from '~/components/CustomTextInput';
import { FlashList } from '@shopify/flash-list';
import RecordCard from '~/components/RecordCard';
export default function addMeals() {

  const [foodName,setFoodName] = useState<string |null>("");

  const caloriesOptions = 
  {
    tableData:[
      {
        image:require("assets/testImages/nasi1.jpg"),
        itemDescription:"Nasi Lemak",
        itemSubheading:"364 kcal/serving",
        editable:true,
        operation:"add"
      },
      {
        image:require("assets/testImages/nasi2.jpg"),
        itemDescription:"Nasi Lemak 2",
        itemSubheading:"364 kcal/serving",
        editable:true,
        operation:'add'

      },
      {
        image:require("assets/testImages/nasi1.jpg"),
        itemDescription:"Nasi Lemak",
        itemSubheading:"364 kcal/serving",
        editable:true,
        operation:"add"

      },

      {
        image:require("assets/testImages/nasi1.jpg"),
        itemDescription:"Nasi Lemak",
        itemSubheading:"364 kcal/serving",
        editable:true,
        operation:'add'

      },
    ],

  }

  return (
    <View style={{flex:1}}>

            {/*search Top Section*/}
            <View style={{backgroundColor:"#C68F5E",height:180,padding:15}}>
              <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
              <Text style={{fontFamily:"Poppins-Bold",color:"white",fontSize:18}}>Add Meals</Text>

              <Pressable style={{backgroundColor:"white",borderRadius:5,flexDirection:'row',padding:12,gap:10}}>
              <FontAwesome name="camera" size={24} color="#C68F5E" />
                <Text style={{fontFamily:"Poppins-Bold", color:"#C68F5E",fontSize:15}}>Scan Food</Text>
              </Pressable>
              </View>
             

            <CustomTextInput inputValue={foodName} setInputValue={setFoodName}
            placeHolder='Search For Food Name'
            inputContainerStyle={styles.inputContainerStyle}
            keyboardType='default'
            />

            <View style={{height:300,marginTop:"20%"}}>
              {/* SINGLE ITEM COMPONENT -- TO USE FLASH LIST AND RENDER ALL*/}
              <FlashList
              data={caloriesOptions.tableData}
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

            </View>


    </View>
  )
}


const styles = StyleSheet.create({
  inputContainerStyle:{
    width:"100%",
    padding:20,
    borderRadius:5,
    backgroundColor:"white"
  }
})