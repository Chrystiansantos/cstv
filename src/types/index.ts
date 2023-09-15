export interface Opponent {
  id: number;
  name: string;
  image_url: string
}

export interface Match {
  id: number;
  status: 'finished' | 'not_played' | 'not_started' | 'running',
  begin_at: string;
  opponents: {
    opponent: Opponent;
  }[];
  league: {
    image_url: string;
    name: string,
  }
  serie: {
    name: string
  }
}

export interface ItemData {
  id: number;
  hour_match: string;
  teams: {
    id: number;
    name: string;
    avatar: string;
  }[];
  league: {
    name: string;
    avatar: string;
  };
  serie: {
    name: string
  }
}

export interface Player {
  nickname: string;
  name: string;
  avatar: string;
}

export interface Team {
  id: string;
  name: string;
  avatar: string;
  players: Player[]
}


