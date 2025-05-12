import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export default function SignUp() {
    const navigation = useNavigation<any>();
    const handleLogin = () => {
        navigation.navigate("Login");
    }
    return (
        <View>
            <Text>jsachjksada</Text>
            <Text>jsachjksada</Text>
            <Text>jsachjksada</Text>
            <Text>jsachjksada</Text>
            <Text>jsachjksada</Text>
            <Text>jsachjksada</Text>
            <Button title="Go to Sign Up" onPress={handleLogin} />
        </View>
    )
}