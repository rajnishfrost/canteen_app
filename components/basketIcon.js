import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../slices/basketSlice'

export default function BasketIcon() {
  const navigation = useNavigation()
  const basketItems = useSelector(selectBasketItems)
  const basketTotal = useSelector(selectBasketTotal) 
  if(!basketItems.length) return;
  return (
    <View className="absolute bottom-5 w-full z-50">
        <TouchableOpacity 
          style={{backgroundColor: themeColors.bgColor(1)}}
          onPress={()=> navigation.navigate('CartScreen')} 
          className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg">
            <View className="p-2 px-4 rounded-full" style={{backgroundColor: 'rgba(255,255,255,0.3)'}}>
              <Text className="font-extrabold text-white text-lg">{basketItems.length}</Text>
            </View>
            
            <Text className="flex-1 text-center font-extrabold text-white text-lg">View Cart</Text>
            <Text className="font-extrabold text-white text-lg">₹{basketTotal}</Text>
        
        </TouchableOpacity>
      
    </View>
  )
}