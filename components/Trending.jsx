import { FlatList, Text, View } from "react-native"
import Card from "./Card"
import tw from 'twrnc';

const data = [
    {
      id:1,
      description: '2bdrm Blocks flats in P and T Estate Ipaja',
      image: require('../assets/images/hey.png')
    },
    {
      id:2,
      description: '3bdrm Apartmment in Silverland Estate for Rent',
      image: require('../assets/images/hey.png')
    },
    {
        id:2,
        description: '3bdrm Apartmment in Silverland Estate for Rent',
        image: require('../assets/images/hey.png')
    },
    {
        id:2,
        description: '3bdrm Apartmment in Silverland Estate for Rent',
        image: require('../assets/images/hey.png')
    },
    {
        id:2,
        description: '3bdrm Apartmment in Silverland Estate for Rent',
        image: require('../assets/images/hey.png')
    },
    {
        id:2,
        description: '3bdrm Apartmment in Silverland Estate for Rent',
        image: require('../assets/images/hey.png')
    }
]
const Trending = () => {
  return (
    <View style={tw`px-5`}>
        <Text style={tw`mt-10 font-semibold text-gray-500 text-lg`}>Trending</Text>
        {/* <View style={tw`h-fit w-full flex flex-wrap flex-row justify-between`}>
            {data.map((item)=>{
                return (
                    <Card each={item}/>
                )
            })}
        </View> */}
        <View style={tw`h-fit w-full flex flex-col`}>
            {data.map((item)=>{
                return (
                    <Card each={item}/>
                )
            })}
        </View>
    </View>
  )
}

export default Trending