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
  function handleIntro() {
    console.log("Nguyen Van B");
    console.log("18 tuoi");
    console.log("Ha Noi");
  }
  const handleIntro1 = () => {
    console.log("Nguyen Van B");
    console.log("18 tuoi");
    console.log("Ha Noi");
  };
  handleIntro1();

  const functionName = () => {

  }

  function handleSum(a: number, b: number, c: number) {
    console.log(`Gia tri tham so a la: ${a}`);
    console.log(`Gia tri tham so b la: ${b}`);
    console.log(`Gia tri tham so c la: ${c}`);
    return a + b + c;
  }
  const handleSum1 = (a: number, b: number, c: number) => {
    console.log(`Gia tri tham so a la: ${a}`);
    console.log(`Gia tri tham so b la: ${b}`);
    console.log(`Gia tri tham so c la: ${c}`);
    return a + b + c;
  };
  console.log(handleSum1(2, 3, 5));
  
  const sum = handleSum(2, 5, 8);
  
  // Tạo 1 hàm giới thiệu 1 bộ phim bất kỳ(tên, tác gỉa, thể loaị,...). Gọi đến hàm đấy để xem kết quả.
  // Xây dựng 1 hàm tính diện tích của hình chữ nhật có nhận vào 2 tham số là cd, cr.
  // Dùng arrow function để xây dựng lại 2 hàm bên trên(đặt tên hàm thêm 1). Gọi đến nó để xem kết quả.
  // Gọi đến hàm đó để xem kết quả.
  return (
    <SafeAreaView style={styles.container}>
      {
        (1 == 1) ? <Text>Đúng</Text> : <Text>Sai</Text>
      }
      <ScrollView style={styles.containerView}>
        <View style={styles.containerView1}>
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