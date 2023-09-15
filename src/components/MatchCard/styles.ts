import { RFValue } from "react-native-responsive-fontsize";
import { styled } from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  background-color: ${({ theme }) => theme.colors.background_light};
  border-radius: 16px;
  margin: 10px 0px;
`;

export const ContainerHour = styled.View`
  margin-left: auto;
  background: ${({ theme }) => theme.colors.background_red};
  border-radius: 0 16px;
`;

export const MatchHour = styled.Text`
  color: #fff;
  padding: 8px;
  border-radius: 32px;
  font-family: ${({ theme }) => theme.fonts.bold};
  text-transform: uppercase;
`;

export const League = styled.View`
  padding: ${RFValue(8)}px ${RFValue(16)}px;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  border-top-width: 1px;
  border-top-color: rgba(255,255,255,.2);
  border-top-style: solid;
`;

export const ImageLeague = styled.ImageBackground`
  width: 16px;
  height: 16px;
  background-color: #C4C4C4;
  border-radius: 8px;
  size: cover;
`;

export const NameLeague = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(8)}px;
  color: #fff
`