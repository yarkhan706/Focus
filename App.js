import { StyleSheet, Text, View } from "react-native";
import Focus from "./src/features/Focus/focus";

const App = () => {
  return (
    <View style={styles.container}>
      <Focus />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#255c7a",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
