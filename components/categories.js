import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../constants'

export default function Categories() {
  const [activeCategory, setactiveCategory] = useState(null)
  return (
    <View className="mt-4">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}
      className="overflow-visible" 
      contentContainerStyle={{
        paddingHorizontal: 15
      }}>
       {
        categories.map((category, index)=> {
          let isActive = category.id == activeCategory;
          let btnClass = isActive ? 'bg-gray-800' : 'bg-gray-200'
          let textClass = isActive ? "font-semibold text-gray-800" : "text-gary-500"
           return(
             <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity 
              onPress={() => setactiveCategory(category.id)} className={"p-1 rounded-full shadow " + btnClass }>
                  <Image style={{width:45, height: 45 , borderRadius : "30px"}} src={category.image} />
              </TouchableOpacity>
              <Text className={"text-sm" + textClass}>{category.name}</Text>
             </View>
           )
       })
      }
      </ScrollView>
    </View>
  )
}