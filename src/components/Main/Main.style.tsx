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
  position: relative;
  width: 100%;
`;

export const TitleWrap = styled.div`
  ${props => props.theme.flex('center', 'flex-start')};
  position: absolute;
  width: 100%;
  max-width: 1140px;
  margin-top: 230px;
`;

export const Title = styled.h1`
  margin: 0 auto;
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
  left: 12px;
`;

export const Star = styled.div`
  position: absolute;
  top: 290px;
  left: -10px;
`;

export const MouseWrap = styled.div`
  position: relative;
  max-width: 1140px;
  margin: 0 auto;
  text-align: center;
  z-index: 200;

  animation: ${moveUp} 2s ease-in-out infinite;
`;

export const Mouse = styled.div`
  display: inline-block;
  position: absolute;
  bottom: -840px;
`;

export const MainWrap = styled.div`
  display: flex;
  position: relative;
`;

export const MainImage = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;
