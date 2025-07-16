import { StyleSheet, TextInput } from "react-native";

export default function CustomInput() {
    return (
        <TextInput
            placeholder="Enter your email"
            style={styles.input}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: "100%",
        borderColor: "#e8e8e8",
        borderWidth: 1, // Đường viền
        borderRadius: 5, // Bo góc
        padding: 10,
    },
});