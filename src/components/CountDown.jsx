import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

const minutesToMillisec = (min) => {
  return min * 60 * 1000;
};

const formatTime = (time) => (time < 10 ? `0${time}` : time);

const CountDown = ({ minutes, isPaused, onProgress,onEnd }) => {
  const interval = React.useRef(null);
  const [millisec, setMillisec] = useState(minutesToMillisec(minutes));
  const minute = Math.floor(millisec / 1000 / 60) % 60;
  const seconds = Math.floor(millisec / 1000) % 60;

  const countDown = () => {
    setMillisec((time) => {
      if (time === 0) {
        clearInterval(interval.current);
        onEnd();
        return time;
      }
      const timeLeft = time - 1000;
      onProgress(timeLeft / minutesToMillisec(minutes));
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

  useEffect(() => {
    setMillisec(minutesToMillisec(minutes));
  }, [minutes]);

  return (
    <View>
      <Text style={css.text}>
        {formatTime(minute)}:{formatTime(seconds)}
      </Text>
    </View>
  );
};

const css = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 90,
    padding: 30,
    backgroundColor: "rgba(155, 250, 255, 0.1)",
    textAlign: "center",
  },
});

export default CountDown;
