import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = "";
                    if (route.name == "Home") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name == "Profile") {
                        iconName = focused ? "person" : "person-outline";
                    }
                    return <Ionicons name={iconName as any} size={size} color={color}/>
                }
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

export default TabNavigator;