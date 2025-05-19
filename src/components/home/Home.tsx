import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Button, SafeAreaView, Text, TextInput, View } from "react-native";

export default function Home() {
    const [dataStorage, setDataStorage] = useState<string[]>([]);
    const [name, setName] = useState("");
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await AsyncStorage.getItem("testName"); // Lấy dữ liệu từ AsyncStorage (String)
                if (data !== null) {
                    setDataStorage(JSON.parse(data));
                }
            } catch (error) {
                console.log("Error getting data", error);
            }
        }
        getData();
    }, [])
    const handleSubmit = async () => {
        if (name) {
            try {
                setDataStorage([...dataStorage, name]);
                setName("");
                await AsyncStorage.setItem("testName", JSON.stringify([...dataStorage, name]));
            } catch (error) {
                console.log("Error saving data", error);
            }
        }
    }
    return (
        <SafeAreaView>
            <Text>Home</Text>
            <TextInput placeholder="Enter your name" value={name} onChangeText={setName} />
            <Button title="Submit" onPress={handleSubmit} />
            {
                dataStorage?.map((item, index) => {
                    return (
                        <Text key={index}>{item}</Text>
                    )
                })
            }
        </SafeAreaView>
    );
}