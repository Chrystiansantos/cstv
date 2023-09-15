import React, { useEffect } from 'react'
import { Feather } from '@expo/vector-icons';
import { BackButton, Container, ContainerTitle, Header, HourMatch, Players, Title } from './styles';
import { Teams } from '../../components/Teams';
import { useNavigation } from '@react-navigation/native';
import { AdversaryPlayer } from '../../components/AdversaryPlayer';
import { ScrollView } from 'react-native';
import { useQuery } from '../../hooks/useQuery';
import { formattedPlayers } from '../../utils';
import { Team } from '../../types';

interface MatchDetailsProps {
  teams: string[];
  league: string;
  serie: string
}

interface MatchDetailsProps {
  route: {
    params: {
      teams: number[];
      leagueWithSerie: string;
      hour_match: string;
    }
  }
}

export function MatchDetails({ route }: MatchDetailsProps) {
  const { goBack } = useNavigation();
  const { queryTeams } = useQuery();

  const { leagueWithSerie, teams, hour_match } = route.params;

  const teamsData = queryTeams({ teams })

  const teamsFormatted: Team[] = teamsData.map(({ data }) => ({
    id: data?.id,
    name: data?.name,
    avatar: data?.image_url,
    players: data?.players.map(player => ({
      nickname: player.first_name,
      name: player.first_name,
      avatar: player.image_url
    }))
  }))

  const players = formattedPlayers(teamsFormatted)

  function handleBack() {
    goBack();
  }

  return (
    <Container>
      <ScrollView
        style={{ width: '100%' }}
        contentContainerStyle={{ width: '100%', alignItems: 'center' }}>
        <Header>
          <BackButton onPress={handleBack}>
            <Feather name="arrow-left" size={24} color="#fff" />
          </BackButton>
          <ContainerTitle>
            <Title numberOfLines={1}>
              {leagueWithSerie}
            </Title>
          </ContainerTitle>
        </Header>
        {teamsFormatted.length && <Teams teams={teamsFormatted} />}
        <HourMatch>{hour_match}</HourMatch>
        <Players>
          {players.map(el => (
            <AdversaryPlayer key={el.id} player_team1={el.player_left} player_team2={el.player_right} />
          ))}
        </Players>
      </ScrollView>
    </Container>
  )
}