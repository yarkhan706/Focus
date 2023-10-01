import { StyleSheet, Text, View } from "react-native";
import Focus from "./src/features/Focus/focus";
import { useEffect, useState } from "react";
import Timer from "./src/features/Timer/timer";

const App = () => {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  useEffect(() => {
    if(focusSubject){
      setFocusHistory([...focusHistory, focusSubject]);
    }
  }, [focusSubject]);

  console.log(...focusHistory);

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => setFocusSubject(null)}
          onPressCancel={() => setFocusSubject(null)}
        />
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#255c7a",
    paddingTop: 40,
  },
});

export default App;
