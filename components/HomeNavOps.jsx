import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import tw from 'twrnc';

const data  = [
    {
      id:1,
      title: 'Rent An Apartment',
      image: require('../assets/icons/house.png')
    },
    {
      id:2,
      title: 'Buy An Apartment',
      image: require('../assets/icons/deal.png')
    }
]

const HomeNavOps = () => {
  return (
    <FlatList
        data={data}
        style={tw`px-5i=p`}
        keyExtractor={(item)=>item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
            <TouchableOpacity style={tw`bg-gray-200 p-2 pl-6 pt-4 w-32 mr-3 rounded`}>
                <View>
                    <Image style={{ width: 50, height: 50, resizeMode: "contain" }} source={item.image}/>
                    <Text style={tw`text-gray-500 text-sm font-medium mt-3`}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default HomeNavOps