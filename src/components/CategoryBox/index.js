import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { colors } from "../../utils/colors";

const CategoryBox = ({title, image, onPress, isFirst, isSelected}) => {

    return(
        <Pressable onPress={onPress} style={[styles.container, isFirst ? {marginLeft: 24} : {}]}>
            <View style={[styles.imageContainer, isSelected ? { backgroundColor: colors.lightBlue } : {}]}>
                <Image style={styles.image} source={image}/>
            </View>
            <Text style={[styles.title, isSelected ? { backgroundColor: colors.lightBlue, color: colors.white, fontWeight: "500" } : {}]}>{title}</Text>
        </Pressable>
    )
}


export default React.memo(CategoryBox);