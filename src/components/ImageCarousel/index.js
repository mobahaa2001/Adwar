import React, { useState } from "react"
import { Dimensions, FlatList, Image, View } from "react-native";
import { styles } from "./styles";

const {width} = Dimensions.get("window")

const ImageCarousel = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const renerImages = ({ item }) => {
        return (
            <Image style={styles.image} source={ item }/>
        )
    }
    const handleScrollEnd = (e) => {
        const horizontalOffset = e.nativeEvent.contentOffset.x
        const index = Math.round(horizontalOffset / width)
        setActiveIndex(index)
    }
    return(
        <View>
            
            <FlatList 
                style= {styles.list} 
                data={ images }
                renderItem={renerImages}
                pagingEnabled
                horizontal
                onMomentumScrollEnd={handleScrollEnd}
            />
            <View style={styles.pagination}>
                {images?.map((_, i) => (
                    <View key={i} style={[styles.paginationLine, i === activeIndex ? styles.activeLine : {}]} />
                ))}
            </View>
        </View>
        
    )
}

export default React.memo(ImageCarousel);