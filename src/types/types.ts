export interface MedalWinner {
  disciplineCode: string;
  eventCode: string;
  eventCategory: string;
  eventDescription: string;
  eventOrder: number;
  medalType: string;
  official: boolean;
  competitorCode: string;
  competitorType: string;
  competitorOrder: number;
  competitorDisplayName: string;
  date: string;
  extraData: Record<string, unknown>;
}

export interface Discipline {
  code: string;
  name: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number;
  medalWinners: MedalWinner[];
}

export interface MedalNumbers {
  type: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number;
}

export interface CountryData {
  organisation: string;
  description: string;
  disciplines: Discipline[];
  medalsNumber: MedalNumbers[];
  rank: number;
  protocolOrder: number;
}

export interface MedalStandings {
  medalStandings: {
    medalsTable: CountryData[];
  };
}
