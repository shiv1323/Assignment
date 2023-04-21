import { FlatList, StyleSheet, Text,View } from 'react-native'
import React, { useState } from 'react'
import { menuButton } from './sliderData';
import { TouchableOpacity } from 'react-native';


const Item = ({item,  onPress,backgroundColor, textColor}) => (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.SubmitButtonStyle, {backgroundColor:backgroundColor,color: textColor,borderColor:backgroundColor}]}>{item.text}</Text>
      </TouchableOpacity>
  );

const Menu = () => {

const[selectedId, setSelectedId] = useState();

    const renderItem = ({item}) => {
    const backgroundColor = item.key === selectedId ? '#3a643b' : '#fff7e2';
    const color = item.key === selectedId ? '#fff' : '#000';
    return (
        <Item
          item={item}
          onPress={() => setSelectedId(item.key)}
          backgroundColor={backgroundColor}
          textColor={color}
        />
      );
    }


    

  return (
    <View>
        <FlatList
        horizontal 
        showsHorizontalScrollIndicator={false}
        data={menuButton}
        renderItem={ renderItem}
        keyExtractor={item => item.key}
        extraData={selectedId}
        
      />
    </View>
    
  )
}

export default Menu

const styles = StyleSheet.create({
      SubmitButtonStyle: {
        width:150,
        marginLeft:10,
        marginTop: 10,
        paddingTop: 13,
        height:60,
        color: 'black',
        fontSize: 20,
        borderRadius:10,
        borderWidth:1,
        textAlign: 'center',
        flexWrap:"wrap",
        fontWeight:'600'
    },
})