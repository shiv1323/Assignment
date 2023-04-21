import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { FlatList } from "react-native";
import { homeSlide } from "./sliderData";




const Post = () => {


    const renderItem=({item})=>{
        return(
            <View style={[styles.card]}>
            <Image
              source={item.image}
              style={styles.image}
            />
            <View style={styles.cardContent}>
              <Text style={styles.description}>{item.body}</Text>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={[styles.title, {left:"60%"}]}>{item.date}</Text>
            </View>
          </View>
        )
    }

  return (
    <FlatList
    showsVerticalScrollIndicator={false}
    data={homeSlide}
    keyExtractor={item=>item.key}
    renderItem={renderItem}
    />

  );
};

export default Post;

const styles = StyleSheet.create({
card: {
    marginLeft:10,
    marginRight:10,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: 'row',
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 120,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  cardContent: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    color:'grey',
    position:'absolute',
     left:"5%", 
     top:"59%"
  },
  description: {
    fontSize: 16,
    marginTop: 5,
  },
});
