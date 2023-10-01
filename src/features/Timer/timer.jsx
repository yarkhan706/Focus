import { Text, View, StyleSheet, Vibration, Platform } from "react-native";
import RoundedButton from "../../components/RoundedButton";
import { useState } from "react";
import CountDown from "../../components/CountDown";
import { ProgressBar } from "react-native-paper";
import Timing from "./timing";
import { useKeepAwake } from "expo-keep-awake";

const DEFAULT_TIME= 0.1;

const Timer = ({ focusSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(DEFAULT_TIME);

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const onEnd = () => {
    vibrate();
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd();
  };

  const vibrate = () => {
    if (Platform.OS === "ios") {
      const interval = setInterval(() => {
        Vibration.vibrate();
      }, 1000);
      setTimeout(() => clearInterval(interval), 10000);
    } else {
      Vibration.vibrate(10000);
    }
  };

  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };

  return (
    <View style={css.container}>
      <View style={css.countDown}>
        <CountDown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgress}
          onEnd={onEnd}
        />
      </View>
      <View style={css.titleContainer}>
        <Text style={css.title}>Focusing on:</Text>
        <Text style={css.task}>{focusSubject}</Text>
      </View>
      <View style={css.progressContainer}>
        <ProgressBar
          progress={progress}
          color="#45E5A8"
          style={{ height: 0.9 }}
        />
      </View>
      <View style={css.btnContainer}>
        <View style={css.timeBtn}>
          <Timing onChangeTime={changeTime} />
        </View>
        <View>
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
    flex: 0.6,
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginBottom: 20,
  },
  progressContainer: {
    marginTop: 40,
  },
  timeBtn: {
    flex: 0.6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Timer;
