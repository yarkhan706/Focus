import { StyleSheet, Text, TouchableOpacity } from "react-native";

const RoundedButton = ({ style={},textStyle={},size = 125 , ...props}) => {
  return (
    <TouchableOpacity style={[css(size).radius, style]}>
        <Text style={[css(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  )
};

const css = (size) => StyleSheet.create({
    radius:{
        borderRadius: size / 2,
        height: size,
        width: size,
        alignItems: "center",
        justifyContent : "center",
        borderColor: "white",
        borderWidth:2,
    },
    text:{
        color: "white",
        fontSize: 20,
    }
})

export default RoundedButton;
