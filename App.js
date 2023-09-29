import { StyleSheet, Text, View } from "react-native";
import Focus from "./src/features/Focus/focus";
import { useState } from "react";
import Timer from "./src/features/Focus/Timer/timer";

const App = () => {
  const [focusSubject, setFocusSubject] = useState(null);
  return (
    <View style={styles.container}>
      {focusSubject ? <Timer focusSubject={focusSubject} /> : <Focus addSubject={setFocusSubject} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#255c7a",
  },
});

export default App;
