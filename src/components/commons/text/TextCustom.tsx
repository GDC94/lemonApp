import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";
import { StyledText } from "./TextCustom.styles";

interface TextProps {
  textStyles?: StyleProp<TextStyle>;
  children: ReactNode;
}

const TextCustom = ({ children, textStyles }: TextProps) => {
  return <StyledText style={textStyles}>{children}</StyledText>;
};

export default TextCustom;
