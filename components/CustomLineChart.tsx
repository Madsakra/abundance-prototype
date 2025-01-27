import { Dimensions, StyleSheet, Text, View } from "react-native";
import { LineChart, lineDataItem } from "react-native-gifted-charts";

type CustomLineChartProps = {

    headerName:string;
    trackingUnit:string;
    data:lineDataItem[];

    graphColor:string;
    gradientStart:string;
    gradientEnd:string;


};




export default function CustomLineChart({
    headerName,
    trackingUnit,
    data,graphColor,
    gradientStart
    ,gradientEnd
}:CustomLineChartProps) {

    const screenWidth = Dimensions.get('window').width; // Get screen width
    const screen60 = screenWidth * 0.6

  return (
    <View>
    <Text style={[{color:graphColor},styles.chartHeader]}>{headerName} </Text>

    <Text style={[{color:graphColor},styles.subHeader]}>{trackingUnit}</Text>

    <LineChart data={data}
         thickness={2}
         color={graphColor}
         isAnimated
         noOfSections={4}
         areaChart
         yAxisTextStyle={graphColor}
         curved
     
         startFillColor={gradientStart}
        
         endFillColor={gradientEnd}
         startOpacity={0.4}
         endOpacity={0.4}
        
         spacing={100}
         width={screen60}
         rulesColor="#CDCDCD"
         rulesType="solid"
         initialSpacing={40}
         yAxisColor="lightgray"
         xAxisColor="lightgray"
    />
  </View>
  )
}


const styles = StyleSheet.create({
    chartHeader:{
        fontFamily:"Poppins-Bold",
        fontSize:20 
    },

    subHeader:{
        marginBottom:20,
        fontSize:15,
        fontFamily:"Poppins-SemiBold"
    }
})