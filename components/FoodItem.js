import { Pressable, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import MenuItem from './MenuItem';

const FoodItem = ({ item }) => {
    const data = [item];
    return (
        <View>
            {data?.map((item, index) => (
                <>
                    <Pressable style={{
                        margin: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }} key={index}>
                        <Text>{item?.name} ({item?.items?.length})</Text>
                        <AntDesign name="down" size={20} color="black" />
                    </Pressable>

                    {item?.items?.map((item, index) => (
                        <MenuItem key={index} item={item} />
                    ))}
                </>
            ))}
        </View>
    )
}

export default FoodItem
