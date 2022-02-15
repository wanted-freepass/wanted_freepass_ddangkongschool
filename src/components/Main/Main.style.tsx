import styled, { keyframes } from 'styled-components';

const moveUp = keyframes`
  0% {
    transform: translateY(0px);
  } 50% {
    transform: translateY(50px);
  } 100% {
    transform: translateY(0px);
  }
`;

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

  animation: ${moveUp} 2s ease-in-out infinite;
  animation-delay: 0.5s;
`;

export const Mouse = styled.div`
  display: inline-block;
  position: absolute;
  bottom: -375px;
`;
