import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Text, View } from "react-native";

export default function CustomDrawerContent(props: any) {
    return (
        <DrawerContentScrollView {...props}>
            <View>
                <Text>App Profile</Text>
            </View>

            <DrawerItem 
                label="Home"
                onPress={() => props.navigation.navigate("Home")}
            />
            <DrawerItem 
                label="Profile"
                onPress={() => props.navigation.navigate("Profile")}
            />
        </DrawerContentScrollView>
    )
}