import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import Seperator from "../../../components/Seperator";
import GoogleLogin from "../../../components/GoogleLogin";

const SignUp = ({ navigation }) => {
    const [checked, setChecked] = useState(false)

    const onSignIn = () => {
        navigation.navigate('SignIn')
    }

    const onBack = () => {
        navigation.goBack()
    }

    return(
        <ScrollView style={styles.container}>
            <AuthHeader onBackPress={onBack} title="Sign Up" />

            <Input label="Name" placeholder="Mego Bahaa"/>
            <Input label="E-mail" placeholder="mego@gmail.com"/>
            <Input isPassword label="Password" placeholder="********"/>

            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked}/>
                <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> &<Text style={styles.agreeTextBold}> Privacy</Text> </Text>
            </View>

            <Button style={styles.button} title="Sign Up" />

            <Seperator text="Or sign in with" />

            <GoogleLogin />

            <Text style={styles.footerText}>
                Already have an account? 
                <Text onPress={onSignIn} style={styles.footerLink}> Sign In </Text> 
            </Text>

        </ScrollView>
    )
}


export default SignUp;