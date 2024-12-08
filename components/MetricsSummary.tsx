import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native"


type MetricsSummaryProps = {
    mainColor:string;
    infoHeader:string;
    dataValue:string;
    trackingUnit:string;

    containerStyle:StyleProp<ViewStyle>
    headerStyle:StyleProp<TextStyle>
    valueText:StyleProp<TextStyle>
}



export default function MetricsSummary({
    mainColor,
    infoHeader,
    dataValue,
    trackingUnit,
    headerStyle,
    containerStyle,
    valueText
}:MetricsSummaryProps) {
    
  return (
    <View style={containerStyle}>
    <Text style={headerStyle}>{infoHeader}</Text>
    <Text style={[valueText,{color:mainColor}]}>{dataValue} {trackingUnit}</Text>
  </View>
  )
}


