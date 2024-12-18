import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Pressable, ScrollView, Text } from 'react-native'
import { View } from 'react-native'
import MembershipCard from '~/components/MembershipCard'

type MembershipCardProps = {
    tier:string;
    price:string;
    externalSvg?:React.ReactNode;
    
}

export default function membership() {

  const membershipTiers = [
    {tier:"Free",price:"$0 / month"},
    {tier:"Calories Premium",price:"$9.90 / month",svg:<FontAwesome name="fire" size={60} color="#00ACAC" />},
    {tier:"Glucose Premium",price:"$19.90 / month",svg:<MaterialCommunityIcons name="cube-send" size={60} color="#00ACAC" />},
    {tier:"Full Premium",price:"$29.90 / month"},

  ]


  const [currentMembershipTier,setCurrentMembershipTier] = useState(membershipTiers[0]);

  const handleMembershipChange = (memberTier:MembershipCardProps)=>{
    if (currentMembershipTier.tier !== memberTier.tier)
    {
      alert("Direct to external Stripe API")
      setCurrentMembershipTier(memberTier);
    }
  }


  return (
    <ScrollView style={{padding:10,marginVertical:10}}>

      {membershipTiers.map((item,index)=>(
        <MembershipCard
        key={index}
        tier={item.tier}
        price={item.price}
        externalSvg={item?.svg}
        handleMembershipChange={handleMembershipChange}
        currentMembershipTier={currentMembershipTier}
        />
      ))}

    </ScrollView>
  )
}
