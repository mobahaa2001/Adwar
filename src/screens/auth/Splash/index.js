import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import Button from "../../../components/Button";

const Splash = ({ navigation }) => {
    const onSignup = () => {
        navigation.navigate('SignUp')
    }

    const onSignin = () => {
        navigation.navigate('SignIn')
    }

    return(
        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={require('../../../assets/splash_image.png')}/>
            <View style={styles.titleContainer}>
                <Text style={styles.title}> You'll Find </Text>
                <Text style={[styles.title, styles.innerTitle]}> All you need </Text>
                <Text style={styles.title}> Here! </Text>
            </View>

            <View style={styles.buttonCont}>
                <Button onPress={onSignup} title="Sign Up"/>
            </View>

            <Pressable hitSlop={20}>
                <Text onPress={onSignin} style={styles.footerText}>Sign In</Text>
            </Pressable>
        </View>
    )
}


export default Splash;