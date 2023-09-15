import { styled } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 24px;
`;

export const Title = styled.Text`
  color: #fff;
  padding: 24px 0;
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  line-height: ${RFValue(40)}px;
`

export const ContainerLoading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const ListMatch = styled.FlatList`
  display: flex;
  flex-direction: column
`;

