import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { wp,hp } from '../helpers/common'
import { LinearGradient } from 'expo-linear-gradient'
import Animated, {FadeInDown} from 'react-native-reanimated'
import theme from '../constants/theme'
import { useRouter } from 'expo-router'


const WelcomeScreen = () => {
    const router = useRouter()
  return (
    <View style={styles.container}>
      <StatusBar style='light'/>
      <Image
        source={require('../assets/images/welcome.png')}
        style={styles.bgImage}
        resizeMode='cover'
      />

      <Animated.View entering={FadeInDown.duration(600)} style={{flex:1}}>
        <LinearGradient
            colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.5),', 'white', 'white']}
            style={styles.gradient}
            start={{x:0.5,y:0}}
            end={{x:0.5,y:0.8}}

        />

        <View style={styles.contentContainer}>
            <Animated.Text style={styles.title} entering={FadeInDown.delay(400).springify()}>
        .JPEG
            </Animated.Text>

            <Animated.Text style={styles.punchline} entering={FadeInDown.delay(500).springify()}>
                Every Image Tells A Story
            </Animated.Text>

            <Animated.View entering={FadeInDown.delay(600).springify()}>
                <Pressable onPress={()=> router.push('home')} style={styles.startButton}>
                    <Text style={styles.startText}>Start Exloring</Text>
                </Pressable>
            </Animated.View>
        </View>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    bgImage:{
      width:wp(100),
      height:hp(100),
      position:'absolute'  
    },
    gradient:{
       width:wp(100),
       height:hp(65),
       bottom:0,
       position:'absolute' 
    },
    contentContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-end',
        gap:14
    },
    title:{
        fontSize:hp(7),
        color:theme.colors.neutral(0.9),
        fontWeight:theme.fontWeight.bold
    },
    punchline:{
        fontSize:hp(2),
        letterSpacing:1,
        marginBottom:1,
        fontWeight:theme.fontWeight.medium
    },
    startButton:{
        marginBottom:50,
        backgroundColor:theme.colors.black,
        padding:15,
        paddingHorizontal:90,
        borderRadius:theme.radius.xl,
        borderCurve:'continuous'
    },
    startText:{
        color:theme.colors.white,
        fontSize:hp(3),
        fontWeight:theme.fontWeight.medium,
        letterSpacing:1
    },
})

export default WelcomeScreen