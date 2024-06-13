import { View } from 'react-native'
import React from 'react'
import img1 from "../assets/img/img1.jpg"
import img2 from "../assets/img/img2.jpg"
import img3 from "../assets/img/img3.jpg"
import { SliderBox } from "react-native-image-slider-box"

const Carousel = () => {

    const images = [
        img1,
        img2,
        img3
    ]

    return (
        <View>
            <SliderBox
                images={images}
                autoPlay c
                ircleLoop
                dotColor="#13274F"
                inactiveDotColor="#90A4AE"
                ImageComponentStyle={{
                    borderRadius:6,
                    width:"94%",
                    marginTop:10
                }}
                />
        </View>
    )
}

export default Carousel