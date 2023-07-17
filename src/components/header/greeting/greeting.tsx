import React, { FunctionComponent } from "react";
import TextCustom from "../../commons/text/TextCustom";
import { colors } from "../../commons/colors";
import { GreetingContainer } from "./greeting.styles";

interface GreetingProps {
  mainText: string;
  subText: string;
}

const Greeting: FunctionComponent<GreetingProps> = ({ mainText, subText }) => {
  return (
    <GreetingContainer>
      <TextCustom
        textStyles={{
          color: colors.white,
          fontSize: 20,
          fontWeight: "700",
          marginBottom: 2,
        }}
      >
        {mainText}
      </TextCustom>
      <TextCustom
        textStyles={{ color: colors.white, fontSize: 17, fontWeight: "500" }}
      >
        {subText}
      </TextCustom>
    </GreetingContainer>
  );
};

export default Greeting;
