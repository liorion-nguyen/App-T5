/*
Chạy 1 dự án:
B1: Mở dự án lên VS code
B2: Mở máy ảo lên
B3: Mở terminal: npm start
B4: Đợi starting xong thì nhấn phím a.
*/
import axios from "axios";
import { useContext, useLayoutEffect, useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text
} from "react-native";
import { AuthContext } from "../contexts/AuthenticationContext";
import CustomButton from "./common/CustomButton";
import CustomInput from "./common/CustomInput";
import ReceiveData from "./ReceiveData";

export default function AppTest() {
    const [title, setTitle] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");

    const [inEmail, setInEmail] = useState("");
    const [inPassword, setInPassword] = useState("");
    const url = "https://l-edu.koyeb.app";
    const { login } = useContext(AuthContext);
    const handleRequest = async () => {
        const response = await axios.get(url);
        setTitle(response.data);
    }
    const handleSignUp = async () => {
        const response = await axios.post(`${url}/auth/signup`,
            {
                email: email,
                fullName: fullName,
                password: password
            }
        )
        console.log(response.data);
    }
    const handleSignIn = async () => {
        try {
            const response = await axios.post(`${url}/auth/login`,
                {
                    email: inEmail,
                    password: inPassword
                }
            )
            console.log(response.data);
            login(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useLayoutEffect(() => {
        handleRequest();
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <Text>{title}</Text>
            <CustomInput placeholder="Enter your name" value={fullName} onChangeText={setFullName} />
            <CustomInput placeholder="Enter your email" value={email} onChangeText={setEmail} />
            <CustomInput placeholder="Enter your password" value={password} onChangeText={setPassword} secureTextEntry={true} />
            <CustomButton text="Submit" onPress={handleSignUp} />

            <CustomInput placeholder="Enter your email" value={inEmail} onChangeText={setInEmail} />
            <CustomInput placeholder="Enter your password" value={inPassword} onChangeText={setInPassword} secureTextEntry={true} />
            <CustomButton text="Submit" onPress={handleSignIn} />


            <ReceiveData />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    }
})