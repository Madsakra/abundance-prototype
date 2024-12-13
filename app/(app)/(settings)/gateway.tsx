import { FlashList } from "@shopify/flash-list";
import { Link, RelativePathString } from "expo-router";
import { Text, View } from "react-native";
import GatewayCard from "~/components/GatewayCard";


const gateWayList = [
  {header:"Profile",link:"/profile" as RelativePathString,svg:'profile',color:"#8797DA"},
  {header:"Membership",link:"/membership" as RelativePathString,svg:'membership',color:"#8797DA"}
];


export default function gateway() {
  return (
    <View style={{flex:1,justifyContent:"space-evenly","alignItems":"center",width:"100%",height:"auto"}}>
        
 

    {gateWayList.map((item,index)=>(
          <GatewayCard 
          header={item.header} 
          key={index}
          link={item.link}
          svg={item.svg}
          color={item.color}
          />
    ))}
  
    


    </View>
  )
}
