import React, { memo } from 'react'
import { Container, ContainerHour, MatchHour, League, ImageLeague, NameLeague } from './styles'
import { Teams } from '../Teams'

interface MatchCardProps {
  onPress: () => void;
  hour_match: string;
  teams: {
    id: number;
    name: string;
    avatar: string;
  }[],
  league: {
    name: string;
    avatar: string;
  };
  serie: {
    name: string;
  }
}

export const MatchCard = memo(function MatchCard({ onPress, hour_match, teams, league, serie }: MatchCardProps) {
  return (
    <Container onPress={onPress}>
      <ContainerHour>
        <MatchHour>{hour_match}</MatchHour>
      </ContainerHour>
      <Teams teams={teams} />
      <League>
        {league?.avatar && <ImageLeague source={{ uri: league.avatar }} />}
        <NameLeague>{`${league.name}  ${serie.name ? `+ ${serie.name}` : ''}`}</NameLeague>
      </League>
    </Container>
  )
})