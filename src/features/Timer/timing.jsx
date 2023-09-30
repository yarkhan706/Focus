import { View, StyleSheet, Text } from "react-native";
import RoundedButton from "../../components/RoundedButton";

const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={css.timingbtn}>
        <RoundedButton
          title={"10"}
          size={75}
          onPress={() => onChangeTime(10)}
        />
      </View>
      <View style={css.timingbtn}>
        <RoundedButton
          title={"15"}
          size={75}
          onPress={() => onChangeTime(15)}
        />
      </View>
      <View style={css.timingbtn}>
        <RoundedButton
          title={"20"}
          size={75}
          onPress={() => onChangeTime(20)}
        />
      </View>
    </>
  );
};

const css = StyleSheet.create({
  timingbtn: {
    flex: 1,
    justifyContent: "center",
    alignItems : "center",
  },
});

export default Timing;
