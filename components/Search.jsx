import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native"
import tw from 'twrnc';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
const Search = () => {
  const inputAccessoryViewID = 'uniqueID';
  const initialText = '';
  const [text, setText] = useState(initialText);
  return (
    <View style={tw`w-full p-5`}>
        <View style={tw`bg-gray-200 px-5 py-2 rounded-lg flex flex-row justify-between items-center`}>
            <Ionicons name="search" style={tw`text-gray-500`} size={20}/>
            <TextInput style={tw`py-2.5 w-7/12 ml-1`} inputAccessoryViewID={inputAccessoryViewID} onChangeText={setText} value={text} placeholder={'Please type here…'}/>
            <Pressable style={tw`rounded-full bg-white px-5 flex justify-center items-center flex-row py-1.5`}>
                <Fontisto name="equalizer" style={tw`text-black`} size={12}/>
                <Text style={tw`text-gray-600 text-lg ml-1`}>Filter</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Search