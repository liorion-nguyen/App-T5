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
  LogBox,
} from "react-native";

export default function App() {
  // code javacript
  const name = "Nguyen Van A";
  let age = 20;
  const isMale = true;
  const email = "a@gmail.com";
  // Tạo biến để lưu trữ thông tin của bản thân: tên, tuổi, giới tính, email.

  console.log("hello");
  console.log(name);
  console.log(1 + 2);
  console.log(1 - (2 /2));
  console.log(1 * 2);
  console.log(1 / 2);
  console.log(5 >= 3);

  // and: &&
  // or: ||
  // not: !
  console.log(true || true);
  console.log(false || true);
  console.log(false || false);
  console.log(true && true);
  console.log(true && false);
  console.log(!true);
  
  console.log(Math.PI);
  console.log(Math.max(3, 12, 6, 9));
  console.log(Math.sqrt(16));
  console.log(Math.pow(2, 3));
  console.log(Math.round(Math.random() * 100)); // Math.random chỉ tạo ra từ 0 - 1

  const web = "Kite";
  const title = "Hello ," + name + "da den ";
  const title2 = `Hello ${name} da den ${web}`;
  console.log(title2);
  
  


  


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.containerView}>
        <View style={styles.containerView1}>
          <Text style={styles.title}>Login</Text>
          <View style={styles.groupInput}>
            <TextInput placeholder="Enter your name?" style={styles.input} />
            <TextInput placeholder="Enter your name?" style={styles.input} />
            <TextInput placeholder="Enter your name?" style={styles.input} />
          </View>
          <TouchableOpacity style={styles.buttonTest}>
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
  box: {
    width: 500,
    height: 100,
    backgroundColor: "red",
    margin: 10
  },
  containerView: {
    width: "100%", // Chiều rộng thành phần
    height: 100, // Chiều cao thành phần
  },
  groupInput: {
    flexDirection: "row", // Xếp các thành phần theo chiều dọc
    alignItems: "center", // Căn chỉnh các thành phần theo trục x
    justifyContent: "space-between", // Căn chỉnh các thành phần theo trục y
    width: "100%", // Chiều rộng thành phần
    backgroundColor: "blue", // Màu nền
    height: 300
  },
  title: {
    fontSize: 40, // Kích cỡ chữ
    fontWeight: "bold", // Kiểu in đậm
    color: "white", // Màu chữ
    textAlign: "center", // Căn chỉnh text theo chiều ngang
    backgroundColor: "black", // Màu nền
    borderWidth: 5, // Chiều rộng đường viền
    borderColor: "yellow", // Màu đường viền
    padding: 50, // Tạo khoảng cách giữa content và border
    marginBottom: 20 // Khoảng cách giữa các thành phần
  },
  input: {
    backgroundColor: "#33CC66", // Màu sắc phông nền
    width: "80%", // Chiều rộng thành phần
    padding: 10, // Tạo khoảng cách giữa content và border
    borderRadius: 10, // Bo 4 góc
    borderWidth: 1, // Chiều rộng đường viền
    borderColor: "black" // Màu đường viền
  },
  containerView1: {
    flexDirection: "column",
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
  },
  image: {
    width: 100,
    height: 100
  },
  buttonTest: {
    backgroundColor: "blue",
    padding: 10
  }
})