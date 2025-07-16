import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import CustomButton from "../components/common/CustomButton";
import CustomInput from "../components/common/CustomInput";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async() => {
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
        let users = await AsyncStorage.getItem('users') || "";
        console.log(users);
        
        users = users ? JSON.parse(users) : [];
        if (!users || users.length === 0) {
            Alert.alert("No users found");
            return;
        }
        const user = users.find((user: any) => user.email === email && user.password === password);
        if (!user) {
            Alert.alert("Invalid email or password");
            return;
        }
        await AsyncStorage.setItem('loggedInUser', JSON.stringify(user));
        Alert.alert("Login successful");
        navigation.navigate("Home", {user: user});
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