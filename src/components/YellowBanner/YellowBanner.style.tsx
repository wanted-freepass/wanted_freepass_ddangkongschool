import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 573px;
  background-color: ${props => props.theme.yellow};
`;

export const Wrap = styled.article`
  ${props => props.theme.flex('center', 'center', 'column')};
  height: 100%;
  text-align: center;
  color: ${props => props.theme.white};
`;

export const Title = styled.h2`
  margin: 30px 0 50px 0;
  font-weight: 300;
  font-size: ${props => props.theme.fontLarge};
`;

export const Text = styled.p`
  font-size: ${props => props.theme.fontSemiMedium};
  line-height: 40px;
`;
