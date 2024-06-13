import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Categories = () => {
    const items = [
        {
            id:1,
            name:"Fast Food",
        },
        {
            id:2,
            name:"4.0+ Estrelas",
        },
        {
            id:3,
            name:"Ofertas",
        },
        {
            id:4,
            name:"Caseira",
        },
        {
            id:5,
            name:"Japones",
        },
        {
            id:6,
            name:"Mineira",
        },
    ]
  return (
    <View>
      <FlatList 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      data={items} 
      renderItem={({item}) => (
        <TouchableOpacity activeOpacity={0.8} style={{marginTop:5}}>
            <View style={{marginHorizontal:10,marginVertical:5,padding:5, backgroundColor:"#DB7093",borderRadius:4}}>
                <Text style={{paddingHorizontal:5,color:"white", fontWeight:"500"}}>{item?.name}</Text>
            </View>
        </TouchableOpacity>
      )}
      />
    </View>
  )
}

export default Categories
