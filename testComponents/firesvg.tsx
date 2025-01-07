import { Fontisto } from '@expo/vector-icons';
import React from 'react';
import { SvgProps } from 'react-native-svg'; // We need to satisfy this prop type



// Wrapper function for Fontisto icons to match SvgProps
const FireIcon: React.FC<SvgProps> = (props) => {
  return <Fontisto name="fire" size={15} color="white"/>;
};

export default FireIcon;