import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CustomButtonProps {
    text: string;
    onPress: () => void;
    icon?: string;
    style?: any;
}
export default function CustomButton({ text, onPress, icon, style }: CustomButtonProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={{ ...styles.button, ...style }}>
                {icon && <Image source={{ uri: icon }} style={styles.buttonIcon} />}
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
    },
    button: {
        height: 40,
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        backgroundColor: "red",
        fontSize: 16,
        width: "50%",
    },
    buttonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
    },
    buttonIcon: {
        width: 20,
        height: 20,
        marginRight: 10
    }
});