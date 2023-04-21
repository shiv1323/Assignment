import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
const Designicon = ({name,size=30,color,type="font-awesome-5"}) => {
  return (
    <Icon
    name={name}
    size={size}
    color={color}
    type={type}
    />
  )
}

export default Designicon

const styles = StyleSheet.create({})