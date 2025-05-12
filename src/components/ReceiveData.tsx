import { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { AuthContext } from "../contexts/AuthenticationContext";

export default function ReceiveData() {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState({});
    useEffect(() => {
        if (user) {
            fetch("https://l-edu.koyeb.app/users", {
                "headers": {
                  "authorization": `Bearer ${user.data.access_token}`,
                },
                "referrer": "https://l-edu.vercel.app/",
                "method": "GET"
              }).then(res => res.json()).then(data => {
                setData(data.data);
              });
        }
    }, [user]);

    return (
        <View>
            <Text>{data.fullName}</Text>
            <Text>{data.email}</Text>
        </View>
    )
}