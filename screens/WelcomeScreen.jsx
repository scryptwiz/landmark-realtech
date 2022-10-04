import { Button, ImageBackground, Pressable, SafeAreaView, StatusBar, Text, View } from "react-native"
import tw from 'twrnc';

const WelcomeScreen = ({ navigation }) => {
    const wlcImg = require('../assets/images/wlcImg.jpg')
  return (
    <View style={tw`h-full w-full`}>
        <StatusBar barStyle="white-content" hidden={false} translucent={true}/>
        <ImageBackground source={wlcImg}resizeMode="cover" style={tw`w-full h-full`}>
            <SafeAreaView style={tw`h-full`}>
                    <View style={tw`px-5 flex flex-col justify-between h-full pb-16`}>
                    <View style={tw`mt-20`}>
                        <Text style={tw`text-white font-semibold text-6xl text-left`}>Welcome To{'\n'}Realtech</Text>
                        <Text style={tw`text-white text-lg text-lg w-62`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    </View>
                    <Pressable onPress={() =>navigation.navigate('Home')} style={tw`text-white mx-auto bg-gray-600 w-52 flex rounded-full py-3`}>
                        <Text style={tw`text-white text-xl mx-auto font-medium`}>Get Started</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </ImageBackground>
    </View>
  )
}

export default WelcomeScreen