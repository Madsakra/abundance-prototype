import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import { SvgProps } from 'react-native-svg'; // We need to satisfy this prop type



// Wrapper function for Fontisto icons to match SvgProps
const CubeSvg: React.FC<SvgProps> = (props) => {
  return <MaterialCommunityIcons name="cube-send" size={15} color="white" />;
};

export default CubeSvg;