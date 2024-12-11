import { FlashList } from "@shopify/flash-list";
import { Link, RelativePathString } from "expo-router";
import { Text, View } from "react-native";
import GatewayCard from "~/components/GatewayCard";


const gateWayList = [
  {header:"Calories",link:"/calories/caloriesLogging" as RelativePathString,svg:"fire",color:"#C68F5E"},
  {header:"Glucose",link:"/glucose/glucoseLogging" as RelativePathString,svg:'cube',color:"#DB8189"}
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
