import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel';
import { SafeAreaView } from 'react-native-safe-area-context';
import { sliderData } from '../component/sliderData';
import { SCREEN_WIDTH } from '../component/Dimension';
import BannerSlide from '../component/BannerSlide';
import Menu from '../component/Menu';
import Post from '../component/Post';

export const SLIDER_WIDTH = SCREEN_WIDTH + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const Home = ({navigation}) => {

    const renderBanner = ({ item, index }) => {
        return (
        <View style={styles.container}>
          <TouchableOpacity onPress={()=>navigation.navigate('Amrutam Blog')}>
        <BannerSlide data={item} key={index} />
        <Text style={styles.body}>{item.body}</Text>
        </TouchableOpacity>
        </View>)
    }
  return (
    <SafeAreaView >
      <View>
        
                    <Carousel
                        data={sliderData}
                        renderItem={renderBanner}
                        sliderWidth={SCREEN_WIDTH}
                        itemWidth={300}
                        loop={true}
                        autoplay={true}
                    />
                </View>
                <Menu/>
                  <Post/>
                
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: ITEM_WIDTH,
        paddingBottom: 40,
      },
      body: {
        color: "#222",
        fontSize: 18,
        paddingLeft: 20,
        paddingLeft: 20,
        paddingRight: 20
      }
})