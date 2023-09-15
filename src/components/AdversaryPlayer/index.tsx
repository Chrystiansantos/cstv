import React from 'react'
import { Container, ContainerIdentifier, Name, NickName, PlayerImage, Player } from './styles'

interface AdversaryPlayerProps {
  player_team1: {
    nickname: string;
    name: string;
    avatar: string;
  },
  player_team2: {
    nickname: string;
    name: string;
    avatar: string;
  },
}

export function AdversaryPlayer({ player_team1, player_team2 }: AdversaryPlayerProps) {
  return (
    <Container>
      <Player position='right'>
        <ContainerIdentifier>
          <NickName>{player_team1?.nickname}</NickName>
          <Name>{player_team1?.name}</Name>
        </ContainerIdentifier>
        {player_team1?.avatar && <PlayerImage source={{ uri: player_team1.avatar }} />}
      </Player>
      <Player position='left'>
        {player_team2?.avatar && <PlayerImage source={{ uri: player_team2.avatar }} />}
        <ContainerIdentifier>
          <NickName>{player_team2?.nickname}</NickName>
          <Name>{player_team2?.name}</Name>
        </ContainerIdentifier>
      </Player>
    </Container>
  )
}