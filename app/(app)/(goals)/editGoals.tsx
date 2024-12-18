import React, { useState } from 'react'

import FireIcon from "~/testComponents/firesvg";
import CubeSvg from "~/testComponents/cubeSvg";
import { SvgProps } from 'react-native-svg';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import PressableTab from '~/components/PressableTab';
import { toggleItemInList } from '~/util';
import { Link, router } from 'expo-router';
import CustomModal from '~/components/CustomModal';
import { FontAwesome } from '@expo/vector-icons';

type Goal = {
  id: number;
  name: string;
  value: number;
  SvgIcon?: React.FC<SvgProps>;
};


export default function editGoals() {
  
    const allGoals:Goal[] = [
        {id:1,name:"< 1800 kcal / day",value:1800,SvgIcon:FireIcon},
        {id:2,name:"< 2000 kcal / day",value:2000,SvgIcon:FireIcon},
        {id:3,name:"< 2300 kcal / day",value:2200,SvgIcon:FireIcon},
        {id:4,name:"< 5.0 mmo/L before Food",value:5.0,SvgIcon:CubeSvg},
        {id:5,name:"< 6.0 mmo/L before Food",value:6.0,SvgIcon:CubeSvg},
        {id:6,name:"< 7.0 mmo/L after Food",value:7.0,SvgIcon:CubeSvg},
      ]

      const [profileGoals,setProfileGoals] = useState<Goal[]>([allGoals[2],allGoals[4]]);
      const [loading,setLoading] = useState(false)
    
      const handleGoals = (goal: { id: number; name: string; value: number }) => {
        const exists = profileGoals.some((item) => item.id === goal.id);
  
        if (exists) {
          // Remove the goal if it exists
          setProfileGoals((prev) => prev.filter((item) => item.id !== goal.id));
        } else {
          // Add the goal if it doesn't exist
          setProfileGoals((prev) => [...prev, goal]);
        }
      
      };
    
     const [showModal,setShowModal] = useState(false);
  
  
      const handleSave = ()=>{
          setShowModal(false);
          router.replace('/(app)/(goals)/viewGoals')
      }
  
      const handleClose = ()=>{
          setShowModal(false);
      }
  
  
    return (
        <View style={{flex:1}}>
          <View style={{backgroundColor:"#8797DA",height:60,justifyContent:"center"}}>
            <Text style={{color:"white",fontSize:20,fontFamily:"Poppins-Bold",marginLeft:"6%"}}>Edit Goals</Text>
          </View>
          
          <Text style={{fontFamily:"Poppins-Medium",fontSize:25, marginLeft:"6%",marginVertical:15}}>Selected Goals</Text>
          <Text style={{fontFamily:"Poppins-Regular",fontSize:20, marginLeft:"8%"}}>Tap on the tabs to select new goals, or unselect current ones</Text>


              <View style={{height:300}}>
                <FlashList
                    data={allGoals}
                    renderItem={({ item }) => (
                    <PressableTab
                        editable={true}
                        tabBoxStyle={styles.tabBox}
                        handleInfo={handleGoals}
                        tabTextStyle={styles.tabTextStyle}
                        tabValue={item} // This now matches the expected type
                        SvgIcon={item.SvgIcon}
                        isPressed={profileGoals.some((goal) => goal.id === item.id)} // Check if the goal is selected
                    />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    estimatedItemSize={100}
                    numColumns={1}
                    contentContainerStyle={styles.listContainer}
                />         
             </View>
             <View style={{flexDirection:"row",marginTop:50,marginLeft:20,gap:20}}>
                      <Link href="/viewGoals">
                        <View style={[styles.buttonContainer,{backgroundColor:"#D9D9D9"}]}>
                        <Text style={{fontFamily:"Poppins-Bold"}}>Go Back</Text>
                        </View>              
                      </Link>

                      <Pressable style={[styles.buttonContainer,{backgroundColor:"#8797DA",paddingHorizontal:70}]} onPress={()=>setShowModal(true)}>
                      <Text style={{fontFamily:"Poppins-Bold",color:"white"}}>Save</Text>
                      </Pressable>
            
            </View>

            {showModal && 
        <CustomModal 
        showModal={showModal} 
        handleSave={handleSave} 
        handleClose={handleClose}
        themeColor="#8797DA"
        successMessage="Edit successful"
        message='Edit Goals?'
        icon={<FontAwesome name="pencil" size={50} color="#8797DA" />}/>}




        </View>
  )
}


const styles = StyleSheet.create({
    tabBox:{
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        flexDirection:"row",
        padding:25,
        alignContent:"center",
        marginHorizontal: 4,
        marginVertical:5,
        flexGrow:1,
        gap:20
        
    },
    
    
    
    tabTextStyle:{
        fontFamily:"Poppins-SemiBold",
        fontSize:18, 
        color:"white",
    
        height:"100%"
    },
    
    listContainer: {
      padding:20,
      
    },

    buttonContainer:{
      paddingVertical:15,
      paddingHorizontal:25,
      borderRadius:5
    }
})