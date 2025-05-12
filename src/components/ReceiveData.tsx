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
                  "accept": "application/json, text/plain, */*",
                  "accept-language": "en-US,en;q=0.9,vi;q=0.8",
                  "authorization": `Bearer ${user.data.access_token}`,
                  "cache-control": "no-cache",
                  "pragma": "no-cache",
                  "priority": "u=1, i",
                  "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
                  "sec-ch-ua-mobile": "?0",
                  "sec-ch-ua-platform": "\"macOS\"",
                  "sec-fetch-dest": "empty",
                  "sec-fetch-mode": "cors",
                  "sec-fetch-site": "cross-site"
                },
                "referrer": "https://l-edu.vercel.app/",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": null,
                "method": "GET",
                "mode": "cors",
                "credentials": "include"
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