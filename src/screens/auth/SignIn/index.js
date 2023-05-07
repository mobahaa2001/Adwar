import React from "react";
import { ScrollView, Text } from "react-native";
import { styles } from "./styles";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button";
import Seperator from "../../../components/Seperator";
import GoogleLogin from "../../../components/GoogleLogin";

const SignIn = ({ navigation }) => {
    const onSignUp = () => {
        navigation.navigate('SignUp')
    }

    const onBack = () => {
        navigation.goBack()
    }


    return(
        <ScrollView style={styles.container}>
            <AuthHeader onBackPress={onBack} title="Sign In" />

            <Input label="E-mail" placeholder="mego@gmail.com"/>
            <Input isPassword label="Password" placeholder="********"/>


            <Button style={styles.button} title="Sign In" />

            <Seperator text="Or sign in with" />

            <GoogleLogin />

            <Text style={styles.footerText}>
                Don't have an account? 
                <Text onPress={onSignUp} style={styles.footerLink}> Sign Up </Text> 
            </Text>

        </ScrollView>
    )
}


export default SignIn;