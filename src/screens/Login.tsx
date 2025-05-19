import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import CustomInput from "../components/common/CustomInput";
import CustomButton from "../components/common/CustomButton";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        if (!email || !password) {
            Alert.alert("Please fill in all fields");
            return;
        }
        if (password.length < 6) {
            Alert.alert("Password must be at least 6 characters");
            return;
        }
        if (!email.includes("@") || !email.includes(".")) {
            Alert.alert("Please enter a valid email");
            return;
        }

        // handle Sign In
        Alert.alert("Login successful");
    }

    const navigation = useNavigation<any>();
    const handleChangeSignUp = () => {
        navigation.navigate("SignUp");
    }
    return (
        <View style={styles.container}>
            <CustomInput placeholder="Enter your email" value={email} onChangeText={setEmail} />
            <CustomInput placeholder="Enter your password" value={password} onChangeText={setPassword} secureTextEntry={true} />
            <CustomButton text="Login" onPress={handleSubmit} />
            <CustomButton text="Sign Up" onPress={handleChangeSignUp} />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})