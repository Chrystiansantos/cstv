import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";
import { styled } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  width: 100%;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 32px 24px;
`;

export const BackButton = styled.TouchableOpacity``

export const ContainerTitle = styled.View`
  flex:1;
  align-items: center;
  padding-right: 24px;
`

export const Title = styled.Text`
  color: #fff;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const HourMatch = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
`

export const Players = styled.View`
  margin-top: 20px;
  flex:1;
  width: 100%;
  gap: 8px;
`