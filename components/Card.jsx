import { Image, Text, TouchableOpacity, View } from "react-native"
import tw from 'twrnc';

const Card = ({each}) => {
  return (
    // <TouchableOpacity style={tw`bg-gray-100 shadow w-44 mt-4 rounded`}>
    //     <View>
    //         <View style={tw`bg-gray-700 rounded-t w-full h-32`}>
    //             <Image style={tw`w-full h-full rounded-t`} source={each.image}/>
    //         </View>
    //         <Text style={tw`text-gray-500 text-sm py-5 px-4`}>{each.description}</Text>
    //     </View>
    // </TouchableOpacity>
    <TouchableOpacity style={tw`bg-gray-100 h-32 shadow pr-4 w-full mt-4 rounded`}>
        <View style={tw`flex flex-row`}>
            <View style={tw`bg-gray-700 w-32 h-32 rounded-l `}>
                <Image style={tw`w-full h-full rounded-l`} source={each.image}/>
            </View>
            <View style={tw`w-58`}>
                <Text style={tw`text-gray-500 text-sm mt-5 ml-5`}>{each.description}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default Card