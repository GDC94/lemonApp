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

const ButtonCustom: FunctionComponent<ButtonCustomProps> = ({
  children,
  onPress,
  btnStyles,
  textStyles,
}) => {
  return (
    <StyledButton onPress={onPress} style={btnStyles}>
      <TextCustom textStyles={textStyles}>{children}</TextCustom>
    </StyledButton>
  );
};

export default ButtonCustom;
