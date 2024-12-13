import { useState } from "react";
import {  Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Picker } from "@react-native-picker/picker";
import ImageSelector from "~/components/ImageSelector";
import DatePicker from "~/components/DatePicker";
import CustomTextInput from "~/components/CustomTextInput";
import FunctionTiedButton from "~/components/FunctionTiedButton";
import { router } from "expo-router";
import CustomModal from "~/components/CustomModal";
import { Entypo } from "@expo/vector-icons";



export default function editProfile() {

 const defaultImg = require("assets/profilePic.jpg")

 const [image, setImage] = useState<string | null>(Image.resolveAssetSource(defaultImg).uri);
  const [name,setName] = useState<string|null>(null);
  const [gender,setGender] = useState<string>("female")
  const [birthDate,setBirthDate] = useState<Date | null>(null); 
  const [email,setEmail] = useState<string |null>("maryAnn@gmail.com");
  const [height,setHeight] = useState<number|null>(179);
  const [weight,setWeight] = useState<number|null>(78)


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
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

        {/* Image selector*/}
        <View style={image?styles.imageContainer:[styles.imageContainer,{backgroundColor:'gray'}]}>
        {image && <Image source={{ uri: image }} style={{flex:1, borderRadius:50}} />}

        <ImageSelector pickImage={pickImage}/>
        </View>
        {/*----------------*/}

      <CustomTextInput<string>
          label="Name"
          inputValue={name}
          setInputValue={setName}
          placeHolder="Enter your name here"
          inputContainerStyle={styles.nameContainer}
          labelStyle={styles.label}
          keyboardType="default"
          />






          {/* Gender Input */}
          <View>
          <Text style={styles.label}>Gender</Text>
          <View style={styles.GenderInputContainer}>
            <Picker
              selectedValue={gender}
              onValueChange={(itemValue) => setGender(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select Your Gender" value="" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Other" value="other" />
            </Picker>
          </View>
        </View>

        {/*Birthday input*/}
        <View style={{padding:10}}>
        <DatePicker birthDate={birthDate} setBirthDate={setBirthDate}/>            
        </View>


        {/*Email input*/}
        <CustomTextInput<string>
          label="Email"
          inputValue={email}
          setInputValue={setEmail}
          placeHolder="Enter your email here"
          inputContainerStyle={styles.nameContainer}
          labelStyle={styles.label}
          keyboardType="default"
          />


        {/*Height input*/}
        <CustomTextInput<number>
          label="Height"
          inputValue={height}
          setInputValue={setHeight}
          placeHolder="Enter your height here"
          inputContainerStyle={styles.nameContainer}
          labelStyle={styles.label}
          keyboardType="numeric"
          />

        {/*Weight input*/}
        <CustomTextInput<number>
          label="Weight"
          inputValue={weight}
          setInputValue={setWeight}
          placeHolder="Enter your weight here"
          inputContainerStyle={styles.nameContainer}
          labelStyle={styles.label}
          keyboardType="numeric"
          />

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

    pageContainer:{
      borderWidth:1,
      flex:1,
      padding:20
    },
  
    header:{
      fontFamily:"Poppins-Bold",
      fontSize:40,
      textAlign:"center",
      marginTop:15
    },
  
  
    imageContainer:{
      width:100,
      height:100,
      borderRadius:50,
      alignSelf:"center",
      position:"relative",
      marginTop:"5%"
    },
  
  
  
    formsContainer:{
      flex:1,
      marginTop:"2%",
      padding:10,
      gap:20
    },
  
  
  
    // PICKER - TO BE TRANSFERRED TO COMPONENT
  
    label: {
      fontSize: 16,
      marginBottom: 8,
      marginHorizontal:12,
      color:"#505050",
      fontFamily:"Poppins-Regular",
      marginTop:10 
        
    },
  
    nameContainer:{
      borderWidth: 1,
      borderColor: "#8797DA",
      borderRadius: 5,
      overflow: "hidden",
      padding:15,
      height:65,
      fontFamily:"Poppins-Regular",
      fontSize:15,
      marginHorizontal:10,
      marginBottom:20,

    },
  
    GenderInputContainer: {
      borderWidth: 1,
      borderColor: "#8797DA",
      borderRadius: 5,
      overflow: "hidden",
      marginStart:10,
      marginBottom:10,
    
    },
    picker: {
     color:"#505050",
     fontFamily:"Poppins-Regular"
    
    },
  
  
  
    buttonBox:{
      backgroundColor:"#8797DA",
      borderRadius:5,
      marginTop:"5%"
     },
   
     buttonText:{
      fontFamily:"Poppins-Bold",
      fontSize:20,color:"white",
      padding:10,
      textAlign:"center"
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