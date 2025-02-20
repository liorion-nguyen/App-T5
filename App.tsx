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
  const n = 4;
  if (n % 2 == 0) {
    console.log(`${n} là số chẵn`);
  }
  else {
    console.log(`${n} là số lẻ`);
  }

  (n % 2 == 0) ? console.log(`${n} là số chẵn`) : console.log(`${n} là số lẻ`);

  switch (n % 2) {
    case 0:
      console.log(`${n} là số chẵn`);
      break;
    case 1: 
      console.log(`${n} là số lẻ`);
      break;
    default:
      console.log(`${n} không phải số nguyên`);
  }
  // Có biến season có giá trị là: spring, summer, autumn, winter. 
  // Sử dụng switch case để in ra mùa đấy có thời tiết như thế nào với giá trị của biến season.
  // Mùa đấy không tồn tại.
  let season = "dadasdsadas";
  switch (season) {
    case "spring":
      console.log("Thời tiết mùa xuân là ấm áp");
      break;
    case "summer":
      console.log("Thời tiết mùa hè là nóng");
      break;
    case "autumn":
      console.log("Thời tiết mùa thu là mát mẻ");
      break;
    case "winter":
      console.log("Thời tiết mùa đông là lạnh");
      break;
    default:
      console.log("Mùa đấy không tồn tại");
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.containerView}>
        <View style={styles.containerView1}>
          {
            (n % 2 == 0) ? <Text style={styles.title}>{`${n} là số chẵn`}</Text> : 
            <Text style={styles.title}>{`${n} là số chẵn`}</Text>
          }
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