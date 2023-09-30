import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-native-paper";

const minutesToMillisec = (min) => {
  return min * 60 * 1000;
};

const formatTime = (time) => (time < 10 ? `0${time}` : time);

const CountDown = ({ minutes, isPaused }) => {
  const interval = React.useRef(null);
  const [millisec, setMillisec] = useState(minutesToMillisec(minutes));
  const [progress,setProgress] = useState(1);
  const minute = Math.floor(millisec / 1000 / 60) % 60;
  const seconds = Math.floor(millisec / 1000) % 60;
  
const countDown = () => {
  setMillisec((time) => {
    if (time === 0) {
      return time;
    }
    const timeLeft = time - 1000;
    let newProgress = Math.min(1, Math.max(0, timeLeft / minutesToMillisec(minutes)));
    setProgress(newProgress);
    return timeLeft;
  });
};


  useEffect(() => {
    if (isPaused) {
      if (interval.current) {
        clearInterval(interval.current);
      }
      return;
    }
    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused]);

  return (
    <View>
        <Text style={css.text}>
          {formatTime(minute)}:{formatTime(seconds)}
        </Text>
        <ProgressBar progress={progress}/>
    </View>
  );
};

const css = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 80,
    padding: 20,
    backgroundColor: "rgba(155, 255, 255, 0.4)",
  },
});

export default CountDown;
