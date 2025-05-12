import { StyleSheet, TextInput } from "react-native";

interface CustomInputProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
    style?: any;
}
export default function CustomInput({placeholder, value, onChangeText, secureTextEntry, style} : CustomInputProps) {
    return (
        <TextInput placeholder={placeholder} value={value} onChangeText={onChangeText} style={{ ...styles.input, ...style }} secureTextEntry={secureTextEntry}/>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        backgroundColor: "#fff",
        width: "100%",
        fontSize: 16
    }
})