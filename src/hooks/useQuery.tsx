import { UseQueryResult, useInfiniteQuery, useQueries } from '@tanstack/react-query';
import { api } from '../service/api';
import { ItemData, Match, Team } from '../types';
import { formattedDate } from '../utils';
import { addDays, format, parseISO } from 'date-fns';

interface IQueryMatches {
  currentDate: string;
}

interface IQueryTeams {
  teams: number[];
}

export function useQuery() {
  const queryMatches = ({ currentDate }: IQueryMatches) => {
    return useInfiniteQuery({
      queryKey: ['matches'],
      queryFn: async () => {
        const { data } = await api.get<Match[]>(`matches`, {
          params: {
            'filter[begin_at]': currentDate,
            sort: 'begin_at',
          }
        });
        const formattedData: ItemData[] = data.map(el => ({
          id: el.id,
          hour_match: el.status === 'running' ? 'Agora' : formattedDate(el.begin_at),
          teams: el.opponents.map(({ opponent }) => ({
            id: opponent.id,
            name: opponent.name,
            avatar: opponent.image_url,
          })),
          league: {
            name: el.league.name,
            avatar: el.league.image_url,
          },
          serie: {
            name: el.serie.name
          }
        })).filter(el => el.teams[0]?.avatar && el.teams[1]?.avatar);
        return formattedData;
      },
      getNextPageParam: () => {
        return format(addDays(parseISO(currentDate), 1), 'yyyy-MM-dd')
      }
    })
  }

  const queryTeams = ({ teams }: IQueryTeams) => {
    return useQueries({
      queries: [
        {
          queryKey: ['team', teams[0]],
          queryFn: async (): Promise<Team> => {
            const { data } = await api.get<Team>('teams', {
              params: {
                'filter[id]': teams[0]
              }
            })
            return data[0];
          }
        },
        {
          queryKey: ['team', teams[1]],
          queryFn: async () => {
            const { data } = await api.get<Team>('teams', {
              params: {
                'filter[id]': teams[1]
              }
            })
            return data[0];
          }
        }
      ],
    })
  }


  return {
    queryMatches,
    queryTeams
  }
}
