import { FunctionComponent } from "react";
import { ImageSourcePropType, View } from "react-native";
import { colors } from "../commons/colors";
import TextCustom from "../commons/text/TextCustom";
import ButtonCustom from "../commons/buttonCustom/buttonCustom";

import {
  CardBackground,
  CardRow,
  CardRowMiddle,
  CardTouchable,
  CardView,
  Logo,
  LogoArg,
  WrapperLogo,
} from "./cardItem.styles";

export interface CardItemProps {
  id?: number;
  title?: string;
  imageBackgorund?: ImageSourcePropType;
  logo?: ImageSourcePropType;
  logoArg?: ImageSourcePropType;
  logoCoin?: ImageSourcePropType;
  balance?: string;
  buttonTextOne?: string;
  buttonTextTwo?: string;
  buttonTextThree?: string;
  isWallet?: boolean;
  balanceCoin?: string;
}

const CardItem: FunctionComponent<CardItemProps> = ({
  title,
  logo,
  imageBackgorund,
  logoArg,
  balance,
  buttonTextOne,
  buttonTextTwo,
  buttonTextThree,
  isWallet,
  logoCoin,
  balanceCoin,
}) => {
  return (
    <CardBackground source={imageBackgorund}>
      <CardTouchable underlayColor={colors.green}>
        <CardView>
          <CardRow>
            <View style={{ flex: 3 }}>
              <TextCustom
                textStyles={{
                  color: "#a7a7a7",
                  fontSize: 20,
                  fontWeight: "600",
                }}
              >
                {title}
              </TextCustom>
            </View>
            <WrapperLogo>
              <Logo source={logo} />
            </WrapperLogo>
          </CardRow>
          <CardRowMiddle>
            <LogoArg source={logoArg} />
            <View
              style={{
                flex: 3,
                flexDirection: "row",
                alignItems: "baseline",
                gap: 8,
              }}
            >
              <TextCustom
                textStyles={{
                  color: "#ffffff",
                  fontSize: 32,
                  fontWeight: "700",
                }}
              >
                {balance}
              </TextCustom>
              {balance && (
                <TextCustom
                  textStyles={{
                    color: "#a7a7a7",
                    fontSize: 20,
                    fontWeight: "700",
                  }}
                >
                  ARS
                </TextCustom>
              )}
            </View>
          </CardRowMiddle>

          <CardRow>
            {buttonTextOne && buttonTextTwo && buttonTextThree && (
              <>
                <ButtonCustom
                  textStyles={{
                    color: "#e8e8e8",
                    fontSize: 17,
                    fontWeight: "700",
                  }}
                  btnStyles={{
                    width: 100,
                    borderRadius: 12,
                    backgroundColor: "#273039",
                  }}
                >
                  {buttonTextOne}
                </ButtonCustom>
                <ButtonCustom
                  textStyles={{
                    color: "#e8e8e8",
                    fontSize: 17,
                    fontWeight: "700",
                  }}
                  btnStyles={{
                    width: 100,
                    borderRadius: 12,
                    backgroundColor: "#273039",
                  }}
                >
                  {buttonTextTwo}
                </ButtonCustom>

                <ButtonCustom
                  textStyles={{
                    color: "#e8e8e8",
                    fontSize: 17,
                    fontWeight: "700",
                  }}
                  btnStyles={{
                    width: 100,
                    borderRadius: 12,
                    backgroundColor: "#273039",
                  }}
                >
                  {buttonTextThree}
                </ButtonCustom>
              </>
            )}
            {isWallet && (
              <>
                <CardRowMiddle>
                  <LogoArg source={logoCoin} />
                  <View
                    style={{
                      flex: 3,
                      flexDirection: "row",
                      alignItems: "baseline",
                      gap: 8,
                    }}
                  >
                    <TextCustom
                      textStyles={{
                        color: "#ffffff",
                        fontSize: 32,
                        fontWeight: "700",
                      }}
                    >
                      {balanceCoin}
                    </TextCustom>
                    <TextCustom
                      textStyles={{
                        color: "#a7a7a7",
                        fontSize: 20,
                        fontWeight: "700",
                      }}
                    >
                      USDT
                    </TextCustom>
                    <TextCustom
                      textStyles={{
                        color: "#ff0000",
                        fontSize: 14,
                        fontWeight: "700",
                      }}
                    >
                      -0.5%
                    </TextCustom>
                  </View>
                </CardRowMiddle>
              </>
            )}
          </CardRow>
        </CardView>
      </CardTouchable>
    </CardBackground>
  );
};

export default CardItem;
