import { Player, Team } from "../types";

interface PlayerFormatted {
  id: number;
  player_right?: Player;
  player_left?: Player;
}

export function formattedPlayers(teamsFormatted: Team[]) {
  const players: PlayerFormatted[] = [];

  teamsFormatted[0]?.players?.forEach((player, index: number) => {
    if (!player.avatar) return;
    players.push({
      id: index,
      player_left: player,
    })
  })

  teamsFormatted[1]?.players?.forEach((player, index) => {
    if (!player.avatar) return;

    if (players[index]) {
      players[index] = {
        ...players[index],
        id: index,
        player_right: player
      }
    } else {
      players.push({
        id: index,
        player_right: player,
      })
    }
  })

  return players;
}