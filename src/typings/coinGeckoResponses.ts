export interface Coin {
  id: string;
  symbol: string;
  name: string;
}
[];

export interface CoinDetail {
  id: ID;
  symbol: string;
  name: string;
  assetPlatformID: null;
  platforms: Platforms;
  detailPlatforms: DetailPlatforms;
  blockTimeInMinutes: number;
  hashingAlgorithm: string;
  categories: string[];
  publicNotice: null;
  additionalNotices: any[];
  localization: Tion;
  description: Tion;
  links: CoinDetailLinks;
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  countryOrigin: string;
  genesisDate: Date;
  sentimentVotesUpPercentage: number;
  sentimentVotesDownPercentage: number;
  icoData: IcoData;
  watchlistPortfolioUsers: number;
  marketCapRank: number;
  coingeckoRank: number;
  coingeckoScore: number;
  developerScore: number;
  communityScore: number;
  liquidityScore: number;
  publicInterestScore: number;
  marketData: MarketData;
  communityData: CommunityData;
  developerData: DeveloperData;
  publicInterestStats: PublicInterestStats;
  statusUpdates: any[];
  lastUpdated: Date;
  tickers: Ticker[];
}

export interface CommunityData {
  facebookLikes: null;
  twitterFollowers: number;
  redditAveragePosts48H: number;
  redditAverageComments48H: number;
  redditSubscribers: number;
  redditAccountsActive48H: number;
  telegramChannelUserCount: null;
}

export interface Tion {
  en: string;
  de: string;
  es: string;
  fr: string;
  it: string;
  pl: string;
  ro: string;
  hu: string;
  nl: string;
  pt: string;
  sv: string;
  vi: string;
  tr: string;
  ru: string;
  ja: string;
  zh: string;
  zhTw: string;
  ko: string;
  ar: string;
  th: string;
  id: string;
  cs: string;
  da: string;
  el: string;
  hi: string;
  no: string;
  sk: string;
  uk: string;
  he: string;
  fi: string;
  bg: string;
  hr: string;
  lt: string;
  sl: string;
}

export interface DetailPlatforms {
  empty: Empty;
}

export interface Empty {
  decimalPlace: null;
  contractAddress: string;
}

export interface DeveloperData {
  forks: number;
  stars: number;
  subscribers: number;
  totalIssues: number;
  closedIssues: number;
  pullRequestsMerged: number;
  pullRequestContributors: number;
  codeAdditionsDeletions4_Weeks: CodeAdditionsDeletions4_Weeks;
  commitCount4_Weeks: number;
  last4_WeeksCommitActivitySeries: number[];
}

export interface CodeAdditionsDeletions4_Weeks {
  additions: number;
  deletions: number;
}

export interface IcoData {
  icoStartDate: Date;
  icoEndDate: Date;
  shortDesc: string;
  description: null;
  links: IcoDataLinks;
  softcapCurrency: string;
  hardcapCurrency: string;
  totalRaisedCurrency: string;
  softcapAmount: null;
  hardcapAmount: null;
  totalRaised: null;
  quotePreSaleCurrency: string;
  basePreSaleAmount: null;
  quotePreSaleAmount: null;
  quotePublicSaleCurrency: string;
  basePublicSaleAmount: number;
  quotePublicSaleAmount: number;
  acceptingCurrencies: string;
  countryOrigin: string;
  preSaleStartDate: null;
  preSaleEndDate: null;
  whitelistURL: string;
  whitelistStartDate: null;
  whitelistEndDate: null;
  bountyDetailURL: string;
  amountForSale: null;
  kycRequired: boolean;
  whitelistAvailable: null;
  preSaleAvailable: null;
  preSaleEnded: boolean;
}

export interface IcoDataLinks {}

export enum ID {
  Ethereum = "ethereum",
  Litecoin = "litecoin",
}


export interface CoinDetailLinks {
  homepage: string[];
  blockchainSite: string[];
  officialForumURL: string[];
  chatURL: string[];
  announcementURL: string[];
  twitterScreenName: ID;
  facebookUsername: string;
  bitcointalkThreadIdentifier: null;
  telegramChannelIdentifier: string;
  subredditURL: string;
  reposURL: ReposURL;
}

export interface ReposURL {
  github: string[];
  bitbucket: any[];
}

export interface MarketData {
  currentPrice: { [key: string]: number };
  totalValueLocked: null;
  mcapToTvlRatio: null;
  fdvToTvlRatio: null;
  roi: Roi;
  ath: { [key: string]: number };
  athChangePercentage: { [key: string]: number };
  athDate: { [key: string]: Date };
  atl: { [key: string]: number };
  atlChangePercentage: { [key: string]: number };
  atlDate: { [key: string]: Date };
  marketCap: { [key: string]: number };
  marketCapRank: number;
  fullyDilutedValuation: { [key: string]: number };
  totalVolume: { [key: string]: number };
  high24H: { [key: string]: number };
  low24H: { [key: string]: number };
  priceChange24H: number;
  priceChangePercentage24H: number;
  priceChangePercentage7D: number;
  priceChangePercentage14D: number;
  priceChangePercentage30D: number;
  priceChangePercentage60D: number;
  priceChangePercentage200D: number;
  priceChangePercentage1Y: number;
  marketCapChange24H: number;
  marketCapChangePercentage24H: number;
  priceChange24HInCurrency: { [key: string]: number };
  priceChangePercentage1HInCurrency: { [key: string]: number };
  priceChangePercentage24HInCurrency: { [key: string]: number };
  priceChangePercentage7DInCurrency: { [key: string]: number };
  priceChangePercentage14DInCurrency: { [key: string]: number };
  priceChangePercentage30DInCurrency: { [key: string]: number };
  priceChangePercentage60DInCurrency: { [key: string]: number };
  priceChangePercentage200DInCurrency: { [key: string]: number };
  priceChangePercentage1YInCurrency: { [key: string]: number };
  marketCapChange24HInCurrency: { [key: string]: number };
  marketCapChangePercentage24HInCurrency: { [key: string]: number };
  totalSupply: number;
  maxSupply: null;
  circulatingSupply: number;
  lastUpdated: Date;
}

export interface Roi {
  times: number;
  currency: string;
  percentage: number;
}

export interface Platforms {
  empty: string;
}

export interface PublicInterestStats {
  alexaRank: number;
  bingMatches: null;
}

export interface Ticker {
  base: Base;
  target: string;
  market: Market;
  last: number;
  volume: number;
  convertedLast: { [key: string]: number };
  convertedVolume: { [key: string]: number };
  trustScore: TrustScore;
  bidAskSpreadPercentage: number;
  timestamp: Date;
  lastTradedAt: Date;
  lastFetchAt: Date;
  isAnomaly: boolean;
  isStale: boolean;
  tradeURL: null | string;
  tokenInfoURL: null;
  coinID: ID;
  targetCoinID?: TargetCoinID;
}

export enum Base {
  Eth = "ETH",
  Ltc = "LTC",
}

export interface Market {
  name: string;
  identifier: string;
  hasTradingIncentive: boolean;
}

export enum TargetCoinID {
  BinanceUsd = "binance-usd",
  Bitcoin = "bitcoin",
  Dai = "dai",
  Ethereum = "ethereum",
  Tether = "tether",
  TrueUsd = "true-usd",
  UsdCoin = "usd-coin",
}

export enum TrustScore {
  Green = "green",
}
