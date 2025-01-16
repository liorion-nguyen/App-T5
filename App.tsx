import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Touchable,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.layoutRow}>
        <Text>Item 1</Text>
        <Text>Item 2</Text>
        <Text>Item 3</Text>
        <Text>Item 4</Text>
      </View>
      <View style={styles.layoutColumn}>
        <Text>Item 1</Text>
        <Text>Item 2</Text>
        <Text>Item 3</Text>
        <Text>Item 4</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Căn chỉnh các thành con theo trục y
    alignItems: "center", // // Căn chỉnh các thành con theo trục x
  },
  layoutRow: {
    backgroundColor: "red",
    flex: 1,
    width: '100%',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  layoutColumn: {
    backgroundColor: "blue",
    flex: 1,
    width: '100%',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
})