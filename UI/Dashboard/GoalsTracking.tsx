import { View } from "react-native";
import GoalsCard from "~/components/GoalsCard";




export default function GoalsTracking() {





    const firstGoalProgress = {
      goalText:"<2300 kcal / day",
      goalValue:2300,
      currentProgress:2300,
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
        color="#00ACAC"
        
        />

        <GoalsCard
        goals={secondGoalProgress}
        color="#00ACAC"
        />


















    </View>
  )
}

