import { useState } from "react";
import { Button, StyleSheet, Text, TextBase, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
    const [count, setCount] = useState<number>(0);
    const handleChangeCount = (value: number) => {
        if (value == -1 && count != 0) {
            setCount(count + value);
        }
        if (value == 1 && count != 10) {
            setCount(count + value);
        }
    }
    const handleScore = () => {
        if (count >= 8) {
            return "Gioi";
        } 
        else if (count >= 5) {
            return "Kha";
        }
        else if (count >= 3) {
            return "Trung Binh";
        }
        else {
            return "Yeu";
        }
    }
    return (
        <View>
            <Text>Score:</Text>
            <Button title="-" onPress={() => {
                handleChangeCount(-1);
            }}/>
            <Text>{count}</Text>
            <TouchableOpacity onPress={() => {
                handleChangeCount(1);
            }} style={styles.button}>
                <Text>+</Text>
            </TouchableOpacity>

            <Text
                style={{
                    color: count >= 8 ? "green" : ( count >= 5 ? "blue" : ( count >= 3 ? "orange" : "red" ) ),
                    fontSize: 20,
                    fontWeight: "bold"
                }}
            >{handleScore()}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: "red",
        padding: 10
    },
})