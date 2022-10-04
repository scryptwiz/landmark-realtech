import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native"
import tw from 'twrnc';
import HomeNavOps from "../components/HomeNavOps";
import Search from "../components/Search";
import Trending from "../components/Trending";

const Home = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <ScrollView>
      <StatusBar barStyle="dark-content" hidden={false} translucent={true}/>
        <Text style={tw`text-gray-600 font-medium text-4xl px-5 pt-7`}>Rent & Buy{'\n'}Apartments</Text>
        <Search/>
        <View>
          <HomeNavOps/>
        </View>
        <View>
          <Trending/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home