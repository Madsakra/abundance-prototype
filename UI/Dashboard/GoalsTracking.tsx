import { View } from "react-native";
import GoalsCard from "~/components/GoalsCard";


type GoalsTrackingProps = {
  color?:string;
  
}

export default function GoalsTracking({color}:GoalsTrackingProps) {





    const firstGoalProgress = {
      goalText:"<2300 kcal / day",
      goalValue:2300,
      currentProgress:1200,
      goalCategory:"calorie"
    }
  
    const secondGoalProgress = {
        goalText:"6.0 mmo/L before food",
        goalValue:6.0,
        currentProgress:8.3,
        goalCategory:"glucose"
      }


  return (
    <View style={{marginBottom:"5%"}}>
        <GoalsCard
        goals={firstGoalProgress}
        color={color?color:"#00ACAC"}
        
        />

        <GoalsCard
        goals={secondGoalProgress}
        color={color?color:"#00ACAC"}
        />


















    </View>
  )
}

