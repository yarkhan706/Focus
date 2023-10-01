import { StyleSheet, Text, View } from "react-native";
import Focus from "./src/features/Focus/focus";
import { useState } from "react";
import Timer from "./src/features/Timer/timer";
import FocusHistory from "./src/features/Focus/focusHistory";

const STATUS = {
  COMPLETE: 1,
  CANCELLED: 2,
};

const App = () => {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  const clear = () => {
    setFocusHistory([]);
  }
  const addFocusHistorySubjectWithState = (subject, status) => {
    setFocusHistory([...focusHistory, { subject, status }]);
  };

  console.log(focusHistory);

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            addFocusHistorySubjectWithState(focusSubject, STATUS.COMPLETE);
            setFocusSubject(null);
          }}
          onPressCancel={() => {
            addFocusHistorySubjectWithState(focusSubject, STATUS.CANCELLED);
            setFocusSubject(null);
          }}
        />
      ) : (
        <>
          <Focus addSubject={setFocusSubject} />
          <FocusHistory  focusHistory={focusHistory} onClear={clear}/>
        </>
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
