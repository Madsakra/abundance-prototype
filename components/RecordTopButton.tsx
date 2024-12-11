import { Pressable, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from "react-native";

type RecordTopButtonProps = {
    redirect:()=>void;
    bgColor:string;
    buttonText:string;
}


export default function RecordTopButton({redirect,bgColor,buttonText}:RecordTopButtonProps) {
  return (
    <Pressable onPress={redirect} style={[styles.buttonStyle,{backgroundColor:bgColor}]}>
        <Text style={styles.textStyle}>{buttonText}</Text>
      </Pressable>
  )
}

const styles = StyleSheet.create({
    buttonStyle:{
        width:"45%",
        marginBottom:15,
        alignSelf:"flex-end",
        borderRadius:5,
        padding:10
    },

    textStyle:{
        textAlign:"center",
        fontFamily:"Poppins-Bold",
        fontSize:15,
        color:"white"
    }
})