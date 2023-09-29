import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import RoundedButton from "../../components/RoundedButton";

const Focus = () => {
  return (
    <View style={css.container}>
      <View style={css.titleContainer}>
        <Text style={css.title}>What would you like to focus on?</Text>
        <View style={css.inputContainer}>
          <TextInput style={{ flex: 1 , marginRight:10}} />
          <RoundedButton title={"+"} size={60} />
        </View>
      </View>
    </View>
  );
};

const css = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  inputContainer: {
    alignContent: "center",
    justifyContent: "center",
    paddingTop: 20,
    flexDirection: "row",
  },
});
export default Focus;
