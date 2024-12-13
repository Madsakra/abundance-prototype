
import { Entypo } from '@expo/vector-icons';
import { FlashList } from '@shopify/flash-list';
import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text } from 'react-native'
import { ScrollView, View } from 'react-native'
import CustomModal from '~/components/CustomModal';
import FunctionTiedButton from '~/components/FunctionTiedButton';
import PressableTab from '~/components/PressableTab';
import { toggleItemInList } from '~/util';

export default function editHealthProfile() {


const allDiets = ["Omnivore","Low Sugar","Low Fat",
    "Vegetarian","Ketosis","Pescatarian","Gluten-Free",
    "Dairy-Free","Nut-Free","Soy-Free","Halal","Kosher","Paleo"];



 const healthConditions = ["Type 2 Diabets","High Blood Pressure",
    "Type 1 Diabetes","High Cholesterol","Low Glucose Levels","Low Blood Pressure"];

 const [profileDiet,setProfileDiet] = useState<string[]>([allDiets[0],allDiets[1]]);

 const [profileHealthCondi,setProfileHealthCondi] = useState<string[]>([healthConditions[0],healthConditions[1]]);

 const handleDiet = (diet: string) => {
  toggleItemInList(diet,setProfileDiet)
};


const handleHealthCondi = (healthCondition: string) => {
  toggleItemInList(healthCondition,setProfileHealthCondi)
};



  const goBack = ()=>{
    router.replace('/(app)/(settings)/profile')

}


        const [showModal,setShowModal] = useState(false);


        const handleSave = ()=>{
            setShowModal(false);
            router.replace('/(app)/(settings)/profile')
        }

        const handleClose = ()=>{
            setShowModal(false);
        }







  return (
    <ScrollView>

        <View style={{height:70,backgroundColor:"#8797DA",padding:20}}>
            <Text style={{fontFamily:"Poppins-Bold",fontSize:18,color:"white"}}>Edit Health Profile</Text>
        </View>

        <Text style={{fontFamily:"Poppins-Regular",fontSize:15,padding:20}}>
        Grey options indicate unselected restrictions, while purple options show your active selections. Tap a purple option to unselect it.
        </Text>

           {/* Dietary Restrictions Section */}
           <View style={{ height: 'auto',marginTop:30 }}>
                <Text style={styles.listHeader}>Dietary Restrictions</Text>
                <FlashList
                    data={allDiets}
                    renderItem={({ item }) => (
                        <PressableTab
                            editable={true} // Allow interaction
                            tabBoxStyle={styles.tabBox}
                            tabTextStyle={styles.tabTextStyle}
                            tabValue={item}
                            isPressed={profileDiet.includes(item)} // Highlight if selected
                            handleInfo={handleDiet}
                        />
                    )}
                    keyExtractor={(item) => item}
                    estimatedItemSize={100}
                    numColumns={2}
                    contentContainerStyle={styles.listContainer}
                />
            </View>

            {/* Health Conditions Section */}
            <View style={{ height: 'auto', marginTop: 50 }}>
                <Text style={styles.listHeader}>Health Conditions</Text>
                <FlashList
                    data={healthConditions}
                    renderItem={({ item }) => (
                        <PressableTab
                            editable={true} // Allow interaction
                            tabBoxStyle={styles.tabBox}
                            tabTextStyle={styles.tabTextStyle}
                            tabValue={item}
                            isPressed={profileHealthCondi.includes(item)} // Highlight if selected
                            handleInfo={handleHealthCondi}
                        />
                    )}
                    keyExtractor={(item) => item}
                    estimatedItemSize={100}
                    numColumns={2}
                    contentContainerStyle={styles.listContainer}
                />
            </View>
                <View style={{flexDirection:'row',justifyContent:"space-between",padding:10,marginVertical:25}}>
                
                <FunctionTiedButton onPress={goBack} 
                  title="Go Back" 
                  buttonStyle={[styles.buttonContainer,{backgroundColor:"#969696",width:"35%"}]}
                  textStyle={styles.textStyle}/>
                
                <FunctionTiedButton onPress={()=>setShowModal(true)} 
                  title="Save Information" 
                  buttonStyle={[styles.buttonContainer,{width:"60%",backgroundColor:"#8797DA"}]}
                  textStyle={styles.textStyle}/>
                </View>

            {showModal && 
                <CustomModal 
                showModal={showModal} 
                handleSave={handleSave} 
                handleClose={handleClose}
                themeColor="#8797DA"
                successMessage="Edit Saved"
                message='Save Edit?'
                icon={<Entypo name="save" size={50} color="#8797DA" />}/>}







    </ScrollView>
  )
}

const styles = StyleSheet.create({
  headerRow:{
    marginTop:30,
    padding:10,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },

  listContainer: {
        padding:20,
        
      },

    tabBox:{
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginHorizontal: 4,
        marginVertical:5,
         flexGrow:1
    },

  

    tabTextStyle:{
        fontFamily:"Poppins-SemiBold",
        fontSize:14, 
        color:"white",
     
    },

    listHeader:{
      paddingLeft:25,
      fontFamily:'Poppins-SemiBold',
      fontSize:20
  },
  buttonContainer:{
    marginTop:5,
    padding:15,
    borderRadius:10,
  
  },

  textStyle:{
    textAlign:"center",
    fontFamily:"Poppins-Bold",
    color:"white",
    fontSize:15,
  }


})