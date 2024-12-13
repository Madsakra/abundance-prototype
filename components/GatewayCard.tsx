import { StyleSheet, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, RelativePathString } from "expo-router";

type GatewayCardProps = {
  header:string;
  link:RelativePathString;
  svg:string;
  color:string;

}

// Utility function to render the appropriate SVG icon
const renderSvgIcon = (svg: string, color: string) => {
  switch (svg) {
    case 'fire':
      return <FontAwesome name="fire" size={100} color={color} />;
      
    case 'cube':
      return <Ionicons name="cube" size={100} color={color} />;

    case 'profile':
      return <FontAwesome name="user" size={100} color={color} />;

    case 'membership':
      return <FontAwesome name="credit-card-alt" size={100} color={color} />
      
    default:
      return <Text style={{ color }}>Unsupported Icon</Text>;
  }
};


export default function GatewayCard({header,svg,color,link}:GatewayCardProps) {
  
  
  
  
  return (
    <Link href={link}>
    
    <View style={[styles.container,{borderColor:color}]}>
     
 {renderSvgIcon(svg, color)}
       <Text style={{fontFamily:"Poppins-Bold",fontSize:20,color:color}}>{header}</Text>
    </View>
    </Link> 
  )
}


const styles = StyleSheet.create({
  container:{
  width:250, 
  height:250, 

  borderRadius:10,
  alignItems:"center",
  justifyContent:"center",
  gap:15,
  backgroundColor:"white",
  }
})