import { RFValue } from "react-native-responsive-fontsize";
import { styled } from "styled-components/native";

export const ContainerTeams = styled.View`
  height: 119px;
  
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`
export const DescriptionTeam = styled.View`
  gap: 10px;
  align-items: center;
`

export const ImageTeam = styled.Image`
  width: 60px;
  height: 60px;
`;

export const NameTeam = styled.Text`
  color: #fff;
  font-size: ${RFValue(10)}px;
`

export const Adversary = styled.Text`
  color: rgba(255,255,255,.5);
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`