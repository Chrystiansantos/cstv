import React from 'react'
import { Adversary, ContainerTeams, DescriptionTeam, ImageTeam, NameTeam } from './styles'
import { Team } from '../../types'

interface TeamsProps {
  teams: Team[]
}

export function Teams({ teams }: TeamsProps) {
  return (
    <ContainerTeams>
      <DescriptionTeam>
        <ImageTeam source={{ uri: teams[0].avatar }} />
        <NameTeam>{teams[0]?.name}</NameTeam>
      </DescriptionTeam>
      <Adversary>VS</Adversary>
      <DescriptionTeam>
        <ImageTeam source={{ uri: teams[1]?.avatar }} />
        <NameTeam>{teams[1]?.name}</NameTeam>
      </DescriptionTeam>
    </ContainerTeams>
  )
}