import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from './Dimension'


export const SLIDER_WIDTH = SCREEN_WIDTH + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)
const BannerSlide = ({data,index,style}) => {
  return (
    <View key={index}>
    <Image source={data.image} style={[{height:200,width:ITEM_WIDTH,borderRadius:10,resizeMode:'contain'},style]}/>
    </View>
  )
}

export default BannerSlide

const styles = StyleSheet.create({})