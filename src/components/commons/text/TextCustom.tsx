import { FunctionComponent, ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";
import { StyledText } from "./TextCustom.styles";

interface TextProps {
  textStyles?: StyleProp<TextStyle>;
  children: ReactNode;
}

const TextCustom: FunctionComponent<TextProps> = ({ children, textStyles }) => {
  return <StyledText style={textStyles}>{children}</StyledText>;
};

export default TextCustom;
