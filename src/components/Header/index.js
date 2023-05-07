import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import Input from "../Input/Input";

const Header = ({title, onBackPress, onLogout, onSearch, keyword, showLogout, showSearch, showBack}) => {
    const [searchInput, setSearchInput] = useState(false)

    const onSearchClick = () => {
        setSearchInput(s => !s)
    }

    return(
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                {showBack ? (
                    <Pressable hitSlop={20} onPress={onBackPress}>
                        <Image style={styles.icon} source={require('../../assets/back.png')}/>
                    </Pressable>
                ) : showSearch ? (
                    <Pressable hitSlop={20} onPress={onSearchClick}>
                        <Image style={styles.icon} source={require('../../assets/search.png')}/>
                    </Pressable>
                ) : <View style={styles.space} />}

                <Text style={styles.title}>{title}</Text>

                {showLogout ? (
                    <Pressable hitSlop={20} onPress={onLogout}>
                        <Image style={styles.icon} source={require('../../assets/logout.png')}/>
                    </Pressable>
                ) : <View style={styles.space} />}
            </View>
            {searchInput ? (
                <Input onChangeText={onSearch} value={keyword} placeholder="Search Now" />
            ) : null}
        </View>
    )
}


export default Header;