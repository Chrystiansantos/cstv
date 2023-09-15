import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { ActivityIndicator, ListRenderItem, RefreshControl } from 'react-native';
import { Container, Title, ContainerLoading, ListMatch } from './styles';
import { MatchCard } from '../../components/MatchCard';
import { addDays, format, parseISO } from 'date-fns'
import { useQuery } from '../../hooks/useQuery';
import { ItemData } from '../../types';
import { useTheme } from 'styled-components';

export function Home() {
  const { navigate } = useNavigation();
  const [currentDate, setCurrentDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const { queryMatches } = useQuery();
  const { colors: { text } } = useTheme();

  const {
    data,
    isLoading,
    isFetching,
    refetch,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage } = queryMatches({ currentDate });

  const loadMore = () => {
    setCurrentDate(format(addDays(parseISO(currentDate), 1), 'yyyy-MM-dd'));
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  function handleSelectMatch(matchSelect: ItemData) {
    navigate('MatchDetails', {
      teams: [matchSelect.teams[0].id, matchSelect.teams[1].id],
      hour_match: matchSelect.hour_match,
      leagueWithSerie: `${matchSelect.league.name ?? ''} ${matchSelect?.serie?.name ? `+ ${matchSelect?.serie?.name?.slice(0, 10)}` : ''}`
    })
  }

  const renderItem: ListRenderItem<ItemData> = ({ item }) => <MatchCard teams={item.teams} league={item.league} serie={item.serie} hour_match={item.hour_match} onPress={() => handleSelectMatch(item)} />

  const renderSpinner = () => {
    return <ActivityIndicator color={text} size="large" />;
  };

  return (
    <Container>
      {isLoading || !data ? (
        <ContainerLoading>
          <ActivityIndicator color={text} size="large" />
        </ContainerLoading>
      ) : (
        <ListMatch
          ListHeaderComponent={<Title>Partidas</Title>}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              onRefresh={refetch}
              refreshing={isLoading || isFetching}
              title="Pull to refresh"
              tintColor={text}
              titleColor={text}
            />
          }
          data={data.pages.map(page => page).flat()}
          keyExtractor={(item: ItemData) => String(item.id)}
          renderItem={renderItem}
          onEndReachedThreshold={0.5}
          onEndReached={loadMore}
          ListFooterComponent={isFetchingNextPage ? renderSpinner : null}
        />
      )}
    </Container >
  )
}