import React, { useState } from "react";
import { Image, Pressable, Text, style, TextInput, View, Modal, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Input = ({ label, type, isPassword, options, value, onChangeText,placeholder, style, ...props }) => {
    const [isPasswordVisable, setIsPasswordVisable] = useState(false);
    const [isPickerModalVisable, setIsPickerModalVisable] = useState(false);


    const onEyePress = () => {
        setIsPasswordVisable(!isPasswordVisable)
    }

    const onSelecte = (opt) => {
        onChangeText(opt)
        setIsPickerModalVisable(false)
    }

    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
                {type === "picker" ? (
                    <Pressable onPress={() => setIsPickerModalVisable(true)} style={styles.inputContainer}>
                        {value ? (
                        <Text style={[styles.input, style]}>{value?.title}</Text>
                        ) : (
                        <Text style={[styles.placeholder, style]}>{placeholder}</Text>
                        )}
                            <Image style={styles.arrow}  source={require("../../assets/arrow.png")}/>
                    </Pressable>
                ) : (
                    <View style={styles.inputContainer}>
                        <TextInput placeholder={placeholder} value={value} onChangeText={onChangeText} secureTextEntry={isPassword && !isPasswordVisable} style={[styles.input, style]} {...props}/>
                        {isPassword && (
                        <Pressable onPress={onEyePress}>
                            <Image style={styles.eye}  source={isPasswordVisable? require("../../assets/eye.png") : require("../../assets/eye_closed.png")}/>
                        </Pressable>
                        )}   
                    </View>
                )}

                <Modal transparent visible={isPickerModalVisable}>
                    <TouchableOpacity activeOpacity={1} onPress={() => setIsPickerModalVisable(false)} style={styles.modalWrapper}>
                        <TouchableOpacity activeOpacity={1} style={styles.modalContant}>
                            <Text style={styles.headerTitle}>Select options</Text>   

                            {options?.map(opt =>
                            {
                                if (!opt?.id) {
                                    return null
                                }

                                const selected = value?.id === opt?.id

                                return (
                                    <Text onPress={() => onSelecte(opt)} style={[styles.optionText, selected ? styles.selectedOption : {}]} key={opt?.title}>{opt?.title}</Text>
                                )
                            })}  
                        </TouchableOpacity>
                    </TouchableOpacity>
                </Modal>
                
        </View>
    )
}


export default  React.memo(Input);