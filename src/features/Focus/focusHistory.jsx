import { StyleSheet, View, Text, SafeAreaView, FlatList } from "react-native";
import RoundedButton from "../../components/RoundedButton";

const HistoryItem = ({ item, index }) => {
  return <Text style={styles.historyItem(item.status)}>{item.subject}</Text>;
};
const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}>HERE WILL BE FOCUS SUBJECT HISTORY</Text>
            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1, alignItems: "center" }}
              data={focusHistory}
              renderItem={HistoryItem}
            />
            <RoundedButton title={"Clear"} size={80} onPress={clearHistory} />
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? "red" : "#45E5A8",
    fontSize: 15,
  }),
  title: {
    color: "white",
    fontSize: 15,
  },
});

export default FocusHistory;
