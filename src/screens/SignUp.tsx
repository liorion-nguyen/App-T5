import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import CustomInput from "../components/common/CustomInput";
import CustomButton from "../components/common/CustomButton";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");

    const handleSubmit = () => {
        if (!fullName || !email || !password) {
            Alert.alert("Please fill in all fields");
            return;
        }
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
        // handle Sign Up
        Alert.alert("Login successful");
    }

    const navigation = useNavigation<any>();
    const handleChangeSignIn = () => {
        navigation.navigate("Login");
    }
    return (
        <View style={styles.container}>
            <CustomInput placeholder="Enter your fullName" value={fullName} onChangeText={setFullName} />
            <CustomInput placeholder="Enter your email" value={email} onChangeText={setEmail} />
            <CustomInput placeholder="Enter your password" value={password} onChangeText={setPassword} secureTextEntry={true} />
            <CustomButton text="Sign Up" onPress={handleSubmit} />
            <CustomButton text="Login" onPress={handleChangeSignIn} />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})