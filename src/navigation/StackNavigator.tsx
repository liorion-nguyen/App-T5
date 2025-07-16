import { createStackNavigator } from "@react-navigation/stack"
import Home from "../screens/Home";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'green',
                },
                headerTintColor: 'red',
                headerTitleStyle: {
                    fontWeight: 800,
                },
            }}
        >
            <Stack.Screen name="Home" component={Home}
                options={{
                    title: "Trang chủ"
                }}
            />
            <Stack.Screen name="Login" component={Login}
                options={{
                    title: "Đăng nhập",
                    headerStyle: {
                        backgroundColor: 'gray',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 800,
                    },
                }}
            />
            <Stack.Screen name="SignUp" component={SignUp}
                options={{
                    title: "Đăng ký"
                }}
            />
        </Stack.Navigator>
    )
}