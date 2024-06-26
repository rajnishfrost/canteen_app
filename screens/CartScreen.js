import { View, Text, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { featured } from '../constants'
import { themeColors } from '../theme'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { selectCanteen } from '../slices/canteenSlice';
import { selectBasketItems, selectBasketTotal } from '../slices/basketSlice';

export default function CartScreen() {
    const [groupedItems, setGroupedItems] = useState([])
    const restaurant = useSelector(selectCanteen)
    const navigation = useNavigation()
    const basketItems = useSelector(selectBasketItems)
    const basketTotal = useSelector(selectBasketTotal)
    console.log(basketItems);
    //   useEffect(() => {
    //     const items = basketItems.reduce((group, item) => {
    //         if(group[item.id]){
    //           group[item.id].push(item)
    //         }else {
    //           group[item.id] = [item]
    //         }
    //     }, {})
    //     setGroupedItems(items)
    //   }, [basketItems])
    return (

        <View className=" bg-white flex-1">
            {/* top button */}
            <View className="relative py-4 shadow-sm my-10">
                <TouchableOpacity
                    style={{ backgroundColor: themeColors.bgColor(1) }}
                    onPress={navigation.goBack}
                    className="absolute z-10 rounded-full p-1 shadow top-5 left-2">
                    <Icon.ArrowLeft strokeWidth={3} stroke="white" />
                </TouchableOpacity>
                <View>
                    <Text className="text-center font-bold text-xl">Your cart</Text>
                    <Text className="text-center text-gray-500">{restaurant.title}</Text>
                </View>

            </View>

            {/* delivery time */}
            <View style={{ backgroundColor: themeColors.bgColor(0.2) }} className="flex-row px-4 items-center">
                <Image source={require('../assets/images/bikeGuy.png')} className="w-20 h-20 rounded-full" />
                <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>
                <TouchableOpacity>
                    <Text style={{ color: themeColors.text }} className="font-bold">Change</Text>
                </TouchableOpacity>
            </View>

            {/* dishes */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                className="bg-white pt-5"
                contentContainerStyle={{
                    paddingBottom: 50
                }}

            >
                {
                    basketItems.map((data, index) => {
                        return (
                            <View key={index}
                                className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md">
                                <Text style={{ color: themeColors.text }} className="font-bold"> {index} X </Text>
                                <Image className="h-14 w-14 rounded-full" src={data.image} />
                                <Text className="flex-1 font-bold text-gray-700">{data.name}</Text>
                                <Text className="font-semibold text-base">{data.price}</Text>
                                <TouchableOpacity
                                    className="p-1 rounded-full"
                                    style={{ backgroundColor: themeColors.bgColor(1) }}
                                >
                                    <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white" />
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
            {/* totals */}
            <View style={{ backgroundColor: themeColors.bgColor(0.2) }} className=" p-6 px-8 rounded-t-3xl space-y-4">
                {/* <View className="flex-row justify-between">
                    <Text className="text-gray-700">Subtotal</Text>
                    <Text className="text-gray-700">${restaurant.basketTotal}</Text>
                </View> */}
                {/* <View className="flex-row justify-between">
                    <Text className="text-gray-700">Delivery Fee</Text>
                    <Text className="text-gray-700">$2</Text>
                </View> */}
                <View className="flex-row justify-between">
                    <Text className="font-extrabold">Order Total</Text>
                    <Text className="font-extrabold">₹{basketTotal}</Text>
                </View>
                <View>
                    <TouchableOpacity
                        style={{ backgroundColor: themeColors.bgColor(1) }}
                        onPress={() => navigation.navigate('PreparingOrderScreen')}
                        className="p-3 rounded-full">
                        <Text className="text-white text-center font-bold text-lg">Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}