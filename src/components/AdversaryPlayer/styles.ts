import { RFValue } from "react-native-responsive-fontsize";
import { styled } from "styled-components/native";

interface PlayerProps {
  position: 'left' | 'right';
}

export const Container = styled.View`
  margin-top: 20px;
  justify-content: space-between;
  gap: 12px;
  flex-direction: row;
`
export const Player = styled.View<PlayerProps>`
  background-color: ${({ theme }) => theme.colors.background_light};
  flex:1;
  flex-direction: row;
  justify-content: ${({position})=> position === 'left' ? 'flex-start' : 'flex-end'};
  gap: 16px;
  border-radius: 0px 12px 12px 0;
  padding: 5px;
  padding: 15px 5px 8px;
`

export const ContainerIdentifier = styled.View``;

export const NickName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text_secondary};
`;

export const PlayerImage = styled.Image`
  margin-top: -22px;
  width: 64px;
  height: 64px;
  border-radius: 8px;
`;