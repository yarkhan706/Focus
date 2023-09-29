import { Text, View, StyleSheet } from "react-native";
import RoundedButton from "../../../components/RoundedButton";

const Timer = ({ focusSubject }) => {
    let date = new Date();
    const onPress25min = () =>{
        date.setMinutes(25);
        console.log(date);
    }
  return (
    <View style={css.container}>
      <View style={css.titleContainer}>
        <Text style={css.title}>Focusing on:</Text>
        <Text style={css.task}>{focusSubject}</Text>
      </View>
      <View style={css.timerContainer}>
        <Text style={css.title}>00:00</Text>
        <RoundedButton title={"25min"} size={80} onPress={onPress25min}/>
        <RoundedButton title={"15min"} size={80} />
        <RoundedButton title={"5min"} size={80} />
      </View>
    </View>
  );
};

const css = StyleSheet.create({
  container: {
    marginTop: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 21,
    color: "white",
  },
  task: {
    color: "white",
    fontWeight: "bold",
    letterSpacing: 1.5,
  },
  timerContainer: {
    width: 300,
    height:600,
    backgroundColor: "rgba(255,255,255,0.3)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Timer;
