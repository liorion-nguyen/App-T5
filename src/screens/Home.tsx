import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Home() {
    const navigation = useNavigation<any>();

    const handleBack = async() => {
        AsyncStorage.removeItem('loggedInUser');
        navigation.navigate("Login");
    }
    const [user, setUser] = useState<any>(null);
    useEffect(() => {
        const getUser = async () => {
            const user = await AsyncStorage.getItem('loggedInUser'); // String 
            if (user) {
                setUser(JSON.parse(user));
            }
        }
        getUser();
    }, []);

    return (
        <View>
            <Text>Home</Text>
            <Text>{user?.email || ""}</Text>
            <Text>{user?.fullName || ""}</Text>
            <Text>{user?.password || ""}</Text>
            <Button title="Logout" onPress={handleBack} />
        </View>
    )
}


const styles = StyleSheet.create({
    boxUser: {
        backgroundColor: 'gray',
        padding: 30,
        margin: 20,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})

// Mock up data về users(là 1 array bên trong có chứa nhiều object).
// Mỗi object chứa thông tin của 1 user gồm các key: fullName, email, password, gender,...
// Render giao diện thông tin user bằng phương thức map.