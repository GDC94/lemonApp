import { FunctionComponent, ReactNode } from "react";
import { GestureResponderEvent, ViewStyle } from "react-native";
import TextCustom from "../text/TextCustom";
import { StyleProp, TextStyle } from "react-native";
import { StyledButton } from "./button.styles";

interface ButtonCustomProps {
  children?: ReactNode;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  btnStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
}

const ButtonCustom: FunctionComponent<ButtonCustomProps> = (props) => {
  return (
    <StyledButton onPress={props.onPress} style={props.btnStyles}>
      <TextCustom textStyles={props.textStyles}>{props.children}</TextCustom>
    </StyledButton>
  );
};

export default ButtonCustom;
