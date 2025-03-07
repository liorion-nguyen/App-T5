/*
Chạy 1 dự án:
B1: Mở dự án lên VS code
B2: Mở máy ảo lên
B3: Mở terminal: npm start
B4: Đợi starting xong thì nhấn phím a.
*/

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView
} from "react-native";
import Login from "./src/screens/Login";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Login />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Căn chỉnh các thành con theo trục y
    alignItems: "center", // // Căn chỉnh các thành con theo trục x
  }
})