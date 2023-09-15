export type RootStackParamList = {
  Home: undefined;
  MatchDetails: {
    teams: number[];
    hour_match: string;
    leagueWithSerie: string
  };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}