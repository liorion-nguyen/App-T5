/*
Chạy 1 dự án:
B1: Mở dự án lên VS code
B2: Mở máy ảo lên
B3: Mở terminal: npm start
B4: Đợi starting xong thì nhấn phím a.
*/
import { NavigationContainer } from "@react-navigation/native";
import AppTest from "./src/components/AppTest";
import { AuthProvider } from "./src/contexts/AuthenticationContext";
import Home from "./src/components/home/Home";
import StackNavigator from "./src/navigation/StackNavigator";
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}