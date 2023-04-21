import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Image } from "react-native";
import { SafeAreaView } from "react-native";
import { SCREEN_WIDTH } from "./Dimension";

const Detail = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} >
        <Image source={require("../image/FP.jpg")} style={styles.imageStyle} />
        <Text style={styles.title}>
          Amrutam Founding Principal – Mrs Chandrakanta Gupta
        </Text>
        <Text style={[styles.titleInfo, { left: "0%" }]}>Team Amrutam</Text>
        <Text style={styles.titleInfo}>17 Nov 2021</Text>

        <Text  style = {[styles.paragraph, {marginTop:"15%"}]}>
          On most days, the Amrutam office is bustling with activity. Some
          tapping on the keyboards here, some phone calls there. But today, the
          office is quiet. It is a Sunday. As I sit in the vast space, I cannot
          help but notice the cinematic view the room offers. Hundreds of books
          adorn the dark brown wooden shelves; a delicate bottle of Kumkumadi
          Oil quietly placed on the cupboard in the next room.
        </Text>
        
        <Text style = {styles.paragraph}>
          A few minutes later, Mrs Chandrakanta Gupta arrives. She’s wearing a
          pink cotton saree and her ever so radiant smile. Within minutes of
          exchanging pleasantries, she has very kindly agreed to tell me a story
          – the most important one of her life. The story that not only is a
          testament to how illuminating and miraculous her life has been but is
          also continually changing so many lives. One day at a time.
        </Text>
        <Text style={[styles.title, { color: "black",marginTop:10 }]}>A magical tale</Text>
        <Text style = {styles.paragraph}>
          She begins by telling me about her childhood. Born in the
          culturally-rich town of Gwalior, Mrs Gupta’s family moved to the
          Karera district of Shivpuri shortly after her birth. My curiosity
          about her early life prompts me to ask about her life when she was
          still a child.
        </Text>
        <Text style = {styles.paragraph}>Mrs Chandrakanta Gupta</Text>
        <Text style = {styles.paragraph}>
          “What happens when one is young? There are parents’ love and care,
          little desires, and fun with friends and siblings. I was brought up in
          a small town and wasn’t very familiar with the bustle of the city
          life. But we were happy with whatever we had.”
        </Text>
        <Text style = {styles.paragraph}>
          As the daughter of a homoeopathy doctor, Mrs Gupta developed an
          inclination for learning about home remedies since early on. Even
          today, she tries to treat flu and minor ailments at home itself. But
          her transition as an Ayurveda practicing person happened only after
          her marriage. Mr Ashok Gupta was working as an MR when Mrs Gupta’s
          parents found him a fit life partner for their daughter
        </Text>
        <Text style={[styles.title,{marginTop:10,marginBottom:10}]}>Amrutam Community Projects</Text>
      </ScrollView>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    margin:10,
    flex:1
  },
  imageStyle: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3a643b",
  },
  titleInfo: {
    position: "absolute",
    left: "59%",
    top: "27.3%",
    fontSize: 18,
    color: "grey",
    fontWeight: "700",
  },
  paragraph:{
    fontSize: 18,
fontFamily:'Roboto',
    marginTop:10,
    textAlign:'left',
    letterSpacing:-0.5
  },
});
