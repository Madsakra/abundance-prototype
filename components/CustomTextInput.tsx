import { KeyboardTypeOptions, StyleProp, Text, TextInput, TextStyle, View } from "react-native";

type CustomTextInputProps <T> = {
    label?:string;
    inputValue: T | null;
    setInputValue: (value: T | null) => void; // Accepts T or null
    placeHolder:string;
    inputContainerStyle?:StyleProp<TextStyle>
    labelStyle?:StyleProp<TextStyle>;
    keyboardType: KeyboardTypeOptions; 
    // keyboard types: default, numeric, email and address

};


export default function CustomTextInput<T>({
  label,
  inputValue,
  setInputValue,
  placeHolder,
  inputContainerStyle,
  labelStyle,
  keyboardType
}:CustomTextInputProps<T>) {


  // handle different types of input values

  const handleInputChange = (text: string) => {
    let parsedValue: T | null;

    if (
      keyboardType === "numeric" ||
      keyboardType === "number-pad" ||
      keyboardType === "decimal-pad"
    ) {
      parsedValue = (text ? parseFloat(text.replace(/[^0-9.]/g, '')) : null) as T | null;
    } else {
      parsedValue = (text as unknown) as T;
    }

    setInputValue(parsedValue);
  };







  return (
    <View>
    <Text style={labelStyle}>{label}</Text>
    <TextInput
          placeholder={placeHolder}
          value={inputValue !== null ? String(inputValue) : ""}
          onChangeText={handleInputChange}
          style={inputContainerStyle}
          keyboardType={keyboardType}
       />
    </View>
  )
}



