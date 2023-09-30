import { Text, View, StyleSheet } from "react-native";
import RoundedButton from "../../components/RoundedButton";
import { useState } from "react";
import CountDown from "../../components/CountDown";
import {ProgressBar} from 'react-native-paper'

const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);
  //const [progress, setProgress] = useState(1);

//   const onProgress = (progress) =>{
//     setProgress(progress);
//   }

  return (
    <View style={css.container}>
      <View style={css.countDown}>
        <CountDown minutes={1} isPaused={!isStarted} />
      </View>
      <View style={css.titleContainer}>
        <Text style={css.title}>Focusing on:</Text>
        <Text style={css.task}>{focusSubject}</Text>
      </View>
      <View style={css.progressContainer}>
        {/* <ProgressBar progress={progress} color="#45E5A8" style={{height:0.9}}/> */}
      </View>
      <View style={css.btnContainer}>
        {isStarted ? (
          <RoundedButton
            title={"PAUSE"}
            onPress={() => {
              setIsStarted(false);
            }}
          />
        ) : (
          <RoundedButton
            title={"START"}
            onPress={() => {
              setIsStarted(true);
            }}
          />
        )}
      </View>
    </View>
  );
};

const css = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  task: {
    color: "white",
    fontWeight: "bold",
    letterSpacing: 1.5,
    textAlign: "center",
  },
  countDown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  progressContainer:{
    marginTop:20,
  }
});

export default Timer;
