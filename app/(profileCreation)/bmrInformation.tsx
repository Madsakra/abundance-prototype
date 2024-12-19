import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomTextInput from "~/components/CustomTextInput";
import FunctionTiedButton from "~/components/FunctionTiedButton";


export default function bmrInformation() {
  
    const [height,setHeight] = useState<number|null>(null);
    const [weight,setWeight] = useState<number|null>(null);


    const nextSection = () => {
      try {
        // Check if height and weight are valid (not null and not 0)
        if (height && weight && height > 0 && weight > 0) {
          // Proceed to the next section
          // MAKE CALL TO SQL LITE TO SAVE DATA
          router.replace("/(profileCreation)/healthInformation");
        } else {
          // Alert user if height or weight is invalid
          alert("Please fill in both height and weight correctly! Values must be greater than 0.");
        }
      } catch (err) {
        console.error("Error saving data or navigating:", err);
        alert("Something went wrong. Please try again!");
      }
    };
     



    return (
    <View style={{flex:1}}>
        <View style={styles.headerContainer}>
        <Text style={{fontFamily:"Poppins-Bold",fontSize:40,textAlign:"center"}}>Nearly There!</Text>
        <Text style={{fontFamily:"Poppins-Regular",fontSize:15,textAlign:"center"}}>Fill up the following for BMR (Body Metabolism Rate) Calculation</Text>
        </View>

        {/*Form Container*/}
        <View style={{flex:1,padding:20,gap:30}}>

        <CustomTextInput<number> 
          label="Height"
          inputValue={height}
          setInputValue={setHeight}
          placeHolder="Enter your height here"
          inputContainerStyle={styles.inputContainer}
          labelStyle={styles.label}
          keyboardType="numeric"
          />

        <CustomTextInput<number> 
          label="Weight"
          inputValue={weight}
          setInputValue={setWeight}
          placeHolder="Enter your weight here"
          inputContainerStyle={styles.inputContainer}
          labelStyle={styles.label}
          keyboardType="numeric"
          />

        {/*Submit button*/}

      
        
        <FunctionTiedButton
            buttonStyle={styles.buttonBox}
            onPress={nextSection}
            textStyle={styles.buttonText}
            title="Next"
        /> 
    
    

        </View>


    </View>
  )
}


const styles = StyleSheet.create({
    headerContainer:{
        padding:30,
        paddingTop:50,
    },


    label: {
        fontSize: 16,
        marginBottom: 8,
        color:"#505050",
        fontFamily:"Poppins-Regular"
      },


    inputContainer:{
        borderWidth: 1,
        borderColor: "#8797DA",
        borderRadius: 5,
        overflow: "hidden",
        padding:15,
        height:65,
        fontFamily:"Poppins-Regular",
        fontSize:15,
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
       }
})