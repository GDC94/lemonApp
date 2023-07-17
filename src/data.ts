import { CardItemProps } from "./components/cardItem/cardItem";
import { Eye, Lemon, LemonNation, LogoArg, openSea, usdtIcon } from "./assets";

export const data: CardItemProps[] = [
  {
    id: 1,
    title: "Balance total",
    logo: Eye,
    logoArg: LogoArg,
    balance: "10.200,60",
    buttonTextOne: "Depositar",
    buttonTextTwo: "Enviar",
    buttonTextThree: "Cambiar",
  },
  {
    id: 2,
    logo: openSea,
    title: "",
    imageBackgorund: LemonNation,
  },
  {
    id: 3,
    title: "Tu billetera",
    logo: Lemon,
    logoArg: LogoArg,
    balance: "0.00",
    isWallet: true,
    logoCoin: usdtIcon,
    balanceCoin: "39,48",
  },
];
