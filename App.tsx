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
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Touchable,
  ScrollView,
  SafeAreaView,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.containerView}>
        <View style={styles.containerView1}>
          <Text style={styles.title}>Login</Text>
          <TextInput placeholder="Enter your name?" style={styles.input}/>
          <TextInput placeholder="Enter your name?"/>
          <TextInput placeholder="Enter your name?"/>
          <TouchableOpacity >
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerView2}></View>
        <View style={styles.containerView3}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Căn chỉnh các thành con theo trục y
    alignItems: "center", // // Căn chỉnh các thành con theo trục x
  },
  containerView: {
    width: "100%",
    height: 100,
  },
  title: {
    fontSize: 40, // Kích cỡ chữ
    fontWeight: 600, // Kiểu in đậm
    color: "white", // Màu chữ
    textAlign: "center" // Căn chỉnh text theo chiều ngang
  },
  input: {
    backgroundColor: "white", // Màu sắc phông nền
    width: "80%", // Chiều rộng thành phần
    padding: 10, // Tạo khoảng cách giữa content và border
    borderRadius: 10, // Bo 4 góc
    borderWidth: 1, // Chiều rộng đường viền
    borderColor: "black" // Màu đường viền
  },
  containerView1: {
    backgroundColor: "red",
    width: "100%",
    height: 500
  },
  containerView2: {
    backgroundColor: "green",
    width: "100%",
    height: 500
  },
  containerView3: {
    backgroundColor: "pink",
    width: "100%",
    height: 500
  }
})