import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
`;

export const TitleWrap = styled.div`
  max-width: 1140px;
  ${props => props.theme.flex('center', 'flex-start')};
  margin: 0 auto;
`;

export const Title = styled.h1`
  margin-top: 230px;
  color: ${props => props.theme.white};
  font-weight: ${props => props.theme.weightBold};
  font-size: ${props => props.theme.fontExtraLarge};
  line-height: 80px;
  z-index: 100;
`;

export const YellowAccent = styled.div`
  display: flex;
  position: relative;
  max-width: 1140px;
  margin: 0 auto;
  z-index: 200;
`;

export const Line = styled.div`
  position: absolute;
  top: 385px;
`;

export const Star = styled.div`
  position: absolute;
  top: 290px;
  left: -20px;
`;

export const MouseWrap = styled.div`
  position: relative;
  max-width: 1140px;
  margin: 0 auto;
  text-align: center;
  z-index: 200;
`;

export const Mouse = styled.div`
  display: inline-block;
  position: absolute;
  bottom: -420px;
`;
